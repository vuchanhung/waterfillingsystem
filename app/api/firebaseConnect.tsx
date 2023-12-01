// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUBHYNWHn-0ljpy2d8pu4LAabgNosw7fM",
  authDomain: "filling-system-5f5e7.firebaseapp.com",
  projectId: "filling-system-5f5e7",
  storageBucket: "filling-system-5f5e7.appspot.com",
  messagingSenderId: "846342191870",
  appId: "1:846342191870:web:106c048c2ff2a7ba2583af",
  measurementId: "G-BMWC4C27D0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore(app)

export {db}
