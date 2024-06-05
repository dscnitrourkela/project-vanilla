import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Playground from './pages/Playground.jsx'
import NavBar from './components/marginals/navbar/NavBar.jsx'

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/playground" element={<Playground />} />
      </Routes>
    </Router>
  )
}

export default App
