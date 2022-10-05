// Firebase
import { FirebaseApp, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Firebase Authentication
import { Auth, getAuth } from 'firebase/auth'

// Config
import { firebaseConfig } from './config'

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig)

// Authentication
const auth: Auth = getAuth(app)
const firestore = getFirestore(app)

export { auth, firestore }
