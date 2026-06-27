import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkCQaWKs4hg6vggfaVQ03EctSZlgMCpW4",
  authDomain: "kidventor-ec0e1.firebaseapp.com",
  projectId: "kidventor-ec0e1",
  storageBucket: "kidventor-ec0e1.firebasestorage.app",
  messagingSenderId: "1075456258580",
  appId: "1:1075456258580:web:af445b29490b019793ad01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase only once
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Services
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;