import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeVsZE4ocZ2AC_ab0xzY5kIDr8-BDyDg4",
  authDomain: "gamelobbydtiv2.firebaseapp.com",
  projectId: "gamelobbydtiv2",
  storageBucket: "gamelobbydtiv2.appspot.com",
  messagingSenderId: "825032596783",
  appId: "1:825032596783:web:ccfa7c7bac35565abcd5da",
  measurementId: "G-7TK2871GNP"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

db.settings({ timestampsInSnapshots: true });

export { firebase, db, auth }
