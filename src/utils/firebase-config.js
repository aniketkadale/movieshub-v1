// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuFcs4y25h4b_C_1dQw0j8drHfsLHsRt4",
  authDomain: "movieshub---a-netflix-clone.firebaseapp.com",
  projectId: "movieshub---a-netflix-clone",
  storageBucket: "movieshub---a-netflix-clone.appspot.com",
  messagingSenderId: "129412878158",
  appId: "1:129412878158:web:7460c424d3e17263d6181f",
  measurementId: "G-138KZQGXVD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
