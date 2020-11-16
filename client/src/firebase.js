import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDX6OyCqQPE0bNDVhn-Se04UCoCXhViZxw",
  authDomain: "countdown-square-junjie.firebaseapp.com",
  databaseURL: "https://countdown-square-junjie.firebaseio.com",
  projectId: "countdown-square-junjie",
  storageBucket: "countdown-square-junjie.appspot.com",
  messagingSenderId: "861955980198",
  appId: "1:861955980198:web:09530e8e851accb71dad67",
  measurementId: "G-2QJ9SKWCL0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
