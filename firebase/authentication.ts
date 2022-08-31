// Firebase auth config
import { auth } from "./index";

// Firebase modules
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import type { User } from "firebase/auth";

// Types
import { AuthProps } from "../components/AuthForm/types";

// Hooks

function mapUserFromFirebaseAuthentication (user : User | null) {
  if (!user) {
    return null;
  }
  
  return {
    uid: user.uid,
    email: user.email,
    displayName: user.displayName,
    emailVerified: user.emailVerified,
  }
}
export const authStateChanged = (onChange: any) => {
  return onAuthStateChanged(auth, user => {
    const normalizedUser = mapUserFromFirebaseAuthentication(user!);
    onChange(normalizedUser);
  })
}

export const createAccount = async ({ email, password } : AuthProps) => {
  if (!email || !password) {
    throw new Error('Email and password are required');
  }

  return await createUserWithEmailAndPassword(auth, email, password)
}

export const loginIntoAccount = async ({ email, password } : AuthProps) => {
  if (!email || !password) {
    throw new Error('Email and password are required');
  }

  const { user } = await signInWithEmailAndPassword(auth, email, password)
}