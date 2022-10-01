// Types
import { NextPage } from 'next'

// NextJS
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'

// ReactJS
import { useState } from 'react'

// Firebase
import { loginIntoAccount } from '@firebase/authentication'

// Errors
import { authErrorsEnglish as en, authErrorsSpanish as es } from 'errors/Auth'

// AUTH: Components
const SignInForm = dynamic(() => import('@components/SignInForm'), {
  ssr: false
})

const SignInPage: NextPage = () => {
  const { push, locale } = useRouter()
  const t = locale === 'es' ? es : en
  const defaultState = {
    email: '',
    password: ''
  }

  const [data, setData] = useState(defaultState)

  const onChange = (e: any): any => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = async (e: any) => {
    e.preventDefault()
    try {
      await loginIntoAccount({
        email: data.email,
        password: data.password
      })

      setData(defaultState)

      push('/')
    } catch (error: any) {
      toast.error(t[error.code])
      setData(defaultState)
    }
  }

  return (
    <SignInForm onChange={onChange} onSubmit={onSubmit} value={data} />
  )
}

export default SignInPage
