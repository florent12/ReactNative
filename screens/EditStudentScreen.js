import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const EditStudentScreen = ({ navigation, route }) => {
  const { studentId } = route.params;
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Récupérer les informations de l'étudiant à partir de Firestore
    const fetchStudent = async () => {
    /*  try {
        const studentRef = firebase.firestore().collection('students').doc(studentId);
        const studentDoc = await studentRef.get();
        
        if (studentDoc.exists) {
          const studentData = studentDoc.data();
          setName(studentData.name);
          setAge(studentData.age.toString());
        } else {
          console.log('Aucun document trouvé pour cet ID d\'étudiant');
        }
      } catch (error) {
        console.log('Erreur lors de la récupération des informations de l\'étudiant:', error);
      }*/
    };

    fetchStudent();
  }, [studentId]);

  const handleUpdateStudent = async () => {
   /* if (name && age) {
      try {
        setIsLoading(true);
        const studentRef = firebase.firestore().collection('students').doc(studentId);
        await studentRef.update({
          name,
          age: parseInt(age),
        });
        setIsLoading(false);
        navigation.goBack();
      } catch (error) {
        console.log('Erreur lors de la mise à jour des informations de l\'étudiant:', error);
        setIsLoading(false);
      }
    } else {
      console.log('Veuillez remplir tous les champs');
    }*/
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modifier les informations de l'étudiant</Text>
      <TextInput
        style={styles.input}
        placeholder="Nom de l'étudiant"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Âge de l'étudiant"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />
      <TouchableOpacity
        style={styles.updateButton}
        onPress={handleUpdateStudent}
        disabled={isLoading}
      >
        <Text style={styles.buttonText}>{isLoading ? 'Chargement...' : 'Mettre à jour'}</Text>
      </TouchableOpacity>
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
    // Styles spécifiques à chaque écran
    // ...
  });
  
  

export default EditStudentScreen;
