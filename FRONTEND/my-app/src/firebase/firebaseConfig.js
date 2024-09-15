// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {getAuth} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBn-fs4kHmY1fW_-JlBQw0VHsKAIh5U_KQ",
  authDomain: "carrot-ee80a.firebaseapp.com",
  projectId: "carrot-ee80a",
  storageBucket: "carrot-ee80a.appspot.com",
  messagingSenderId: "612227378212",
  appId: "1:612227378212:web:d7263ae6bbe0363db23cb1",
  measurementId: "G-S5LWHT21SV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export default app;
