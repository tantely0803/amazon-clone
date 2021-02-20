import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBnL7WoYkpXGemDqEJJ2j_7Eq3ym0WesFY",
  authDomain: "cl-5e98d.firebaseapp.com",
  databaseURL: "https://cl-5e98d.firebaseio.com",
  projectId: "cl-5e98d",
  storageBucket: "cl-5e98d.appspot.com",
  messagingSenderId: "987586206284",
  appId: "1:987586206284:web:f991a5cdc41a8aa7ae32e9",
  measurementId: "G-WQWTKLNP3H"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };