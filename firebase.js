// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5RadS8todtkT9X70cRUtHtbCeB8T7-24",
  authDomain: "campus-innovations.firebaseapp.com",
  databaseURL: "https://campus-innovations-default-rtdb.firebaseio.com",
  projectId: "campus-innovations",
  storageBucket: "campus-innovations.appspot.com",
  messagingSenderId: "569328133044",
  appId: "1:569328133044:web:420615bff0d6f94a98c8e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);