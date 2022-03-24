import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/functions";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcpSAO17k5A3JI-VnG6ZYJmDz4PJwy3Xw",
  authDomain: "fir-cloudfcnsdti.firebaseapp.com",
  projectId: "fir-cloudfcnsdti",
  storageBucket: "fir-cloudfcnsdti.appspot.com",
  messagingSenderId: "580949454646",
  appId: "1:580949454646:web:0caa8adb5f109aa78f8d97",
  measurementId: "G-JG737QTTVD"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const functions = firebase.functions();

db.settings({ timestampsInSnapshots: true });

export { firebase, db, auth, functions };
