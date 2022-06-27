import firebase from "/firebase";
import "firebase/storage"
import { getStorage } from "firebase/storage";
import { initializeApp } from 'firebase/app';

import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyDMzTF-91xxE1js-11FYsd8TT-cssGljuk",
    authDomain: "facebook-clone-aea32.firebaseapp.com",
    projectId: "facebook-clone-aea32",
    storageBucket: "facebook-clone-aea32.appspot.com",
    messagingSenderId: "745475378247",
    appId: "1:745475378247:web:780f46e41966e88fa17562"
  };

  const app = initializeApp(firebaseConfig);
// connect to firestore
  const db = getFirestore(app);

  const storage = getStorage(app);

  export { db, storage};