/**
 * @Title AuthForm
 * @Description This component is used add authentication form to the page.
 * @Author Diesan Romero
 * @Date 08-28-2022
 * @Note This component has translation on file locales.ts.
 */

// Types
import type { NextComponentType } from "next"
import type { AuthProps } from "./types"

// NextJS Components
import dynamic from "next/dynamic"

// React hooks
import { useState } from "react"

// NextJS Components
const Image = dynamic(() => import("next/image"), { ssr: false })
const Link = dynamic(() => import("next/link"), { ssr: false })
import { useRouter } from "next/router"

// Third party components
import { toast } from "react-toastify"

// Local Components
import { Seo } from "@components/Seo"
import { authErrorsEnglish } from "./errors"

// Locales
import { es, en } from "./locales"
import { createAccount, loginIntoAccount } from "@firebase/authentication"

export const AuthFormComponent: NextComponentType = () => {
  // Routing and locales
  const { pathname, locale } = useRouter()
  const t = locale === "es" ? es : en
  
   // State
  const initialState = {
    email: "",
    password: "",
  }

  const [user, setUser] = useState(initialState)

  // Hooks
  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUser({
      ...user,

      [name]: value,
    });
  }

  const handleSubmit = async (e : React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const { email, password } = user

    if (pathname === "/signup") { 
      await signUpHandler({email, password})
    } else if (pathname === "/signin") {
      await signInHandler({email, password})
    }
    else {
      toast.error(t.errors['system/unexpected-error'])
    }

  setUser(initialState)
  }

  // Sign handlers

  const signUpHandler = async ({email, password }: AuthProps) => {
    try {
      const data = await createAccount({
        email, password
      }) 
    
      } catch (error: any) {
      if (authErrorsEnglish[error.code]) {
        const e = t.errors[error.code]
        toast.error(e)
      } else {
        toast.error(t.errors['system/unexpected-error'])
      }
      }
  }

  const signInHandler = async ({email, password }: AuthProps) => {
    try {
      await loginIntoAccount({
        email, password
      })
    
      } catch (error: any) {
      if (authErrorsEnglish[error.code]) {
        const e = t.errors[error.code]
        toast.error(e)
      } else {
        toast.error(t.errors['system/unexpected-error'])
      }
      }
  }

  const seo = {
    title: pathname === "/signup" ? t.signup.title : t.signin.title,
    description: pathname === "/signup" ? t.signup.description : t.signin.description,
  }

  return (
    <>
      <Seo title={seo.title} description={seo.description} url={pathname} />
      <section className="h-screen my-5">
        <div className="container px-6 py-12 h-full">
          
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
              <Image
                src="/images/draw-signin-signup.svg"
                className="w-full"
                alt="Phone image"
                width={500}
                height={500}
              />
            </div>
            <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
            <section>
            <h1 className="text-3xl font-bold text-center text-green-800 mb-10">
              {pathname === "/signup" ? t.signup.title : t.signin.title}
            </h1>
          </section>
              <form method="POST">

                <div className="mb-6">
                  <input
                    type="text"
                    onChange={handleChange}
                    value={user.email}
                    name="email"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none"
                    placeholder={`${t.form.inputs.email}`}
                  />
                </div>

                <div className="mb-6">
                  <input
                    type="password"
                    onChange={handleChange}
                    name="password"
                    value={user.password}
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none"
                    placeholder={`${t.form.inputs.password}`}
                  />
                </div>

                {
                  pathname === "/signup" && (
                    <section className="flex justify-end items-center mb-6">
                      <Link href="/signin">
                        <a

                          className="text-green-600 hover:text-green-700 focus:text-green-700 active:text-green-800 duration-200 transition ease-in-out"
                        >{t.form.help.loginInstead}</a>
                      </Link>
                    </section>
                  )
                }

                {
                  pathname === "/signin" && (
                    <section className="flex justify-between items-center mb-6">
                      <Link href="/signup">
                        <a
                          className="text-green-600 hover:text-green-700 focus:text-green-700 active:text-green-800 duration-200 transition ease-in-out"
                        >{t.form.help.createNewAccount}</a
                        >
                      </Link>

                      <Link href="/forgot-password">
                        <a

                          className="text-green-600 hover:text-green-700 focus:text-green-700 active:text-green-800 duration-200 transition ease-in-out"
                        >{t.form.help.forgotPassword}</a>
                      </Link>
                    </section>
                  )
                }

                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="inline-block px-7 py-3 bg-green-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  {pathname === "/signup" ? t.signup.title : t.signin.title}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}