import firebase from "firebase/compat/app";
import "firebase/compat/storage"
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDMzTF-91xxE1js-11FYsd8TT-cssGljuk",
    authDomain: "facebook-clone-aea32.firebaseapp.com",
    projectId: "facebook-clone-aea32",
    storageBucket: "facebook-clone-aea32.appspot.com",
    messagingSenderId: "745475378247",
    appId: "1:745475378247:web:780f46e41966e88fa17562"
  };


  const app = !firebase.apps.length 
            ? firebase.initializeApp(firebaseConfig) 
            : firebase.app();
// connect to firestore
  const db = app.firestore();
  const storage = firebase.storage();

  export { db, storage};