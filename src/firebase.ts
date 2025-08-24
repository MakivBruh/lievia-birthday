// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChuwX964-iQmBFU_apVKHj6jNO7EGMAWg",
  authDomain: "lieviea-birthday.firebaseapp.com",
  databaseURL: "https://lieviea-birthday-default-rtdb.firebaseio.com",
  projectId: "lieviea-birthday",
  storageBucket: "lieviea-birthday.firebasestorage.app",
  messagingSenderId: "541771328565",
  appId: "1:541771328565:web:f7b91b59fedeae1aa3557c",
  measurementId: "G-WJ3EXFQFPM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);