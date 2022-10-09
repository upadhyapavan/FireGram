import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";

// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcbZwKrufq4vMZ7yOSwYj-rgKDNO7dn2o",
  authDomain: "fire-gram-e0c2c.firebaseapp.com",
  projectId: "fire-gram-e0c2c",
  storageBucket: "fire-gram-e0c2c.appspot.com",
  messagingSenderId: "205551404691",
  appId: "1:205551404691:web:c257b56f13e680d9da6f66",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

export const projectStorage = firebase.storage();
export const projectFirestore = firebase.firestore();
export const timestamp = firebase.firestore.FieldValue.serverTimestamp;
