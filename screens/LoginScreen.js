import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    // Logique de connexion
    // Vérification des informations de connexion, appel à une API, etc.
    // Par exemple, on peut utiliser Firebase pour l'authentification :
    // firebase.auth().signInWithEmailAndPassword(email, password)
    //   .then(() => {
    //     // Connexion réussie, naviguer vers la page d'accueil
    //     navigation.navigate('Home');
    //   })
    //   .catch((error) => {
    //     // Gérer les erreurs de connexion
    //     console.log(error);
    //   });
    // Pour cet exemple, nous supposerons que la connexion est réussie
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

export default LoginScreen;
