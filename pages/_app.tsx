import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import React from 'react'
import { client } from '../apollo/client'
import config from '../config'
export type { ConfigType } from '../config'

export const ConfigContext = React.createContext<any>(Symbol('config'))

function MyApp({ Component, pageProps }: AppProps) {
  return <ApolloProvider client={client}>
    <ConfigContext.Provider value={config}>
      <Component {...pageProps} />
    </ConfigContext.Provider>
  </ApolloProvider>
}

export default MyApp
