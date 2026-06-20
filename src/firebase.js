import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzQzgtfpfQrf_r-FzHZ_fPHPfAbpMxRoM",
  authDomain: "jewelry-store-770bf.firebaseapp.com",
  projectId: "jewelry-store-770bf",
  storageBucket: "jewelry-store-770bf.firebasestorage.app",
  messagingSenderId: "674672038628",
  appId: "1:674672038628:web:7281c8691bffbebf00d2f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);