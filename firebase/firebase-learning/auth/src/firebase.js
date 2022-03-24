import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/functions";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2KEHqXi-aq1I7Xyhl_jLHlq7bybmfVwU",
  authDomain: "fir-authdti.firebaseapp.com",
  projectId: "fir-authdti",
  storageBucket: "fir-authdti.appspot.com",
  messagingSenderId: "292360466529",
  appId: "1:292360466529:web:3f300fedc45c2b37af3a20",
  measurementId: "G-X6DYYR4XFL"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const functions = firebase.functions();

db.settings({ timestampsInSnapshots: true });

export { firebase, db, auth, functions };
