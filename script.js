const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDH0_VzBpDOFvr3BRxllcN6YewMDsCV4Oo",
  authDomain: "intelliquest-6eb88.firebaseapp.com",
  projectId: "intelliquest-6eb88",
  storageBucket: "intelliquest-6eb88.appspot.com",
  messagingSenderId: "962737839018",
  appId: "1:962737839018:web:c76f6f81675c29513ea9d3",
  measurementId: "G-V5XH3VQ4T3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);