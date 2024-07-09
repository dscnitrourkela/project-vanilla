import 'react-toastify/dist/ReactToastify.css'

import { Suspense } from 'react'

import { Helmet } from 'react-helmet'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Slide, ToastContainer } from 'react-toastify'

import Loader from './components/loader/Loader.jsx'
import SEO from './components/shared/SEO/SeoComponent.jsx'
import { breadcrumbsData, eventData, logoData } from './components/shared/SEO/structuredData'
import { AuthProvider } from './context/AuthContext.jsx'
import Home from './pages/Home.jsx'
import Playground from './pages/Playground.jsx'
import Registration from './pages/Registration.jsx'

const App = () => {
  return (
    <AuthProvider>
      <ToastContainer transition={Slide} position="top-center" theme="dark" />
      <Router>
        <Helmet>
          <script type="application/ld+json">{JSON.stringify(eventData)}</script>
          <script type="application/ld+json">{JSON.stringify(logoData)}</script>
          <script type="application/ld+json">{JSON.stringify(breadcrumbsData)}</script>
        </Helmet>
        <SEO />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/playground" element={<Playground />} />
            <Route path="/register" element={<Registration />} />
          </Routes>
        </Suspense>
      </Router>
    </AuthProvider>
  )
}

export default App
