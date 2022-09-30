// Firebase interface
import { User } from 'firebase/auth'

export interface AuthProps {
  email: string
  password: string
}

export interface AuthErrorsType {
  [key: string]: string
}

export type AuthUserMapped = User | null
