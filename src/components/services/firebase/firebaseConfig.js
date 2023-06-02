import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore" ;



const firebaseConfig = {
    // apiKey: process.env.REACT_APP_apiKey,
    // authDomain: process.env.REACT_APP_authDomain,
    // projectId: process.env.REACT_APP_projectId,
    // storageBucket: process.env.REACT_APP_storageBucket,
    // messagingSenderId: process.env.REACT_APP_messagingSenderId,
    // appId: process.env.REACT_APP_appId,
 
 
  apiKey: "AIzaSyBnwiOznSKbKXQ8m3uTeCqKVFRfaRDq_x0",
  authDomain: "miecommerce-d7505.firebaseapp.com",
  projectId: "miecommerce-d7505",
  storageBucket: "miecommerce-d7505.appspot.com",
  messagingSenderId: "567725635412",
  appId: "1:567725635412:web:749a9e531683e312b57ac1",
  measurementId: "G-3G0PCDEX7F"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore (app);
