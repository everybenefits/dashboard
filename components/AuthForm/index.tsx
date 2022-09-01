/**
 * @Title AuthForm
 * @Description This component is used add authentication form to the page.
 * @Author Diesan Romero
 * @Date 08-28-2022
 * @Note This component has translation on folder locales.
 */

// Types
import type { NextComponentType } from "next"
import type { AuthProps } from "./types"

// Components
import dynamic from "next/dynamic"
import { Fragment, Suspense } from "react"
import { toast } from "react-toastify"
const Seo = dynamic(() => import("@components/Seo"), { ssr: false })
const Loader = dynamic(() => import("@components/Loader"), { ssr: false })
const Image = dynamic(() => import("next/image"), { ssr: false })
const Link = dynamic(() => import("next/link"), { ssr: false })

// Hooks
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import useUser from "@hooks/useUser"

// Utilities
import { authErrorsEnglish } from "./errors"
import { es, en } from "./locales"
import { createAccount, loginIntoAccount, forgotPassword } from "@firebase/authentication"

<<<<<<< HEAD
// Firebase
import { createAccount, loginIntoAccount, authStateChanged, forgotPassword } from "@firebase/authentication"
import useUser from "@hooks/useUser"
=======
>>>>>>> dev

const AuthFormComponent: NextComponentType = () => {
  // Routing and locales
  const { pathname, locale, replace } = useRouter()
  const t = locale === "es" ? es : en
  
   // State
  const initialState = {
    email: "",
    password: "",
  }

  const [data, setData] = useState(initialState)
  const user = useUser()
<<<<<<< HEAD

  // Effects
  useEffect(() => {
    if (user) {
      replace("/")
    }
  } , [user, replace])


=======

  useEffect(() => {
    user && replace("/")
  }, [user, replace])
>>>>>>> dev

  // Hooks
  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setData({
      ...data,

      [name]: value,
    });
  }

  const errorHandler = (error : any) => {
    if (authErrorsEnglish[error.code]) {
      const e = t.errors[error.code]
      toast.error(e)
    } else {
      toast.error(t.errors['system/unexpected-error'])
    }
  }

  const handleSubmit = async (e : any) => {
    e.preventDefault()
    
    const { email, password } = data

    switch (pathname) {
      case "/signup":
        await signUpHandler({email, password})
        break;
      case "/signin":
        await signInHandler({email, password})
        break;
      case "/forgot-password":
        await forgotPasswordHandler(email)
        break;
      default:
        errorHandler({code: "system/unexpected-error"})
        break;
    }

    setData(initialState)
  }

  // Sign handlers
  const signUpHandler = async ({email, password }: AuthProps) => {
    try {
      await createAccount({
        email, password
      }) 
    
      } catch (error: any) {
        errorHandler(error)
      }
  }

  const signInHandler = async ({email, password }: AuthProps) => {
    try {
      await loginIntoAccount({
        email, password
      })
    
      } catch (error: any) {
        errorHandler(error)
      }
  }

  const forgotPasswordHandler = async (email: string) => {
    try {
      await forgotPassword(email)

      toast.success(t.forgot.email)

      replace('/signin')
    }
    catch (error: any) {
      errorHandler(error)
    }
  }

  let seo = {
    title: "",
    description: "",
  }

  switch (pathname) {
    case "/signup":
      seo.title = t.signup.title
      seo.description = t.forgot.description
      break;
    case "/signin":
      seo.title = t.signin.title
      seo.description = t.signin.description
      break;
    case "/forgot-password":
      seo.title = t.forgot.title
      seo.description = t.forgot.description
      break;
    default:
      break;
  }

  return (
    <Fragment>
      <Suspense fallback={<Loader />}></Suspense>
      <Seo title={seo.title} description={seo.description} url={pathname} />
      <section className="my-5">
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
              {seo.title}
            </h1>
          </section>
              <form method="POST" onSubmit={handleSubmit}>

               {
                ((pathname === "/signup") || (pathname === '/signin')) && (
                  <>
                  <div className="mb-6">
                      <input
                        type="email"
                        onChange={handleChange}
                        value={data.email}
                        name="email"
                        autoComplete="email"
                        required
                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none"
                        placeholder={`${t.form.inputs.email}`} />
                    </div>
                    <div className="mb-6">
                        <input
                          type="password"
                          onChange={handleChange}
                          name="password"
                          value={data.password}
                          required={true}
                          autoComplete="current-password"
                          className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none"
                          placeholder={`${t.form.inputs.password}`} />
                    </div>
                  </>
                )
               }
                  
               {
                pathname === "/forgot-password" && (
                  <section className="flex flex-col">
                    <section className="mb-6">
                      <input
                        type="email"
                        onChange={handleChange}
                        value={data.email}
                        name="email"
                        autoComplete="email"
                        required
                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none"
                        placeholder={`${t.form.inputs.email}`} />
                    </section>

                    <section className="flex flex-row justify-end">
                        <Link href="/">
                            <a
                              className="text-green-600 hover:text-green-700 focus:text-green-700 active:text-green-800 duration-200 transition ease-in-out mb-2"
                            >{t.form.help.goBack}</a
                            >
                          </Link>
                    </section>
                  </section>
                )
               }

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
                    <section className="flex flex-col md:flex-row justify-between items-center mb-6">
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
    </Fragment>
  )
}

export default AuthFormComponent;