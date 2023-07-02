import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleRegister = () => {
    // Logique d'inscription
    // Création d'un compte utilisateur, enregistrement des informations, etc.
    // Par exemple, on peut utiliser Firebase pour l'authentification :
    // firebase.auth().createUserWithEmailAndPassword(email, password)
    //   .then(() => {
    //     // Compte créé avec succès, naviguer vers la page de connexion
    //     navigation.navigate('Login');
    //   })
    //   .catch((error) => {
    //     // Gérer les erreurs d'inscription
    //     console.log(error);
    //   });
    // Pour cet exemple, nous supposerons que l'inscription est réussie
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

export default RegisterScreen;
