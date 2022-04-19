import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBGw0ELWgq9qauK44aLpBMiGL5uyd9l_68",
    authDomain: "eurus-d8b27.firebaseapp.com",
    projectId: "eurus-d8b27",
    storageBucket: "eurus-d8b27.appspot.com",
    messagingSenderId: "118603735560",
    appId: "1:118603735560:web:2428c0256eada10177e7bd",
    measurementId: "G-XR1VCNGSMD"
};
const app= initializeApp(firebaseConfig);
export const db =getFirestore(app);
export const auth=getAuth(app);
export default app;