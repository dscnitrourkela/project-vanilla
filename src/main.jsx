import './styles/index.css'

import React from 'react'

import ReactDOM from 'react-dom/client'

import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

import App from './App.jsx'
import GlobalStyles from './styles/global.jsx'

const MAX_RETRIES = 3
const RETRY_TIMEOUT = 8000

const customFetch = (uri, options, retries = 0) => {
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), RETRY_TIMEOUT)

  return fetch(uri, { ...options, signal: controller.signal })
    .then((response) => {
      clearTimeout(timeoutId)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
      return response
    })
    .catch((error) => {
      clearTimeout(timeoutId)
      if (retries < MAX_RETRIES) {
        console.log(`Retrying (${retries + 1}/${MAX_RETRIES})...`)
        return new Promise((resolve) =>
          setTimeout(() => resolve(customFetch(uri, options, retries + 1)), RETRY_TIMEOUT)
        )
      }
      throw error
    })
}

const httpLink = new HttpLink({
  uri: import.meta.env.VITE_PUBLIC_APOLLO_URI,
  fetch: customFetch
})
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('auth-token')
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
