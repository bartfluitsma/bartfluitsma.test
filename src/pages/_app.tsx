import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Bart Fluitsma | Web developer</title>
        <meta name='description' content='Web development for sustainable businesses. Win over your customers and build a strong brand with a modern website.'/>
        <link rel="icon" href="/icons/favicon-32x32.png" />
        {/* G-MP1BZY54FV */}
      </Head>
                {/* <!-- Google tag (gtag.js) --> */}
                <Script
            strategy="afterInteractive"
            src="https://www.googletagmanager.com/gtag/js?id=G-MP1BZY54FV" />
          <Script
            id="google-analytics"
            strategy="afterInteractive"
          >
            {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-MP1BZY54FV');`}
          </Script>
      <Component {...pageProps} />
    </>
  )

}
