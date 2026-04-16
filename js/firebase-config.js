import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, doc, setDoc, getDoc, getDocs, addDoc, updateDoc, deleteDoc, onSnapshot, query, orderBy, where, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA07w95cgeuO06DKujPa-_ISrmIVnd6E8Y",
  authDomain: "jsi-hifz-pro.firebaseapp.com",
  projectId: "jsi-hifz-pro",
  storageBucket: "jsi-hifz-pro.firebasestorage.app",
  messagingSenderId: "317578684336",
  appId: "1:317578684336:web:ede42b6feb17903a395875"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Global hooks for the rest of the application
window._db = db;
window._auth = auth;
window._firebase = {
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  query,
  orderBy,
  where,
  serverTimestamp
};
window._firebaseReady = true;
window.dispatchEvent(new Event('firebaseReady'));

export { db, auth };
