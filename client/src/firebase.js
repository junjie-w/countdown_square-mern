// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCtVIHXVeQaZeoMiYQsTXnYeTngpjgrktI",
  authDomain: "countdown-timer-175f5.firebaseapp.com",
  databaseURL: "https://countdown-timer-175f5.firebaseio.com",
  projectId: "countdown-timer-175f5",
  storageBucket: "countdown-timer-175f5.appspot.com",
  messagingSenderId: "744542519336",
  appId: "1:744542519336:web:13caae88503fe8510f351d",
  measurementId: "G-PPVZ60X63V"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
