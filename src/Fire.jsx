import Firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'
// import core from '@actions/core'
// import dotenv from 'dotenv';

// dotenv.config()

const firebaseConfig = {
  apiKey: import.meta.env.API_KEY,
  authDomain: import.meta.env.AUTHDOMAINE,
  projectId: import.meta.env.PROJECTID,
  storageBucket: import.meta.env.STORAGEBUCKET,
  messagingSenderId: import.meta.env.MESSAGINGSENDERID,
  appId: import.meta.env.API_APPIDKEY,
  measurementId: import.meta.env.MEASUREMENTID
};

Firebase.initializeApp(firebaseConfig);
const Db = Firebase.firestore();
const auth = Firebase.auth();

export { Db, auth };

