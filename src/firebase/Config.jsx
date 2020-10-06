import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAFaMHQdWxpp0gBfGcICwO_NqHf5twiDkk",
  authDomain: "photo-uploader-v.firebaseapp.com",
  databaseURL: "https://photo-uploader-v.firebaseio.com",
  projectId: "photo-uploader-v",
  storageBucket: "photo-uploader-v.appspot.com",
  messagingSenderId: "623626125800",
  appId: "1:623626125800:web:714993309d1af4b220645d",
  measurementId: "G-BJW8MSSYHM",
});

const st = firebaseApp.storage();
const db = firebaseApp.firestore();

export { st, db };
