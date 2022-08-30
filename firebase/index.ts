// Firebase
import { initializeApp } from "firebase/app";

// Firebase Authentication
import { getAuth } from "firebase/auth";

// Config
import { firebaseConfig } from "./config";

// Initialize Firebase

let app

if (!app) {
  app = initializeApp(firebaseConfig);
}

export const auth = getAuth(app);