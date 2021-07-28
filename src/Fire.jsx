import Firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'
// import core from '@actions/core'
import dotenv from 'dotenv';

dotenv.config()

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTHDOMAINE,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID,
  appId: process.env.API_APPIDKEY,
  measurementId: process.env.MEASUREMENTID
};

Firebase.initializeApp(firebaseConfig);
const Db = Firebase.firestore();
const auth = Firebase.auth();

export { Db, auth };

