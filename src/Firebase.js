// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbFy6e9YF19HAstRBaxHLcuCWcIO5RjVg",
  authDomain: "netflix-clone-f3ed8.firebaseapp.com",
  projectId: "netflix-clone-f3ed8",
  storageBucket: "netflix-clone-f3ed8.appspot.com",
  messagingSenderId: "462046619215",
  appId: "1:462046619215:web:656fb66c17221682a22c3a",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
