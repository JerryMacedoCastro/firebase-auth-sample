// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBb_OSM6uoV8qR62CdEvu1BLl7Ybpwk8cs',
  authDomain: 'fir-auth-sampletest.firebaseapp.com',
  projectId: 'fir-auth-sampletest',
  storageBucket: 'fir-auth-sampletest.appspot.com',
  messagingSenderId: '79414818275',
  appId: '1:79414818275:web:74b942c5e81c1ea7e75cd6',
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
