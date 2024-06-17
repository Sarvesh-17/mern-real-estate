// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-e91a9.firebaseapp.com",
  projectId: "mern-estate-e91a9",
  storageBucket: "mern-estate-e91a9.appspot.com",
  messagingSenderId: "285773865030",
  appId: "1:285773865030:web:7c0150c98f533863fd6a47"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);