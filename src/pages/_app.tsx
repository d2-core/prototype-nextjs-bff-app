import type { AppProps } from 'next/app'
import { Global } from '@emotion/react'
import { QueryClientProvider, QueryClient, Hydrate } from 'react-query'
import Layout from '@shared/Layout'

import globalStyles from '@styles/globalStyles'
import { AlertContextProvider } from '@/contexts/AlertContext'
import { RecoilRoot } from 'recoil'
import ApiGuard from '@/components/api/ApiGuard'
import InitGuard from '@/components/init/InitGuard'
import D2ErrorBoundary from '@/components/shared/ErrorBoundary'

const client = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
  },
})

export default function App({
  Component,
  pageProps: { dehydratedState, ...pageProps },
}: AppProps) {
  return (
    <Layout>
      <Global styles={globalStyles} />
      <RecoilRoot>
        <QueryClientProvider client={client}>
          <Hydrate state={dehydratedState}>
            <AlertContextProvider>
              <D2ErrorBoundary>
                <ApiGuard>
                  <InitGuard>
                    <Component {...pageProps} />
                  </InitGuard>
                </ApiGuard>
              </D2ErrorBoundary>
            </AlertContextProvider>
          </Hydrate>
        </QueryClientProvider>
      </RecoilRoot>
    </Layout>
  )
}
