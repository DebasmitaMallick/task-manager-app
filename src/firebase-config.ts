import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Ensure environment variables are properly typed
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY as string,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN as string,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID as string,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET as string,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID as string,
  appId: import.meta.env.VITE_FIREBASE_APP_ID as string,
  // measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID as string,
};

// Initialize Firebase app
const app = firebase.initializeApp(firebaseConfig);

// Set up authentication and Google sign-in provider
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    return await signInWithPopup(auth, provider);
  } catch (error) {
    console.error("Google Sign-In Error:", error);
    throw error;
  }
};

// Firestore and Storage instances
export const db = getFirestore(app);
export const storage = getStorage(app);
