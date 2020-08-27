import firebase from "firebase";

const config = {
  apiKey: "AIzaSyAxU_hYiO5xDtp_W4L3ovjKzyfxZPwat_Q",
  authDomain: "ig-reels-clone-5ad5f.firebaseapp.com",
  databaseURL: "https://ig-reels-clone-5ad5f.firebaseio.com",
  projectId: "ig-reels-clone-5ad5f",
  storageBucket: "ig-reels-clone-5ad5f.appspot.com",
  messagingSenderId: "417919334850",
  appId: "1:417919334850:web:2413a616bafa23f7fd3e5b",
  measurementId: "G-898ZCCMXXN",
};

firebase.initializeApp(config);

// Get a reference to the database service
var db = firebase.firestore();

export default db;
