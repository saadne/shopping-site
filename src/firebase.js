import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCyPFn0ze5EtsmLt47JR4p6Cf2gVdDTueE",
    authDomain: "shop-db-26f16.firebaseapp.com",
    databaseURL: "https://shop-db-26f16.firebaseio.com",
    projectId: "shop-db-26f16",
    storageBucket: "shop-db-26f16.appspot.com",
    messagingSenderId: "374887175184",
    appId: "1:374887175184:web:a76fd6f9dec8a1d5aea695",
    measurementId: "G-L1XBXW4BL7"
  };

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({propmt:'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;