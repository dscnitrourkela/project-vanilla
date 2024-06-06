// import { NavContainer } from '../navbar/navbar.styles'
import { NavHeroCont2, NavHeroContainer } from './NavHero.styles'
import Nav from './Nav'
import Hero from './Hero'
import WaveDivider from './WaveDivider'
import Des from './Des'

const NavHero = () => {
  return (
    <NavHeroContainer>
      <NavHeroCont2>
        <Nav />
        <Hero />
        <WaveDivider />
        <Des />
      </NavHeroCont2>
    </NavHeroContainer>
  )
}

export default NavHero
