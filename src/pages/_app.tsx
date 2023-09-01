import '../index.css'
import '../components/App/App.css'
import '../components/Settings/Settings.css'
import '../components/Pointer/Pointer.css'
import Head from 'next/head'

export default function MyApp({ Component, pageProps}) {
  return (
    <>
      <Head>
        <title>Tree Frog</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      
      <Component {...pageProps} />
    </>
  )
}
