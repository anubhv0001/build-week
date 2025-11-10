// src/firebase/config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics"; // Import Analytics if needed

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBYnuqNNO2zkSH6r9kFNXLnWMcTWhtM8pk",
  authDomain: "gamify-education-6f91d.firebaseapp.com",
  databaseURL: "https://gamify-education-6f91d-default-rtdb.firebaseio.com",
  projectId: "gamify-education-6f91d",
  storageBucket: "gamify-education-6f91d.appspot.com",
  messagingSenderId: "191898541675",
  appId: "1:191898541675:web:3832ad7d3ba9a008e21b2e",
  measurementId: "G-Q4QN6B67V5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Optional: initialize Analytics if you want to use it
export const analytics = getAnalytics(app);
