import Head from 'next/head'

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Head>
        <title>prototype</title>
        <meta name="description" content="프로토타입을 편하게 만든다" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {children}
    </div>
  )
}

export default Layout
