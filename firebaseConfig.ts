
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// IMPORTANT: Paste your web app's Firebase configuration here.
// You can get this from the Firebase console for your project.
const firebaseConfig = {
  apiKey: "AIzaSyBOFslmqlDOZScv5U4qZ-_zcufzTO-LI-E",
  authDomain: "flowapp-03.firebaseapp.com",
  projectId: "flowapp-03",
  storageBucket: "flowapp-03.firebasestorage.app",
  messagingSenderId: "1099349104193",
  appId: "1:1099349104193:web:305ef5be67118740f618c0",
  measurementId: "G-6TMZ2D08MJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize and export Firebase services
export const db = getFirestore(app);
export const auth = getAuth(app);
