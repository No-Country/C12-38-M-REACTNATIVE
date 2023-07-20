import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDuLtel7XPR3mveQpY9AA2-2leEmDYarfU",
    authDomain: "lot-to-do.firebaseapp.com",
    projectId: "lot-to-do",
    storageBucket: "lot-to-do.appspot.com",
    messagingSenderId: "262678566400",
    appId: "1:262678566400:web:c7291bc9671b547607eae5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };