// Types
import type { AppProps } from 'next/app'

// Components
import { ToastContainer } from 'react-toastify'

// Styles
import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'

function MyApp ({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <ToastContainer />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
