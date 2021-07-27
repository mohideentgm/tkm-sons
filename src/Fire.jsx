import Firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'
import secrets from 'secrets'

const firebaseConfig = {
  apiKey: secrets.VITE_API_KEY,
  authDomain: secrets.VITE_AUTHDOMAINE,
  projectId: secrets.VITE_PROJECTID,
  storageBucket: secrets.VITE_STORAGEBUCKET,
  messagingSenderId: secrets.VITE_MESSAGINGSENDERID,
  appId: secrets.VITE_APPID,
  measurementId: secrets.VITE_MEASUREMENTID
};

Firebase.initializeApp(firebaseConfig);
const Db = Firebase.firestore();
const auth = Firebase.auth();

export { Db, auth };








  // apiKey: import.meta.env.VITE_API_KEY,
  // authDomain: import.meta.env.VITE_AUTHDOMAINE,
  // projectId: import.meta.env.VITE_PROJECTID,
  // storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  // messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  // appId: import.meta.env.VITE_APPID,
  // measurementId: import.meta.env.VITE_MEASUREMENTID