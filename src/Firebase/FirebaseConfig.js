// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaZzhlRIqf2Voeb5tudK-EP8f9UjMvar8",
  authDomain: "real-state-ceb39.firebaseapp.com",
  projectId: "real-state-ceb39",
  storageBucket: "real-state-ceb39.appspot.com",
  messagingSenderId: "1087013757057",
  appId: "1:1087013757057:web:f4e94e1c6f492d598f6d80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth= getAuth(app)
export default auth;