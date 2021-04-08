import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBpaQvaV97iRmpxR_otBa39jOuR_rTKCek",
  authDomain: "crwn-db-85a6f.firebaseapp.com",
  projectId: "crwn-db-85a6f",
  storageBucket: "crwn-db-85a6f.appspot.com",
  messagingSenderId: "690836783284",
  appId: "1:690836783284:web:b01d66d75503fa0d3917e1"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;