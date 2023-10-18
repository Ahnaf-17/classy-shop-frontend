// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqLgWnYZtxqn7-ui9ixsv9NEWYoD5Az5Y",
  authDomain: "classy-shop.firebaseapp.com",
  projectId: "classy-shop",
  storageBucket: "classy-shop.appspot.com",
  messagingSenderId: "896707906728",
  appId: "1:896707906728:web:79a9ca6eba33cb76d6869d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;