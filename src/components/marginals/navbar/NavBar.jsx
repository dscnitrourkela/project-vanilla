import { Link } from 'react-router-dom'
import { NavContainer, Items } from './navbar.styles'

const NavBar = () => {
  return (
    <NavContainer>
      <Items>
        <Link to="/home">Home</Link>
      </Items>
      <Items>
        <Link to="/playground">Playground</Link>
      </Items>
    </NavContainer>
  )
}

export default NavBar
