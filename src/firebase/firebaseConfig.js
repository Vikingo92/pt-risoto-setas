import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA_30kF-zu5FNW2bqxp2-67FbBnIawg5uc",
    authDomain: "prueba-tecnica-risoto-de-setas.firebaseapp.com",
    projectId: "prueba-tecnica-risoto-de-setas",
    storageBucket: "prueba-tecnica-risoto-de-setas.appspot.com",
    messagingSenderId: "405748304820",
    appId: "1:405748304820:web:e268ef3aca058b894440e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider()
const db = getFirestore();

export {
    app,
    google,
    facebook,
    db
}
