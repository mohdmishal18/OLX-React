import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyBSSXrW4SNQy3jrZcHstFG-k2J3NQxSjXw",
    authDomain: "fir-cabb8.firebaseapp.com",
    projectId: "fir-cabb8",
    storageBucket: "fir-cabb8.appspot.com",
    messagingSenderId: "33512060397",
    appId: "1:33512060397:web:7fdf10891b02d44e8c63e4",
    measurementId: "G-JNHT9THPJK"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)


