import Firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'
// import core from '@actions/core'
// import dotenv from 'dotenv';

// dotenv.config()

const firebaseConfig = {
  apiKey: import.meta.env.WHO_TO_TRUST,
  authDomain: import.meta.env.VITE_AUTHDOMAINE,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_API_APPIDKEY,
  measurementId: import.meta.env.VITE_MEASUREMENTID
};

Firebase.initializeApp(firebaseConfig);
const Db = Firebase.firestore();
const auth = Firebase.auth();

export { Db, auth };

