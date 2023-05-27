// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore" ;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnwiOznSKbKXQ8m3uTeCqKVFRfaRDq_x0",
  authDomain: "miecommerce-d7505.firebaseapp.com",
  projectId: "miecommerce-d7505",
  storageBucket: "miecommerce-d7505.appspot.com",
  messagingSenderId: "567725635412",
  appId: "1:567725635412:web:749a9e531683e312b57ac1",
  measurementId: "G-3G0PCDEX7F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore (app);
