// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvImDz_IyrcYDi_LSV-zEHMY2h9jUYjXc",
  authDomain: "warehouse-efcbf.firebaseapp.com",
  projectId: "warehouse-efcbf",
  storageBucket: "warehouse-efcbf.appspot.com",
  messagingSenderId: "1069377268497",
  appId: "1:1069377268497:web:6a244e283be1755c59fab0",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const fb = initializeApp(firebaseConfig);
const db = getFirestore(fb);

export { db };
