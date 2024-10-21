import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

interface InputSectionProps {
  inputs: { [key: string]: string };
  handleInputChange: (key: string, value: string) => void;
}

const InputSection = ({ inputs, handleInputChange }: InputSectionProps) => {
  return (
    <View>
      <InputField label="Temperatura de Pico (Tp)" value={inputs.tp} onChangeText={(value) => handleInputChange('tp', value)} />
      <InputField label="Temperatura Inicial (To)" value={inputs.to} onChangeText={(value) => handleInputChange('to', value)} />
      <InputField label="Tensão (V)" value={inputs.tensao} onChangeText={(value) => handleInputChange('tensao', value)} />
      <InputField label="Amperagem (I)" value={inputs.amperagem} onChangeText={(value) => handleInputChange('amperagem', value)} />
      <InputField label="Velocidade de Soldagem (mm/min)" value={inputs.velocidadeSoldagem} onChangeText={(value) => handleInputChange('velocidadeSoldagem', value)} />
      <InputField label="Valor de n" value={inputs.n} onChangeText={(value) => handleInputChange('n', value)} />
      <InputField label="Densidade do Material (p)" value={inputs.densidade} onChangeText={(value) => handleInputChange('densidade', value)} />
      <InputField label="Calor Específico (Cp)" value={inputs.calorEspecifico} onChangeText={(value) => handleInputChange('calorEspecifico', value)} />
      <InputField label="Espessura da Chapa (t)" value={inputs.espessuraChapa} onChangeText={(value) => handleInputChange('espessuraChapa', value)} />
      <InputField label="Distância em mm" value={inputs.distancia} onChangeText={(value) => handleInputChange('distancia', value)} />
      <InputField label="Temperatura de Fusão do Material (Tm)" value={inputs.temperaturaFusao} onChangeText={(value) => handleInputChange('temperaturaFusao', value)} />
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
  },
  input: {
    width: '60%',
    height: 40,
    borderColor: '#fff',
    borderWidth: 1,
    paddingHorizontal: 10,
    color: '#fff',
    borderRadius: 5,
  },
});

export default InputSection;
