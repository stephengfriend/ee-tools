import { useAnalytics } from '@happykit/analytics'
import { configure } from '@happykit/flags'

import { Provider } from 'next-auth/client'

import type { AppProps } from 'next/app'

import '../styles/app.css'

configure({
  clientId: process.env.NEXT_PUBLIC_FLAGS_CLIENT_ID || '',
  defaultFlags: { validate: false },
})

export default function App({ Component, pageProps }: AppProps) {
  useAnalytics({ publicKey: process.env.NEXT_PUBLIC_ANALYTICS_CLIENT_ID || '' })

  return <Provider session={pageProps?.session}><Component {...pageProps} /></Provider>
}
