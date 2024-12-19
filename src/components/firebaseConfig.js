import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAs0IptPUnf0EMY3m1M9KoEUUhFKUf7N7E",
  authDomain: "ventatortasperso.firebaseapp.com",
  projectId: "ventatortasperso",
  storageBucket: "ventatortasperso.firebasestorage.app",
  messagingSenderId: "250621115340",
  appId: "1:250621115340:web:d09c915dfb175917633b69"
};


const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore( app)