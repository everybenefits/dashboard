import { authErrorsEnglish, authErrorsSpanish } from "../errors"

export const en = {
  signin: {
    title: 'Sign In',
    description: 'Sign in to your account to continue.',
  },
  signup: {
    title: 'Sign Up',
    description: 'Sign up to get started with our app.',
  },
  form: {
    inputs: {
      email: 'Email',
      password: 'Password'
    },
    help: {
      createNewAccount: 'Create new account',
      forgotPassword: 'Forgot password?',
      loginInstead: 'Login instead?',
      goBack: 'Go back',
    }
  },
  forgot: {
    title: 'Forgot Password',
    description: 'Enter your email to reset your password.',
  },
  errors: authErrorsEnglish
}

export const es = {
  signin: {
    title: 'Iniciar Sesión',
    description: 'Inicia sesión con tu cuenta para continuar.',
  },
  signup: {
    title: 'Registrarse',
    description: 'Regístrate para crear una cuenta en Every Benefits.',
  },
  form: {
    inputs: {
      email: 'Correo electrónico',
      password: 'Contraseña'
    },
    help: {
      createNewAccount: 'Crear nueva cuenta',
      forgotPassword: 'Recuperar contraseña',
      loginInstead: 'Iniciar sesión',
      goBack: 'Volver atrás',
    }
  },
  forgot: {
    title: 'Recuperar contraseña',
    description: 'Ingresa tu correo electrónico para recuperar tu contraseña.',
  },
  errors: authErrorsSpanish
}