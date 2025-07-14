// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAtXfR4MTZluVSGnH5qBh8CLAE43XRnjgQ",
  authDomain: "preppoint-1509.firebaseapp.com",
  projectId: "preppoint-1509",
  storageBucket: "preppoint-1509.firebasestorage.app",
  messagingSenderId: "1013747578392",
  appId: "1:1013747578392:web:8e323a12bc77d33a09756d",
  measurementId: "G-XHBLJVL096"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);
export {auth, db};