import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCD1VNZUe9Pq-8XuLO5nN5zySI3GMzFwfA",
  authDomain: "react-coder-b18cc.firebaseapp.com",
  projectId: "react-coder-b18cc",
  storageBucket: "react-coder-b18cc.firebasestorage.app",
  messagingSenderId: "836261325746",
  appId: "1:836261325746:web:9ae40909dc29f84ab612ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app);