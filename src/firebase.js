// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2xFlCmKiHDfmU3dWRIlHbXg_0hLfrTGE",
  authDomain: "rajan-portfolio-ac033.firebaseapp.com",
  projectId: "rajan-portfolio-ac033",
  storageBucket: "rajan-portfolio-ac033.appspot.com",
  messagingSenderId: "859459163929",
  appId: "1:859459163929:web:cc099facfed14fc1a91788"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
