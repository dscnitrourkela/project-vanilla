// import { NavContainer } from '../navbar/navbar.styles'
import { NavHeroCont2, NavHeroContainer } from './NavHero.styles'
import Nav from './Nav'
import Hero from './Hero'
import WaveDivider from './WaveDivider'
import Description from './Description'

const NavHero = () => {
  return (
    <NavHeroContainer>
      <NavHeroCont2>
        <Nav />
        <Hero />
        <WaveDivider />
        <Description />
      </NavHeroCont2>
    </NavHeroContainer>
  )
}

export default NavHero
