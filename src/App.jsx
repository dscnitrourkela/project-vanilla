import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Playground from './pages/Playground.jsx'
import Registration from './pages/Registration.jsx'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/playground" element={<Playground />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </Router>
  )
}

export default App
