// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCYXSYobJkFioKuXds7QQNNP_1M_YvE8NQ",
  authDomain: "haryanawastemanagement-63d56.firebaseapp.com",
  databaseURL: "https://haryanawastemanagement-63d56-default-rtdb.firebaseio.com",
  projectId: "haryanawastemanagement-63d56",
  storageBucket: "haryanawastemanagement-63d56.appspot.com",
  messagingSenderId: "927296277506",
  appId: "1:927296277506:web:a49c6fed3277304c66ab1b",
  measurementId: "G-9XMDMFFR5Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database=getAuth(app);
export const firestore = getFirestore(app);