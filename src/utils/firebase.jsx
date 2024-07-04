// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBfHf-CQbFUCCAjaxj4orMdE1QX-1iQO4",
  authDomain: "netflixgpt-1a7af.firebaseapp.com",
  projectId: "netflixgpt-1a7af",
  storageBucket: "netflixgpt-1a7af.appspot.com",
  messagingSenderId: "187917372321",
  appId: "1:187917372321:web:437b0308947d84f24919e0",
  measurementId: "G-K1QBCE0QLG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);