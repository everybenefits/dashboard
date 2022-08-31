// Firebase auth config
import { auth } from "./index";

// Firebase modules
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail } from 'firebase/auth'
import type { User } from "firebase/auth";

// Types
import { AuthProps } from "../components/AuthForm/types";
import { FirebaseError } from "firebase/app";

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
  const missedFields: FirebaseError = {
    name: 'auth/missing-data',
    message: 'Missing email or password',
    code: 'auth/missing-data',
  }

  if (!email || !password) {
    throw missedFields;
  }

  return await createUserWithEmailAndPassword(auth, email, password)
}

export const loginIntoAccount = async ({ email, password } : AuthProps) => {
  if (!email || !password) {
    throw new Error('Email and password are required');
  }

  await signInWithEmailAndPassword(auth, email, password)
}

export const forgotPassword = async (email: string) => {
  if (!email) {
    throw new Error('Email is required');
  }

  return await sendPasswordResetEmail(auth, email, {
    url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
  });
}