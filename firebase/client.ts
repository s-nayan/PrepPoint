// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: process.env.CLIENT_APIKEYS,
  authDomain: process.env.CLIENT_AUTH_DOMAIN,
  projectId: process.env.CLIENT_PROJECT_ID,
  storageBucket: process.env.CLIENT_STORAGE_BUCKET,
  messagingSenderId: process.env.CLIENT_MESSAGING_SENDER_ID,
  appId: process.env.CLIENT_APP_ID,
  measurementId: process.env.CLIENT_MEASUREMENT_ID
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);
export {auth, db};