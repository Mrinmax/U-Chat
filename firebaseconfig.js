// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbKfHDtJMJ7LcRSRH-qyTEMXF06hWtd9M",
  authDomain: "chatapp-6bb2d.firebaseapp.com",
  projectId: "chatapp-6bb2d",
  storageBucket: "chatapp-6bb2d.appspot.com",
  messagingSenderId: "802806216515",
  appId: "1:802806216515:web:9b3dca7064d729f63561f6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { auth, db };
