import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCkHXESqMkPBFuuZjknJGYcvyNfnW9MUoY',
  authDomain: 'awsm-db.firebaseapp.com',
  databaseURL: 'https://awsm-db.firebaseio.com',
  projectId: 'awsm-db',
  storageBucket: 'awsm-db.appspot.com',
  messagingSenderId: '552558341061',
  appId: '1:552558341061:web:ba5bf1a3a1b134e62a79ac',
  measurementId: 'G-71RWKQCYS3',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;