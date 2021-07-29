import Firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'
// import core from '@actions/core'
// import dotenv from 'dotenv';

// dotenv.config()

const firebaseConfig = {
  apiKey: "AIzaSyBphz0GEdoOMm-jRXACOHkz16M5gkMjM4Y",
  authDomain: "tkm-sons.firebaseapp.com",
  projectId: "tkm-sons",
  storageBucket: "tkm-sons.appspot.com",
  messagingSenderId: "707740237820",
  appId: "1:707740237820:web:7dd6d56d0a2cb91909bc79",
  measurementId: "G-L1DPJYB4JS"
};

Firebase.initializeApp(firebaseConfig);
const Db = Firebase.firestore();
const auth = Firebase.auth();

export { Db, auth };

