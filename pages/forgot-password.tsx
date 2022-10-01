// Types
import { NextPage } from 'next'

// NextJS
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'

// ReactJS
import { useState } from 'react'

// Firebase
import { forgotPassword } from '@firebase/authentication'

// Errors
import { authErrorsEnglish as en, authErrorsSpanish as es } from 'errors/Auth'

// AUTH: Components
const ForgotForm = dynamic(() => import('@components/ForgotForm'), {
  ssr: false,
})

const SignInPage: NextPage = () => {
  const { push, locale } = useRouter()
  const t = locale === 'es' ? es : en
  const defaultState = {
    email: '',
  }

  const [data, setData] = useState(defaultState)

  const onChange = (e: any): any => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    })
  }

  const onSubmit = async (e: any) => {
    e.preventDefault()
    try {
      await forgotPassword(data.email)

      setData(defaultState)

      toast.success(t['system/email-sent'])
      push('/signin')

      push('/')
    } catch (error: any) {
      toast.error(t[error.code])
      setData(defaultState)
    }
  }

  return <ForgotForm onChange={onChange} onSubmit={onSubmit} value={data} />
}

export default SignInPage
