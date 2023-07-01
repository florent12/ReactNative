import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'expo-firebase-app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const firebaseConfig = {
  // Vos informations de configuration Firebase
  apiKey: 'AIzaSyB-XWsOy0f1tZNkT6mtQ7zkDj3bXYSnsvQ',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'appreactnative-a9f79',
  storageBucket: 'Yappreactnative-a9f79.appspot.com',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID',
};

// Vérifiez si Firebase est déjà initialisé pour éviter les erreurs
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
