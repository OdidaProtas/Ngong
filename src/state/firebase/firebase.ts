import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

firebase.initializeApp({
  apiKey: "AIzaSyDfA8q7bq9l1M5URIhqBeB11kAsvdqfuxM",
  authDomain: "biz-mkononi.firebaseapp.com",
  projectId: "biz-mkononi",
  storageBucket: "biz-mkononi.appspot.com",
  messagingSenderId: "244083388244",
  appId: "1:244083388244:web:c9008f78ce1eb7d80c62c1",
  measurementId: "G-QBDHHQJW8G",
});

const auth = firebase.auth();
const firestore = firebase.firestore();


export { auth, firestore , firebase};
