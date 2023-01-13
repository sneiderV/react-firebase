import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: ProcessingInstruction.env.REACT_APP_APIKEY ,
  authDomain: ProcessingInstruction.env.REACT_APP_AUTHDOMAIN ,
  projectId: ProcessingInstruction.env.REACT_APP_PROJECTID ,
  storageBucket: ProcessingInstruction.env.REACT_APP_STORAGEBUCKET ,
  messagingSenderId: ProcessingInstruction.env.REACT_APP_MESSAGINGSENDERID ,
  appId: ProcessingInstruction.env.REACT_APP_APPID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {db, auth};