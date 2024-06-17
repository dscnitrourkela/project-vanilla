import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Playground from './pages/Playground.jsx'
import Registration from './pages/Registration.jsx'
import { AuthProvider } from './context/AuthContext.jsx'

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/playground" element={<Playground />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
