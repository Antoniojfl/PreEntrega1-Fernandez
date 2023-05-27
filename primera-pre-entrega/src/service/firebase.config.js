import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

console.log(import.meta.env.MODE)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_apiKey,
  authDomain: import.meta.env.VITE_REACT_APP_authDomain,
  projectId: import.meta.env.VITE_REACT_APP_projectId,
  storageBucket: import.meta.env.VITE_REACT_APP_storageBucket,
  messagingSenderId: import.meta.env.VITE_REACT_APP_messagingSenderId,
  appId: import.meta.env.VITE_REACT_APP_appId
};

console.log('firebaseConfig: ', firebaseConfig)
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

/* REACT_APP_apiKey=AIzaSyD2hh9zBNzHv1CHvkBBECdVRyDdDcTHRgw
REACT_APP_authDomain=final-project-react-store.firebaseapp.com
REACT_APP_projectId=final-project-react-store
REACT_APP_storageBucket=final-project-react-store.appspot.com
REACT_APP_messagingSenderId=493502684971
REACT_APP_appId=1:493502684971:web:56b53c7ce98253bd956f6e */