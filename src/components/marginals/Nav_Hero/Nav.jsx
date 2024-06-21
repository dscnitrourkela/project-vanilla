import { useState, useContext } from 'react'
import { AuthContext } from '../../../context/AuthContext'
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
  SecRegister,
  ProfileBtn
} from './Nav.styles'
import { Link } from 'react-router-dom'
import { navLinks } from '../../../config/content/navData/Nav_Hero'
import { links } from '../../../config/content/navData/Nav_Hero'
import Hamburger from 'hamburger-react'
import SmoothScroll from 'smooth-scroll'
import ProfileMenu from './ProfileMenu'

const Nav = () => {
  const { userInfo } = useContext(AuthContext)
  const [isOpen, setIsOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)

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

  function handleProfileOpen() {
    setIsOpen(false)
    setProfileOpen(true)
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
                {navLink.id == 'home' ? (
                  <Link to="/">{navLink.name}</Link>
                ) : (
                  <Link
                    to={navLink.href}
                    tabIndex={0}
                    onClick={navLink.href ? null : () => onClick(navLink.id)}
                  >
                    {navLink.name}
                  </Link>
                )}
              </MenuItem>
            ))}
          </InnerMenu>
        </Menu>

        {userInfo.name ? (
          // <Link to="/" onClick={handleSignOut}>
          //   <Register>Logout</Register>
          // </Link>

          <ProfileBtn onMouseEnter={() => setProfileOpen(true)}>
            <ProfileMenu isProfileOpen={profileOpen} setProfileOpen={setProfileOpen} />
          </ProfileBtn>
        ) : (
          <Link to="/register">
            <Register>Register</Register>
          </Link>
        )}
        <Menu2>
          <MenuIcon>
            <Hamburger color="#FFEEDA" toggled={isOpen} toggle={handleToggle} />
          </MenuIcon>
        </Menu2>
      </InnrNavCont>

      {isOpen && (
        <ResMen>
          <ResList>
            {userInfo.name ? (
              // <Link to="/" onClick={handleSignOut}>
              //   <SecRegister>Logout</SecRegister>
              // </Link>
              <button onClick={handleProfileOpen}>
                <ProfileMenu isProfileOpen={profileOpen} setProfileOpen={setProfileOpen} />
              </button>
            ) : (
              <Link to="/register">
                <SecRegister>Register</SecRegister>
              </Link>
            )}
            {navLinks.map((navLink) => (
              <ResItem key={navLink.id}>
                {navLink.id == 'home' ? (
                  <ResAnchor>
                    <Link to="/">{navLink.name} </Link>
                  </ResAnchor>
                ) : (
                  <ResAnchor
                    // onClick={() => setIsOpen(false)}
                    tabIndex={0}
                    onClick={navLink.href ? null : () => onClick(navLink.id)}
                  >
                    {navLink.name}
                  </ResAnchor>
                )}
              </ResItem>
            ))}
          </ResList>
        </ResMen>
      )}
    </NavCont>
  )
}

export default Nav
