/**
 * @Title Page
 * @Description This page is for route /signin
 * @Author Diesan Romero
 * @Date 08-28-2022
 * @Note This page uses the component AuthForm filed on @components/AuthForm
 */

// Types
import { NextPage } from 'next'

// AUTH: Components
import { AuthFormComponent } from '@components/AuthForm'

const ForgotPasswordPage: NextPage = () => {
  return (
    <div>
      <AuthFormComponent />
    </div>
  )
}

export default ForgotPasswordPage