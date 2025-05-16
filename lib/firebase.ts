// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrX0J9X_qlbMT-WTYzfvoODE-cdnIaWDk",
  authDomain: "bd-shadaystore.firebaseapp.com",
  projectId: "bd-shadaystore",
  storageBucket: "bd-shadaystore.firebasestorage.app",
  messagingSenderId: "746357961148",
  appId: "1:746357961148:web:469a00fdb0407638f9bbb9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
