// Types
import { NextPage } from 'next'

// NextJS
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

// ReactJS
import { useState } from 'react'

// Firebase
import { loginIntoAccount } from '@firebase/authentication'

// AUTH: Components
const SignInForm = dynamic(() => import('@components/SignInForm'), {
  ssr: false
})

const SignInPage: NextPage = () => {
  const { push } = useRouter()
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const onChange = (e: any): any => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = async (e: any) => {
    e.preventDefault()
    try {
      await loginIntoAccount({
        email: form.email,
        password: form.password
      })

      push('/')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <SignInForm onChange={onChange} onSubmit={onSubmit} />
  )
}

export default SignInPage
