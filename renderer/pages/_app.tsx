import React from 'react'
import type { AppProps } from 'next/app'

import '../styles/globals.css'

/**
 * declare window for tsx
 */
declare global {
  interface Window {
    electron: any;
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp;
