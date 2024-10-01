import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB3HPAxZ5Rz_J8ZxN1_K8i9mbmT3Gyel8U",
  authDomain: "nikah-naama.firebaseapp.com",
  projectId: "nikah-naama",
  storageBucket: "nikah-naama.appspot.com",
  messagingSenderId: "914984806606",
  appId: "1:914984806606:web:74740b835991039896089f",
  measurementId: "G-JFRJTGSEQ2",
  databaseURL:
    "https://nikah-naama-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;
