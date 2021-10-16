import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBQac-BunU0dclhMziHYjIzI6m9E3TasV0",
  authDomain: "instagram-2-a791e.firebaseapp.com",
  projectId: "instagram-2-a791e",
  storageBucket: "instagram-2-a791e.appspot.com",
  messagingSenderId: "584377887037",
  appId: "1:584377887037:web:4b21f333a0be401364bd54",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
