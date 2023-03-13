// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKbyYavT403lFz-7Pjr-HvwLcN4W1S_sA",
  authDomain: "finsweet-f70a8.firebaseapp.com",
  projectId: "finsweet-f70a8",
  storageBucket: "finsweet-f70a8.appspot.com",
  messagingSenderId: "62756578451",
  appId: "1:62756578451:web:290dbb335b30d01954d966"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;