import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const httpLink = new createHttpLink({
  uri:
    'https://803votn6w7.execute-api.us-west-2.amazonaws.com/dev/public/graphql'
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

export default client
