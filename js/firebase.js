// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBbJWMldPI1AaQr4AXjAvqBh5vqzO0F68",
  authDomain: "tiendasabado.firebaseapp.com",
  projectId: "tiendasabado",
  storageBucket: "tiendasabado.appspot.com",
  messagingSenderId: "920899559771",
  appId: "1:920899559771:web:f35e8dc8a3ea32b4a93a7e",
  measurementId: "G-25J6NZ910Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);