import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const AddStudentScreen = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleAddStudent = () => {
    
  };

  return (
    <View>
      <TextInput
        placeholder="Nom de l'étudiant"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Âge de l'étudiant"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />
      <Button title="Ajouter" onPress={handleAddStudent} />
    </View>
  );
};

// Imports...

const styles = StyleSheet.create({
    // Styles communs
    container: {
      flex: 1,
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    input: {
      height: 40,
      width: '100%',
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
    button: {
      backgroundColor: 'blue',
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
      marginTop: 10,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
    listItem: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    listItemText: {
      fontSize: 16,
      marginLeft: 10,
    },
    searchInput: {
      height: 40,
      width: '100%',
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
      borderRadius: 5,
    },
    errorMessage: {
      color: 'red',
      fontSize: 14,
      marginTop: 10,
    },
  });
  
  

export default AddStudentScreen;
