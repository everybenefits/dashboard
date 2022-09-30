// Types
import type { AuthErrorsType } from '../../../types/Auth'

export const authErrorsEnglish: AuthErrorsType = {
  'system/unexpected-error': 'Unexpected error',
  'auth/email-already-in-use': 'Email already in use',
  'auth/invalid-email': 'Invalid email',
  'auth/wrong-password': 'Invalid password',
  'auth/user-not-found': 'User not found',
  'auth/user-disabled': 'User disabled',
  'auth/missing-data': 'Missing email or password',
  'auth/operation-not-allowed': 'Operation not allowed',
}

export const authErrorsSpanish: AuthErrorsType = {
  'system/unexpected-error': 'Error inesperado',
  'auth/email-already-in-use': 'Email ya en uso',
  'auth/invalid-email': 'Email inválido',
  'auth/wrong-password': 'Contraseña inválida',
  'auth/user-not-found': 'Usuario no encontrado',
  'auth/user-disabled': 'Usuario deshabilitado',
  'auth/missing-data': 'Correo electrónico o contraseña no enviados',
  'auth/operation-not-allowed': 'Operación no permitida',
}
