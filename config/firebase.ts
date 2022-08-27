// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDwC_W7kNijW6spE86k9Mt47dPADIIiVNI',
  authDomain: 'conexao-arte.firebaseapp.com',
  projectId: 'conexao-arte',
  storageBucket: 'conexao-arte.appspot.com',
  messagingSenderId: '949002780695',
  appId: '1:949002780695:web:233329a9caeb52ed801c52',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
