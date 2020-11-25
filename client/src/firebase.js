import firebase from 'firebase';

//const firebaseConfig = {
//  apiKey: "AIzaSyDX6OyCqQPE0bNDVhn-Se04UCoCXhViZxw",
//  authDomain: "countdown-square-junjie.firebaseapp.com",
//  databaseURL: "https://countdown-square-junjie.firebaseio.com",
//  projectId: "countdown-square-junjie",
//  storageBucket: "countdown-square-junjie.appspot.com",
//  messagingSenderId: "861955980198",
//  appId: "1:861955980198:web:09530e8e851accb71dad67",
//  measurementId: "G-2QJ9SKWCL0"
//};

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYucuHSoKzU-oHMMAYtfk_3dCveg8xqu4",
  authDomain: "junjie-wu.firebaseapp.com",
  databaseURL: "https://junjie-wu.firebaseio.com",
  projectId: "junjie-wu",
  storageBucket: "junjie-wu.appspot.com",
  messagingSenderId: "1027036292463",
  appId: "1:1027036292463:web:bfe6049e4feb84338cb49a",
  measurementId: "G-443F3R3YNF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
