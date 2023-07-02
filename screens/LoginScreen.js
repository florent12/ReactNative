import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
          
        navigation.navigate('Home');
      })
      .catch((error) => {
          
         console.log(error);
      });
   
    navigation.navigate('Home');
  };

  const handleRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <View>
      <Text>Page de connexion</Text>
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
      <Button title="Se connecter" onPress={handleLogin} />
      <Text>Vous n'avez pas de compte ?</Text>
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
        width: 339,
        height: 55,
        flexShrink: 0,
        borderRadius: 5,
        background: 'black'
    },
    button: {
        width: 339,
        height: 60,
        flexShrink : 0,
        borderRadius: 5,
        border: 2,
        background: 'green',
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
  
  

export default LoginScreen;
