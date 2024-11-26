import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal } from 'react-native';
import InputSection from './inputSection';
import { LineChart } from 'react-native-chart-kit';

export default function MainLogic() {
  const [inputs, setInputs] = useState({
    tp: '',
    to: '',
    tensao: '',
    amperagem: '',
    velocidadeSoldagem: '',
    n: '',
    densidade: '',
    calorEspecifico: '',
    espessuraChapa: '',
    distancia: '',
    temperaturaFusao: ''
  });

  const [resultado, setResultado] = useState('');
  const [graficoDistancia, setGraficoDistancia] = useState<{ mm: number; temperatura: number }[]>([]);
  const [graficoTempo, setGraficoTempo] = useState<{ temperatura: number; tempo: string }[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const chartRef = useRef(null);
  const [exibirGrafico, setExibirGrafico] = useState<'distancia' | 'tempo' | ''>('');

  const handleInputChange = (key: string, value: string) => {
    setInputs({ ...inputs, [key]: value });
  };

  const parseInputValues = (value: string) => {
    return parseFloat(value.replace(',', '.'));
  };

  const calcular = () => {
    const I = parseInputValues(inputs.amperagem);
    const V = parseInputValues(inputs.tensao);
    const n = parseInputValues(inputs.n);
    const velocidadeSoldagem = parseInputValues(inputs.velocidadeSoldagem);
    const Tp = parseInputValues(inputs.tp);
    const To = parseInputValues(inputs.to);
    const p = parseInputValues(inputs.densidade);
    const Cp = parseInputValues(inputs.calorEspecifico);
    const t = parseInputValues(inputs.espessuraChapa);
    const d = parseInputValues(inputs.distancia);
    const Tm = parseInputValues(inputs.temperaturaFusao);
    const Ht = (I * V * n * 60) / velocidadeSoldagem;
    const resulUm = (1 / (Tp - To));
    const resulDois = ((4.13 * (p * Cp / 1000000000) * t * 1) / Ht);
    const resulTres = (1 / (Tm - To));
    const resultadoAdams = ((resulUm - resulTres) / resulDois);

    if (d > 20) {
      alert('O valor de "Distância em mm" não pode ser maior que 20.');
      return;
    }

    if (Object.values(inputs).some(val => !val)) {
      alert('Por favor, preencha todos os campos');
      return;
    }

    const ciclos = [];
    for (let i = 0; i <= d; i++) {
      const Tp_mm = (1 / (((4.13 * (p * Cp / 1000000000) * t * i / Ht)) + resulTres)) + To;
      ciclos.push({ mm: i, temperatura: Tp_mm });
    }

    const temperaturaTempo = ciclos.map((ciclo, index) => {
      const VelSolTem = (60 / velocidadeSoldagem) * ciclo.mm;
      return {
        temperatura: Math.floor(ciclo.temperatura),
        tempo: VelSolTem.toFixed(1)
      };
    });

    const formattedResult = `Valor de Y em ${Tp}° é:
    ${resultadoAdams.toFixed(2)} mm
    Heat Input (Ht):
    ${Ht.toFixed(0)} J/mm`;

    setResultado(formattedResult);
    setModalVisible(true); 
    setGraficoDistancia(ciclos);
    setGraficoTempo(temperaturaTempo);

  };

  const renderGraphAndText = () => {
    if (exibirGrafico === 'distancia') {
      return (
        <ScrollView>
          <Text style={styles.label}>Resultado Temperatura x Distância (mm):</Text>
          <ScrollView horizontal>
          <View ref={chartRef}>
            <LineChart
            data={{
              labels: graficoDistancia.map(ciclo => `${ciclo.mm}`),
              datasets: [{ data: graficoDistancia.map(ciclo => ciclo.temperatura) }],
            }}
            width={graficoDistancia.length * 50}
            height={220}
            yAxisSuffix="°C"
            chartConfig={chartConfig}
            style={chartStyle}
            />
            </View>
        </ScrollView>
          <View style={styles.resultContainer}>
            {graficoDistancia.map((ciclo, index) => (
              <Text key={index} style={styles.resultText}>
                {ciclo.mm} mm: {ciclo.temperatura.toFixed(0)}°C
              </Text>
            ))}
          </View>
        </ScrollView>
      );
    } else if (exibirGrafico === 'tempo') {
      return (
      <ScrollView>
        <Text style={styles.label}>Resultado Temperatura x Tempo (s):</Text>
        <ScrollView horizontal>
          <LineChart
            data={{
              labels: graficoTempo.map(item => `${item.tempo}`),
              datasets: [{ data: graficoTempo.map(item => item.temperatura) }],
            }}
            width={graficoTempo.length * 50} 
            height={220}
            yAxisSuffix="°C"
            chartConfig={chartConfig}
            style={chartStyle}
          />
        </ScrollView>
        <View style={styles.resultContainer}>
          {graficoTempo.map((item, index) => (
            <Text key={index} style={styles.resultText}>
              {item.tempo} s: {item.temperatura}°C
            </Text>
          ))}
        </View>
      </ScrollView>
      );
    }
    return null;
  };  

return (
  <ScrollView contentContainerStyle={styles.container}>
    <InputSection inputs={inputs} handleInputChange={handleInputChange}/>
    <View style={styles.containerButtonCal}>
      <TouchableOpacity style={styles.button} onPress={calcular}>
        <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>
    </View>
    <Modal visible={modalVisible} transparent={true} animationType="slide">
  <View style={styles.modalContainer}>
    <ScrollView contentContainerStyle={styles.modalContent}>
      <Text style={styles.resultado}>{resultado}</Text>
      {renderGraphAndText()}
      <View>
        {exibirGrafico !== 'distancia' && (
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setExibirGrafico('distancia');
              setResultado('');
            }}>
            <Text style={styles.buttonText}>Mostrar Temperatura x Distância</Text>
          </TouchableOpacity>
        )}
        {exibirGrafico !== 'tempo' && (
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setExibirGrafico('tempo');
              setResultado('');
            }}>
            <Text style={styles.buttonText}>Mostrar Temperatura x Tempo</Text>
          </TouchableOpacity>
        )}
      </View>
      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => {
          setModalVisible(false);
          setExibirGrafico('');
          setResultado('');
        }}>
        <Text style={styles.buttonText}>Fechar</Text>
      </TouchableOpacity>
    </ScrollView>
  </View>
</Modal>
</ScrollView>
  );
}
  const chartStyle = {
    borderRadius: 16,
  };
  
  const chartConfig = {
    backgroundColor: '#ffffff',
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    decimalPlaces: 0,
    color: (opacity = 1) => `#008000`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  };

  const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      padding: 10,
      backgroundColor: '#797979',
    },
    containerButton: {
      flex: 1,
      alignItems: 'center',
      padding: 10,
    },
    containerButtonCal: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      backgroundColor: '#008000',
      padding: 13,
      borderRadius: 5,
      margin: 5,
    },
    buttonText: {
      color: '#fff',
      fontSize: 12,
      fontWeight: 'bold',
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center', 
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 20, 
      width: '90%',
      alignItems: 'center',
      alignSelf: 'center',
    },
    closeButton: {
      backgroundColor: '#FF0000',
      padding: 10,
      borderRadius: 5,
      alignSelf: 'center',
      marginTop: 13,
    },
    resultado: {
      fontSize: 13,
      marginBottom: 5,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    label: {
      fontSize: 15,
      fontWeight: 'bold',
    },
    resultContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    resultText: {
      flexBasis: '50%',
      fontSize: 13,
      textAlign: 'center', 
      paddingVertical: 2, 
    },
  });