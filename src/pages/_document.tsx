import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <><Html lang="en">
      <Head />
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
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
    </>
  )
}
