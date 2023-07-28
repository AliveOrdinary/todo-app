// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCcgTX5VpLDwa__WHXZOGG3SHzABuCQfkg",
  authDomain: "todo-app-5c182.firebaseapp.com",
  projectId: "todo-app-5c182",
  storageBucket: "todo-app-5c182.appspot.com",
  messagingSenderId: "894913958122",
  appId: "1:894913958122:web:8dc784308c51181e498793",
  measurementId: "G-RH77GEFMKD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
