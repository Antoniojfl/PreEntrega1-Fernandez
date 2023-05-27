import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const {
  REACT_APP_apiKey,
  REACT_APP_authDomain,
  REACT_APP_projectId,
  REACT_APP_storageBucket,
  REACT_APP_messagingSenderId,
  REACT_APP_appId
} = process.env


const firebaseConfig = {
  apiKey: REACT_APP_apiKey,
  authDomain: REACT_APP_authDomain,
  projectId: REACT_APP_projectId,
  storageBucket: REACT_APP_storageBucket,
  messagingSenderId: REACT_APP_messagingSenderId,
  appId: REACT_APP_appId,
  experimentalAutoDetectLongPolling: true
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)