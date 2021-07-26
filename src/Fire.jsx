import Firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTHDOMAINE,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID,
  appId: process.envAPPID,
  measurementId: process.env.MEASUREMENTID
};

Firebase.initializeApp(firebaseConfig);
const Db = Firebase.firestore();
const auth = Firebase.auth();

export { Db, auth };
