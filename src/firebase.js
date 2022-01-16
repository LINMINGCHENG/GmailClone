import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC5tZK82jvxlqN7Zss_quqFACG7OC98Pks",
  authDomain: "gamil-c.firebaseapp.com",
  projectId: "gamil-c",
  storageBucket: "gamil-c.appspot.com",
  messagingSenderId: "156577647307",
  appId: "1:156577647307:web:f28fa00ae679fca844a94e",
  measurementId: "G-VS863ZVBFP"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();

export {db,auth,provider};