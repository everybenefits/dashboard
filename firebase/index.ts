// Firebase
import { FirebaseApp, initializeApp } from "firebase/app";

// Firebase Authentication
import { Auth, getAuth } from "firebase/auth";

// Config
import { firebaseConfig } from "./config";

// Initialize Firebase
let app: FirebaseApp = initializeApp(firebaseConfig);

// Authentication
let auth: Auth = getAuth(app);

export { auth };
