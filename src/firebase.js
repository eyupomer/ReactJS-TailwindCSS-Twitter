// Import the functions you need from the SDKs you need
import "firebase/database";
import firebase from "firebase";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPf5-JbKRM62GQ3TohlMeg7nJb6Oi0hoU",
  authDomain: "twitter-clone-ce3c4.firebaseapp.com",
  projectId: "twitter-clone-ce3c4",
  storageBucket: "twitter-clone-ce3c4.appspot.com",
  messagingSenderId: "374735810591",
  appId: "1:374735810591:web:9842226b9703675a08252a",
  measurementId: "G-Y1S87FV8PM"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();

export default db;