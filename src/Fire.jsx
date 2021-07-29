import Firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'
// import core from '@actions/core'
// import dotenv from 'dotenv';

// dotenv.config()

const firebaseConfig = {
  apiKey: imort.meta.env.VITE_API_KEY,
  authDomain: imort.meta.env.VITE_AUTHDOMAINE,
  projectId: imort.meta.env.VITE_PROJECTID,
  storageBucket: imort.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: imort.meta.env.VITE_MESSAGINGSENDERID,
  appId: imort.meta.env.VITE_API_APPIDKEY,
  measurementId: imort.meta.env.VITE_MEASUREMENTID
};

Firebase.initializeApp(firebaseConfig);
const Db = Firebase.firestore();
const auth = Firebase.auth();

export { Db, auth };

