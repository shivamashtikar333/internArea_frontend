// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_2OaL_8ofmsGbY9Q1DzHnekJcj_0-Jsk",
  authDomain: "internshaala-9eb83.firebaseapp.com",
  projectId: "internshaala-9eb83",
  storageBucket: "internshaala-9eb83.appspot.com",
  messagingSenderId: "380795326957",
  appId: "1:380795326957:web:5b32dd75243c86579957e4",
  measurementId: "G-EGSKSQP7CD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const provider=new GoogleAuthProvider();
export {auth,provider}