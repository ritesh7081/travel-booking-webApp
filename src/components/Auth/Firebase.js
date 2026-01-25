
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAkqE_JCikmCW_Td052lINwcpVLYTZj51o",
  authDomain: "trevel-website.firebaseapp.com",
  projectId: "trevel-website",
  storageBucket: "trevel-website.firebasestorage.app",
  messagingSenderId: "682100386297",
  appId: "1:682100386297:web:d1f389a03cc2144c3c7528",
  databaseURL:"https://trevel-website-default-rtdb.firebaseio.com"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const database = getDatabase(app);