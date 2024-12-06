import type { AppProps } from 'next/app'
import { Global } from '@emotion/react'
import { QueryClientProvider, QueryClient, Hydrate } from 'react-query'
import Layout from '@shared/Layout'

import globalStyles from '@styles/globalStyles'
import { AlertContextProvider } from '@/contexts/AlertContext'
import { RecoilRoot } from 'recoil'
import ApiInit from '@/components/init/ApiInit'
import UserInit from '@/components/init/UserInit'
import D2ErrorBoundary from '@/components/shared/ErrorBoundary'

const client = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: false,
    },
  },
})

export default function App({
  Component,
  pageProps: { dehydratedState, session, ...pageProps },
}: AppProps) {
  return (
    <Layout>
      <Global styles={globalStyles} />
      <RecoilRoot>
        <QueryClientProvider client={client}>
          <Hydrate state={dehydratedState}>
            <AlertContextProvider>
              <D2ErrorBoundary>
                <ApiInit>
                  <UserInit>
                    <Component {...pageProps} />
                  </UserInit>
                </ApiInit>
              </D2ErrorBoundary>
            </AlertContextProvider>
          </Hydrate>
        </QueryClientProvider>
      </RecoilRoot>
    </Layout>
  )
}
