import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Bart Fluitsma | Web developer</title>
        <meta name='description' content='Web development for sustainable businesses. Win over your customers and build a strong brand with a modern website.'/>
        <link rel="icon" href="/icons/favicon-32x32.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )

}
