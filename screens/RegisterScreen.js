import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleRegister = () => {
   
    irebase.auth().createUserWithEmailAndPassword(email, password)
       .then(() => {
         navigation.navigate('Login');
       })
      .catch((error) => {
         console.log(error);
       });
    navigation.navigate('Login');
  };

  return (
    <View>
      <Text>Page d'inscription</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Mot de passe"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="S'inscrire" onPress={handleRegister} />
    </View>
  );
};

const styles = StyleSheet.create({
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
  
  

export default RegisterScreen;
