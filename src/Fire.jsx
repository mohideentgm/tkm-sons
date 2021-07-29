import Firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'
// import core from '@actions/core'
// import dotenv from 'dotenv';

// dotenv.config()

const firebaseConfig = {
  apiKey: process.env.WHO_TO_TRUST,
  authDomain: process.env.VITE_AUTHDOMAINE,
  projectId: process.env.VITE_PROJECTID,
  storageBucket: process.env.VITE_STORAGEBUCKET,
  messagingSenderId: process.env.VITE_MESSAGINGSENDERID,
  appId: process.env.VITE_API_APPIDKEY,
  measurementId: process.env.VITE_MEASUREMENTID
};

Firebase.initializeApp(firebaseConfig);
const Db = Firebase.firestore();
const auth = Firebase.auth();

export { Db, auth };

