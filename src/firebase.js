
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getStorage } from 'firebase/storage'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBJPOUcIiC0fn7fmysmejuPE8LE65MhS8c",
  authDomain: "chat-1a14c.firebaseapp.com",
  projectId: "chat-1a14c",
  storageBucket: "chat-1a14c.appspot.com",
  messagingSenderId: "297806223475",
  appId: "1:297806223475:web:86870a43433544d949b206",
  measurementId: "G-6GYYJTV1Y6"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const storage=getStorage();
export const db =getFirestore();