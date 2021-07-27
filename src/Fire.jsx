import Firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'

import dotenv from 'dotenv';

 dotenv.config()

const firebaseConfig = {
  apiKey: core.getInput('API_KEY'),
  authDomain: core.getInput('AUTHDOMAINE'),
  projectId: core.getInput('PROJECTID'),
  storageBucket: core.getInput('STORAGEBUCKET'),
  messagingSenderId: core.getInput('MESSAGINGSENDERID'),
  appId: core.getInput('API_APPIDKEY'),
  measurementId: core.getInput('MEASUREMENTID')
};

Firebase.initializeApp(firebaseConfig);
const Db = Firebase.firestore();
const auth = Firebase.auth();

export { Db, auth };

