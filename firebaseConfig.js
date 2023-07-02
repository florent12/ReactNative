
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig =  {
  apiKey: 'AIzaSyB-XWsOy0f1tZNkT6mtQ7zkDj3bXYSnsvQ',
  authDomain: 'appreactnative-a9f79.firebaseapp.com',
  projectId: 'appreactnative-a9f79',
  storageBucket: 'appreactnative-a9f79.appspot.com',
  messagingSenderId: '342357770474',
  appId: '1:342357770474:ios:f3700d93150316e9631793',
};

firebase.initializeApp(firebaseConfig);

export default firebaseConfig;
