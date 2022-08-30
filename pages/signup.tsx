/**
 * @Title Page
 * @Description This page is for route /signup
 * @Author Diesan Romero
 * @Date 08-28-2022
 * @Note This page uses the component AuthForm filed on @components/AuthForm
 */

// Types
import { NextPage } from 'next'

// Locale components
import { AuthFormComponent } from '@components/AuthForm'

const SignUpPage: NextPage = () => {
  return (
    <div>
      <AuthFormComponent />
    </div>
  )
}

export default SignUpPage