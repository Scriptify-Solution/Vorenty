
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDGwWG0pjBRcTmjl_5iNw9Cet44DJ8Vlwg",
  authDomain: "wisume-cc041.firebaseapp.com",
  projectId: "wisume-cc041",
  storageBucket: "wisume-cc041.firebasestorage.app",
  messagingSenderId: "726443164047",
  appId: "1:726443164047:web:ac09ef0fb3f481de7ccbfa",
  measurementId: "G-GLS3ZT3F2V"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
