import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

import { token } from '../local.config'

const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
  credentials: 'same-origin'
})
const authLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
    authorization: token ? `Bearer ${token}` : "",
  }
}))
const client = new ApolloClient({
  cache: new InMemoryCache(),
  connectToDevTools: true,
  link: authLink.concat(httpLink)
})

function MyApp({ Component, pageProps }: AppProps) {
  return <ApolloProvider client={client}>
    <Component {...pageProps} />
  </ApolloProvider>
}

export default MyApp
