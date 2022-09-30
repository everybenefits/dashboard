// Types
import { NextPage } from 'next'

// NextJS
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

// ReactJS
import { useState } from 'react'

// Firebase
import { createAccount } from '@firebase/authentication'

// AUTH: Components
const SignUpForm = dynamic(() => import('@components/SignUpForm'), {
  ssr: false
})

const SignUpPage: NextPage = () => {
  const { push } = useRouter()
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const onChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = async (e: any) => {
    e.preventDefault()
    try {
      await createAccount({
        email: form.email,
        password: form.password
      })

      push('/')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <SignUpForm onChange={onChange} onSubmit={onSubmit} />
  )
}

export default SignUpPage
