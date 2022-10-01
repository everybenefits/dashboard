// Types
import { NextPage } from 'next'

// NextJS
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'

// ReactJS
import { useState } from 'react'

// Firebase
import { createAccount } from '@firebase/authentication'

// Errors
import { authErrorsEnglish as en, authErrorsSpanish as es } from 'errors/Auth'

// AUTH: Components
const SignUpForm = dynamic(() => import('@components/SignUpForm'), {
  ssr: false
})

const SignUpPage: NextPage = () => {
  const { push, locale } = useRouter()
  const t = locale === 'es' ? es : en
  const defaultState = {
    email: '',
    password: ''
  }

  const [data, setdata] = useState(defaultState)

  const onChange = (e: any) => {
    setdata({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = async (e: any) => {
    e.preventDefault()
    try {
      await createAccount({
        email: data.email,
        password: data.password
      })

      setdata(defaultState)

      push('/')
    } catch (error: any) {
      toast.error(t[error.code])
      setdata(defaultState)
    }
  }

  return (
    <SignUpForm onChange={onChange} onSubmit={onSubmit} value={data} />
  )
}

export default SignUpPage
