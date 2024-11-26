import { Html, Head, Main, NextScript } from 'next/document'

function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <div id="root-portal" />
      </body>
    </Html>
  )
}

export default Document
