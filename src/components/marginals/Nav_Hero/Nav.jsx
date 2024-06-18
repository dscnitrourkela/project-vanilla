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
  SecRegister
} from './Nav.styles'
import { Link } from 'react-router-dom'
import { navLinks } from '../../../config/content/navData/Nav_Hero'
import { links } from '../../../config/content/navData/Nav_Hero'
import Hamburger from 'hamburger-react'
import SmoothScroll from 'smooth-scroll'
import Loader from '../../loader/Loader'
import { useNavigate } from 'react-router-dom'
const Nav = () => {
  const { userInfo, handleGoogleSignIn, handleSignOut } = useContext(AuthContext)
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  async function signInWithGoogle() {
    setLoading(true)
    try {
      await handleGoogleSignIn()
      navigate('/register')
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

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
      {loading && <Loader />}
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
          <Link to="/" onClick={handleSignOut}>
            <Register>Logout</Register>
          </Link>
        ) : (
          <button onClick={signInWithGoogle}>
            <Register>Register</Register>
          </button>
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
            <button onClick={userInfo.name ? handleSignOut : signInWithGoogle}>
              <SecRegister>{userInfo.name ? 'Logout' : 'Register'}</SecRegister>
            </button>
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
