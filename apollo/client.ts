import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
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
export const client = new ApolloClient({
  ssrMode: true,
  cache: new InMemoryCache(),
  connectToDevTools: true,
  link: authLink.concat(httpLink)
})