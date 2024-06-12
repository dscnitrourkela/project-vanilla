import { useState } from 'react'
import NavCont, {
  InnerMenu,
  InnrNavCont,
  Logo,
  LogoImg,
  Menu,
  MenuItem,
  Menu2,
  MenuIcon,
  ResMen,
  ResList,
  ResItem,
  ResAnchor,
  NitImg,
  Register,
  SecRegister
} from './Nav.styles'
import { Link } from 'react-router-dom'
import { navLinks } from '../../../config/content/navData/Nav_Hero'
import { links } from '../../../config/content/navData/Nav_Hero'
import Hamburger from 'hamburger-react'
import SmoothScroll from 'smooth-scroll'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)

  function handleToggle() {
    setIsOpen(!isOpen)
  }
  function newScrollObject() {
    return new SmoothScroll('', {
      offset: () => 100
    })
  }

  function handleScroll(id) {
    if (typeof window !== 'undefined' && id) {
      const isHome = window.location.pathname === '/' || window.location.pathname === '/playground'
      if (isHome) {
        const scroll = newScrollObject()
        const anchor = document.getElementById(id)
        scroll.animateScroll(anchor)
      }
    }
  }

  function onClick(id) {
    handleScroll(id)
    console.log(id)
    handleToggle()
  }

  return (
    <NavCont>
      <InnrNavCont>
        <Logo>
          <NitImg src={links.nit} alt="NIT Rkl" />
          <LogoImg src={links.logo} alt="logo" />
        </Logo>

        <Menu>
          <InnerMenu>
            {navLinks.map((navLink) => (
              <MenuItem key={navLink.id}>
                <Link
                  to={navLink.href}
                  tabIndex={0}
                  onClick={navLink.href ? null : () => onClick(navLink.id)}
                >
                  {navLink.name}
                </Link>
              </MenuItem>
            ))}
          </InnerMenu>
        </Menu>

        <Menu2>
          <MenuIcon>
            <Hamburger color="#FFEEDA" toggled={isOpen} toggle={handleToggle} />
          </MenuIcon>
        </Menu2>

        <Register>Register</Register>
      </InnrNavCont>

      {isOpen && (
        <ResMen>
          <ResList>
            <SecRegister>Register</SecRegister>
            {navLinks.map((navLink) => (
              <ResItem key={navLink.id}>
                <ResAnchor
                  // onClick={() => setIsOpen(false)}
                  tabIndex={0}
                  onClick={navLink.href ? null : () => onClick(navLink.id)}
                >
                  {navLink.name}
                </ResAnchor>
              </ResItem>
            ))}
          </ResList>
        </ResMen>
      )}
    </NavCont>
  )
}

export default Nav
