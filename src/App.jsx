import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { eventData, breadcrumbsData, logoData } from './components/shared/SEO/structuredData'
import Home from './pages/Home.jsx'
import Playground from './pages/Playground.jsx'
import Registration from './pages/Registration.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { ToastContainer, Zoom } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Slide } from 'react-toastify'
import { Suspense } from 'react'
import Loader from './components/loader/Loader.jsx'
import SEO from './components/shared/SEO/SeoComponent.jsx'
import { CustomToastContainer } from './components/marginals/footer/Styles.jsx'

const App = () => {
  return (
    <AuthProvider>
      <ToastContainer transition={Slide} position="top-center" />
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
      <CustomToastContainer>
        <ToastContainer
          position="top-center"
          autoClose={false}
          limit={1}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          theme="dark"
          transition={Zoom}
        />
      </CustomToastContainer>
    </AuthProvider>
  )
}

export default App
