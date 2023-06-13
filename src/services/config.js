import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    apiKey: process.env.REACT_APP_CODE_FIREBASE,
    authDomain: "claudiog43200.firebaseapp.com",
    projectId: "claudiog43200",
    storageBucket: "claudiog43200.appspot.com",
    messagingSenderId: "852369411408",
    appId: "1:852369411408:web:208a4e9e3f501d11d2f055"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);