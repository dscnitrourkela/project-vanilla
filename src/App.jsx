import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Playground from './pages/Playground.jsx'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/playground" element={<Playground />} />
      </Routes>
    </Router>
  )
}

export default App
