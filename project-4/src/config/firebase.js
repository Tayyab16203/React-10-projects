// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzK4qKdr6oU_L5ZlGEm1Ghxv41OFVCRIg",
  authDomain: "vite-contact-f8331.firebaseapp.com",
  projectId: "vite-contact-f8331",
  storageBucket: "vite-contact-f8331.appspot.com",
  messagingSenderId: "403526827990",
  appId: "1:403526827990:web:37f4f44fb693de43aa2e77"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);