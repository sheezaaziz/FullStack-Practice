import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
import "firebase/functions";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjC6jmyLRN64m6gD2H-jd5pr-PI_YAyRE",
  authDomain: "gamelobbydtiv3.firebaseapp.com",
  projectId: "gamelobbydtiv3",
  storageBucket: "gamelobbydtiv3.appspot.com",
  messagingSenderId: "863242661374",
  appId: "1:863242661374:web:3d02d5dd3aa99a1bc564af",
  measurementId: "G-Z9FP2CJ2ZN"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const functions = firebase.functions();

db.settings({ timestampsInSnapshots: true });

export { firebase, db, auth, storage, functions }
