// ReactJS
import { Fragment } from 'react'

// NextJS
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

// Locales
import { en, es } from './locales'

// Components
const Seo = dynamic(async () => await import('@components/Seo'), { ssr: false })
const Image = dynamic(async () => await import('next/image'), { ssr: false })
const Link = dynamic(async () => await import('next/link'), { ssr: false })

function SignInForm({ onChange, onSubmit }: any): JSX.Element {
  // Router
  const { pathname, locale } = useRouter()

  // Locales
  const t = locale === 'es' ? es : en

  return (
    <Fragment>
      <Seo title={t.seo.title} description={t.seo.description} url={pathname} />

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
                  {t.seo.title}
                </h1>
              </section>

              <form method="POST" onSubmit={onSubmit}>
                <div className="mb-6">
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder={t.form.input.email}
                    onChange={onChange}
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-900 focus:outline-none"
                    required
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="password"
                    name="password"
                    autoComplete="current-password"
                    onChange={onChange}
                    placeholder={t.form.input.password}
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-900 focus:outline-none"
                    required
                  />
                </div>

                <section className="flex flex-col md:flex-row justify-between items-center mb-6">
                  <Link href="/signup">
                    <a className="text-green-600 hover:text-green-700 focus:text-green-700 active:text-green-800 duration-200 transition ease-in-out">
                      {t.links.signUp}
                    </a>
                  </Link>

                  <Link href="/forgot-password">
                    <a className="text-green-600 hover:text-green-700 focus:text-green-700 active:text-green-800 duration-200 transition ease-in-out">
                      {t.links.forgotPassword}
                    </a>
                  </Link>
                </section>

                <button
                  type="submit"
                  className="inline-block px-7 py-3 bg-green-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  {t.seo.title}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default SignInForm
