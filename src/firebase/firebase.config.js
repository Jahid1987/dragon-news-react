// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB24FiReJEKBQ5QB_mkOmgs7wtjhURZWps",
  authDomain: "dragon-news-react-7ce4a.firebaseapp.com",
  projectId: "dragon-news-react-7ce4a",
  storageBucket: "dragon-news-react-7ce4a.appspot.com",
  messagingSenderId: "192378413122",
  appId: "1:192378413122:web:70a75f31a8f076d4de4ddb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
