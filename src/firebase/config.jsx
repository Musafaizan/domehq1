import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyChurDx11CHyI5cjXm8N1bApCJ7tdP3ktY",
  authDomain: "dome-2a6ca.firebaseapp.com",
  projectId: "dome-2a6ca",
  storageBucket: "dome-2a6ca.firebasestorage.app",
  messagingSenderId: "1038003425986",
  appId: "1:1038003425986:web:63855b5b7e4a2a8721a15b",
  measurementId: "G-YJWYTHQHSL"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;