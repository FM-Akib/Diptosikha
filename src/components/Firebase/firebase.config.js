// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-F3iQ-H91SwU4_H32SA6AXX7qdviskTQ",
  authDomain: "diptoshikha-d040d.firebaseapp.com",
  projectId: "diptoshikha-d040d",
  storageBucket: "diptoshikha-d040d.appspot.com",
  messagingSenderId: "169693257565",
  appId: "1:169693257565:web:21cdf2404ef079bd30d2b4",
  measurementId: "G-192ZK61PVJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;