import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB-1MIYq451lXZAF5ydtyWemITZ0pr4v-A",
  authDomain: "team-bf1ea.firebaseapp.com",
  projectId: "team-bf1ea",
  storageBucket: "team-bf1ea.firebasestorage.app",
  messagingSenderId: "84168862389",
  appId: "1:84168862389:web:305a9d399a1cde1c622cfc",
  measurementId: "G-3DETMXZYHK"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
