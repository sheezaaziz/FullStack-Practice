import firebase from "firebase/app";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMJkvs668Nfn1djaJpz66viEULRg1xfOk",
  authDomain: "fir-learningdti.firebaseapp.com",
  projectId: "fir-learningdti",
  storageBucket: "fir-learningdti.appspot.com",
  messagingSenderId: "1095094393312",
  appId: "1:1095094393312:web:360390a10b32ca087ff385",
  measurementId: "G-JTGF70BDY0"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export { firebase, db };
