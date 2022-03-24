import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/functions";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjGMhEWW-D1LItKWNmbHdkM-FURGl_WPY",
  authDomain: "gamelobbydti.firebaseapp.com",
  projectId: "gamelobbydti",
  storageBucket: "gamelobbydti.appspot.com",
  messagingSenderId: "530612017690",
  appId: "1:530612017690:web:c63c10b577b2aa22294fa3",
  measurementId: "G-68XF7G6W5Q"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const functions = firebase.functions();

db.settings({ timestampsInSnapshots: true });

export { firebase, db, auth, functions };
