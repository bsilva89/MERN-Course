import '../styles/globals.css'
import MainNavigation from '../shared/components/Navigation/MainNavigation'
import Head from 'next/head'
import { AuthContext } from '../context/auth-context'

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainNavigation/>
        <main>
          <Component {...pageProps}/>
        </main>
      
    </React.Fragment>
  )
}

export default MyApp
