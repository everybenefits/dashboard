/**
 * @Title Page
 * @Description This page is for route /signin
 * @Author Diesan Romero
 * @Date 08-28-2022
 * @Note This page uses the component AuthForm filed on @components/AuthForm
 */

// Types
import { NextPage } from 'next'

// NextJS
import dynamic from 'next/dynamic'

// AUTH: Components
const AuthFormComponent = dynamic(() => import('@components/AuthForm'), { ssr: false })

const SignInPage: NextPage = () => {
  return (
    <div>
      <AuthFormComponent />
    </div>
  )
}

export default SignInPage