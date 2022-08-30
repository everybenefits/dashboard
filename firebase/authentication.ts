// Firebase auth config
import { auth } from "./index";

// Firebase modules
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

// Types
import { AuthProps } from "../components/AuthForm/types";

// Hooks
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

  return await signInWithEmailAndPassword(auth, email, password)
}