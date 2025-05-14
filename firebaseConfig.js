// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtw6eZ9O2-BNxWkwRXwO1Oadq6YUIeDm8",
  authDomain: "project2-4bd53.firebaseapp.com",
  projectId: "project2-4bd53",
  storageBucket: "project2-4bd53.appspot.com",
  messagingSenderId: "778472120966",
  appId: "1:778472120966:web:0ffb0c63fb7b807107a707",
  measurementId: "G-8NZ72NF0C0"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app); //aap madhe je pan ahe te database madhe store hoil

const analytics = getAnalytics(app);