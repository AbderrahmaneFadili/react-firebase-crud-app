import firebase from "firebase";
import "firebase/firestore";
var firebaseConfig = {
  apiKey: "AIzaSyAJc0yxVdGGHKmHqO08GjyjaZOgsoT2OBM",
  authDomain: "react-firebase-crud-20c64.firebaseapp.com",
  projectId: "react-firebase-crud-20c64",
  storageBucket: "react-firebase-crud-20c64.appspot.com",
  messagingSenderId: "574080576367",
  appId: "1:574080576367:web:c49b2cca21700edb92169a",
  measurementId: "G-XW6JGEJJXJ",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
export default firebase;
