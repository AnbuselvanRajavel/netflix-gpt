// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCctRULaVMDdtl8eI5DATSMXqMdf0hDEyE",
  authDomain: "netflixgpt-96cd7.firebaseapp.com",
  projectId: "netflixgpt-96cd7",
  storageBucket: "netflixgpt-96cd7.appspot.com",
  messagingSenderId: "369697748835",
  appId: "1:369697748835:web:3b5895541673ab88140556",
  measurementId: "G-KR16PVSVNB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
