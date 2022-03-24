import firebase from "firebase/app";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjKreW4fJN2unaMLYb96x9EWyXnyuUhhM",
  authDomain: "fir-storagedti.firebaseapp.com",
  projectId: "fir-storagedti",
  storageBucket: "fir-storagedti.appspot.com",
  messagingSenderId: "278587082171",
  appId: "1:278587082171:web:489791cb707b617e59709e",
  measurementId: "G-H8ZVKL7QZE"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export { firebase, storage }
