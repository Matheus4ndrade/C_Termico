  import React, { useState } from 'react';
  import { View, Text, TouchableOpacity, Modal, StyleSheet, Linking } from 'react-native';

  export default function AboutButton() {
    const [modalVisible, setModalVisible] = useState(false);

    const openLinkedIn = () => {
      Linking.openURL('https://www.linkedin.com/in/matheus-andrade-4449212b7/');
    };

    const openGitHub = () => {
      Linking.openURL('https://github.com/Matheus4ndrade'); 
    };

    return (
      <View>
        <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.button}>
          <Text style={styles.buttonText}>Sobre Autor</Text>
        </TouchableOpacity>

        <Modal
          transparent={true}
          visible={modalVisible}
          animationType="slide"
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalBackground}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>Sobre o Autor</Text>
              <Text style={styles.modalText}>
                Este aplicativo foi desenvolvido como parte de um TG para a análise de ciclos térmicos 
                para melhorias de implementação, ou entrar em contato segue os links abaixo para mais:
              </Text>
              <TouchableOpacity onPress={openLinkedIn} style={styles.linkButton}>
                <Text style={styles.linkText}>LinkedIn</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={openGitHub} style={styles.linkButton}>
                <Text style={styles.linkText}>GitHub</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
                <Text style={styles.closeText}>Fechar</Text>
              </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginRight: 5,
    backgroundColor: '#007BFF',
    paddingVertical: 8,  
    paddingHorizontal:8, 
    borderRadius: 8,           
  },
  buttonText: {
    color: '#ffffff',     
    fontSize: 10,
    fontWeight: 'bold',       
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '80%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  linkButton: {
    marginBottom: 10,
  },
  linkText: {
    color: '#007BFF',
    fontSize: 16,
  },
  closeButton: {
    backgroundColor: '#4f4f4f',
    padding: 10,
    borderRadius: 5,
  },
  closeText: {
    color: '#fff',
    fontSize: 16,
  },
});
