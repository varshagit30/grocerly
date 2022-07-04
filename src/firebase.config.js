import {getApp, getApps, initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAgz3SoVcGYZrLpkof2uLe3I5g6CizRBvY",
    authDomain: "groceryapp-38b40.firebaseapp.com",
    databaseURL: "https://groceryapp-38b40-default-rtdb.firebaseio.com",
    projectId: "groceryapp-38b40",
    storageBucket: "groceryapp-38b40.appspot.com",
    messagingSenderId: "653068405187",
    appId: "1:653068405187:web:55e1266c744a5a3b299576"
  };

const app = getApps.Length > 0 ? getApp() :initializeApp(firebaseConfig);
const firestore =getFirestore(app)
const storage = getStorage(app)

export {app, firestore, storage};