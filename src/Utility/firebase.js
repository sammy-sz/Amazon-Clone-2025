// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth}from 'firebase/auth';
import 'firebase/compact/firestore';
import 'firebase/compact/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApGOO7gxp07NWEluPvtGpl5oUMe53LtjE",
  authDomain: "clone-2025-ece77.firebaseapp.com",
  projectId: "clone-2025-ece77",
  storageBucket: "clone-2025-ece77.firebasestorage.app",
  messagingSenderId: "811541589947",
  appId: "1:811541589947:web:a22f283f101d4be53a9e9e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const db =app.firestore()
