import './styles/index.css'

import React from 'react'

import ReactDOM from 'react-dom/client'

import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

import App from './App.jsx'
import GlobalStyles from './styles/global.jsx'

const httpLink = new HttpLink({
  uri: import.meta.env.VITE_PUBLIC_APOLLO_URI
})
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('auth-token')
  // console.log(`Bearer ${token}`)

  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : ''
    }
  }
})
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
      <GlobalStyles />
    </ApolloProvider>
  </React.StrictMode>
)
