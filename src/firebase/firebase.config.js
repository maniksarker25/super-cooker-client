// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqRrW1ONbG_ggjXjlXHssMqRj5ksovIdM",
  authDomain: "chep-recipe.firebaseapp.com",
  projectId: "chep-recipe",
  storageBucket: "chep-recipe.appspot.com",
  messagingSenderId: "490906609457",
  appId: "1:490906609457:web:af31410262d256220b3210"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;