// Firebase interface
import { User } from "firebase/auth"

export type AuthProps = {
  email: string
  password: string
}

export type AuthErrorsType = {
  [key: string]: string;
}

export type AuthUserMapped = User | null