// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDyrsW07Uwvo4O1ISZUriHUmYreazmmfxk",
  authDomain: "talentpool-64c64.firebaseapp.com",
  projectId: "talentpool-64c64",
  storageBucket: "talentpool-64c64.firebasestorage.app",
  messagingSenderId: "189779638128",
  appId: "1:189779638128:web:0bba8832947096097f01b5",
  measurementId: "G-YN248PY4ZM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)