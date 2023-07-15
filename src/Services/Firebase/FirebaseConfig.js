import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyALuh1zO0XUlI54oF4r1pS71Yb5v-a1gzo",
    authDomain: "pfreactjs-kaufmann.firebaseapp.com",
    projectId: "pfreactjs-kaufmann",
    storageBucket: "pfreactjs-kaufmann.appspot.com",
    messagingSenderId: "562953525659",
    appId: "1:562953525659:web:81896df04e9ecedbf5293e",
    measurementId: "G-WV822J1CGR"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)