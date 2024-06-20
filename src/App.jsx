import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Playground from './pages/Playground.jsx'
import Registration from './pages/Registration.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Slide } from 'react-toastify'
import { Suspense } from 'react'
import Loader from './components/loader/Loader.jsx'
import { AnimatePresence } from 'framer-motion'
const App = () => {
  return (
    <AuthProvider>
      <ToastContainer transition={Slide} position="top-center" />
      <Router>
        <AnimatePresence mode="wait">
          <Suspense fallback={<Loader />} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/playground" element={<Playground />} />
            <Route path="/register" element={<Registration />} />
          </Routes>
        </AnimatePresence>
      </Router>
    </AuthProvider>
  )
}

export default App
