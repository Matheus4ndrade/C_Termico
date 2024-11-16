  import React, { useState } from 'react';
  import { View, Text, TextInput, StyleSheet } from 'react-native';

  interface InputSectionProps {
    inputs: { [key: string]: string };
    handleInputChange: (key: string, value: string) => void;
  }

  const InputSection = ({ inputs, handleInputChange }: InputSectionProps) => {
    const [isNFocused, setIsNFocused] = useState(false);

    return (
      <View>
        <InputField label="Temperatura de Pico (°C)" value={inputs.tp} onChangeText={(value) => handleInputChange('tp', value)} />
        <InputField label="Temperatura Inicial (°C)" value={inputs.to} onChangeText={(value) => handleInputChange('to', value)} />
        <InputField label="Tensão (V)" value={inputs.tensao} onChangeText={(value) => handleInputChange('tensao', value)} />
        <InputField label="Amperagem (I)" value={inputs.amperagem} onChangeText={(value) => handleInputChange('amperagem', value)} />
        <InputField label="Velocidade de Soldagem (mm/min)" value={inputs.velocidadeSoldagem} onChangeText={(value) => handleInputChange('velocidadeSoldagem', value)} />
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Valor de n</Text>
          <TextInput
            style={styles.input}
            value={inputs.n}
            onChangeText={(value) => handleInputChange('n', value)}
            keyboardType="numeric"
            onFocus={() => setIsNFocused(true)}
            onBlur={() => setIsNFocused(false)}
          />
          {isNFocused && (
            <Text style={styles.message}>Insira o valor de forma decimal Ex.: 0,85</Text>
          )}
        </View>
        
        <InputField label="Densidade do Material (Kg/m³)" value={inputs.densidade} onChangeText={(value) => handleInputChange('densidade', value)} />
        <InputField label="Calor Específico (Cp)" value={inputs.calorEspecifico} onChangeText={(value) => handleInputChange('calorEspecifico', value)} />
        <InputField label="Espessura da Chapa (mm)" value={inputs.espessuraChapa} onChangeText={(value) => handleInputChange('espessuraChapa', value)} />
        <InputField label="Número de Escalas (mm)" value={inputs.distancia} onChangeText={(value) => handleInputChange('distancia', value)} />
        <InputField label="Temperatura de Fusão do Material (°C)" value={inputs.temperaturaFusao} onChangeText={(value) => handleInputChange('temperaturaFusao', value)} />
      </View>
    );
  };

  interface InputFieldProps {
    label: string;
    value: string;
    onChangeText: (text: string) => void;
  }

  const InputField = ({ label, value, onChangeText }: InputFieldProps) => (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        keyboardType="numeric"
      />
    </View>
  );

  const styles = StyleSheet.create({
    inputContainer: {
      marginBottom: 15,
      alignItems: 'center',
    },
    label: {
      color: '#fff',
      marginBottom: 5,
      fontSize: 18,
      fontWeight: 'bold',
    },
    input: {
      width: '60%',
      height: 40,
      borderColor: '#fff',
      borderWidth: 1.5,
      paddingHorizontal: 10,
      color: '#fff',
      borderRadius: 5,
      textAlign: 'center',
      fontSize: 18,
    },
    message: {
      marginTop: 5,
      color: 'red',  
      fontSize: 12,
      },
  });

  export default InputSection; 
