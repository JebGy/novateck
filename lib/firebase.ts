// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4D0hx7RJSgwIG4kCAcdzLn2DKrAFg3HE",
  authDomain: "novateck-2044e.firebaseapp.com",
  projectId: "novateck-2044e",
  storageBucket: "novateck-2044e.firebasestorage.app",
  messagingSenderId: "895844357858",
  appId: "1:895844357858:web:3e213d6b7baeb99cdf30bb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
