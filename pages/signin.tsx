import { NextPage } from 'next'

// AUTH: Components
import { AuthFormComponent } from '../components/AuthForm'

const SignInPage: NextPage = () => {
  return (
    <div>
      <AuthFormComponent />
    </div>
  )
}

export default SignInPage