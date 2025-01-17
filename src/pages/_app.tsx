import { AppProps } from 'next/app'

function App({
  Component,
  pageProps: { dehydratedState, ...pageProps },
}: AppProps) {
  return <Component {...pageProps} />
}

export default App
