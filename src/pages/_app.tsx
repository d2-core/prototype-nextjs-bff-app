import type { AppProps } from 'next/app'
import { Global } from '@emotion/react'
import { QueryClientProvider, QueryClient, Hydrate } from 'react-query'
import Layout from '@shared/Layout'

import globalStyles from '@styles/globalStyles'
import ErrorBoundary from '@/components/shared/ErrorBoundary'
import { AlertContextProvider } from '@/contexts/AlertContext'
import { RecoilRoot } from 'recoil'
import Init from '@/components/auth/Init'
import ApiGuard from '@/components/auth/API'

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
            <ErrorBoundary>
              <AlertContextProvider>
                <ApiGuard>
                  <Init>
                    <Component {...pageProps} />
                  </Init>
                </ApiGuard>
              </AlertContextProvider>
            </ErrorBoundary>
          </Hydrate>
        </QueryClientProvider>
      </RecoilRoot>
    </Layout>
  )
}
