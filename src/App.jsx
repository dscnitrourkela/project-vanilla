import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { eventData, breadcrumbsData, logoData } from './components/shared/SEO/structuredData'
import Home from './pages/Home.jsx'
import Playground from './pages/Playground.jsx'
import Registration from './pages/Registration.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Slide } from 'react-toastify'
import { Suspense } from 'react'
import Loader from './components/loader/Loader.jsx'
import SEO from './components/shared/SEO/SEO.jsx'

const App = () => {
  return (
    <AuthProvider>
      <ToastContainer transition={Slide} position="top-center" />
      <Router>
        <Helmet>
          <script
            type="text/javascript"
            id="hs-script-loader"
            async
            defer
            src="//js.hs-scripts.com/8898157.js"
          />
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
