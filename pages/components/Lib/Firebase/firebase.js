// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAapPbAq5JuXrT4yeIekzvVdf5RfgB8-V0",
  authDomain: "ecommerce-nextjs-1d6e6.firebaseapp.com",
  projectId: "ecommerce-nextjs-1d6e6",
  storageBucket: "ecommerce-nextjs-1d6e6.appspot.com",
  messagingSenderId: "422872289707",
  appId: "1:422872289707:web:ce4f7011134291fcbcc2ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();