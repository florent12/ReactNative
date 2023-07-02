import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const AddStudentScreen = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleAddStudent = () => {
    // Logique d'ajout de l'étudiant
    // Par exemple, appel à une API pour enregistrer les informations de l'étudiant dans la base de données
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

export default AddStudentScreen;
