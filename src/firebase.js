import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD_aw25LAkuMILPXjCx0iFJFHqP50yKyUo",
  authDomain: "test-db-4bdb1.firebaseapp.com",
  databaseURL: "https://test-db-4bdb1.firebaseio.com",
  projectId: "test-db-4bdb1",
  storageBucket: "test-db-4bdb1.appspot.com",
  messagingSenderId: "558542931531",
  appId: "1:558542931531:web:1dcb0148af2efb86c72fce",
  measurementId: "G-K7972RKD02",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ propmt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
