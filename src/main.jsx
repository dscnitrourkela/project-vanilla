import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import GlobalStyles from './styles/global.jsx'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
const client = new ApolloClient({
  uri: import.meta.env.VITE_PUBLIC_APOLLO_URI,
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
