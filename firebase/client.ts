import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyCsKnOyVQ_mu71DOXbUYBsGhBXg5A83gRg",
  authDomain: "tuff-interview.firebaseapp.com",
  projectId: "tuff-interview",
  storageBucket: "tuff-interview.firebasestorage.app",
  messagingSenderId: "1084334446366",
  appId: "1:1084334446366:web:2ab5c05851501928f9db0f",
  measurementId: "G-FJV8WCYJDH",
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
