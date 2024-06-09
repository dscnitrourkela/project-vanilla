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
  ResAnchor
} from './Nav.styles'

import { navContent } from '../../../config/content/Nav_Hero'
import { links } from '../../../config/content/Nav_Hero'
import Hamburger from 'hamburger-react'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <NavCont>
      <InnrNavCont>
        <Logo>
          <LogoImg src={links.logo} alt="logo" />
        </Logo>

        <Menu>
          <InnerMenu>
            {navContent.map((item) => (
              <MenuItem key={item}>
                <a href="#">{item}</a>
              </MenuItem>
            ))}
          </InnerMenu>
        </Menu>

        <Menu2>
          <MenuIcon>
            <Hamburger color="#FFEEDA" toggled={isOpen} toggle={handleToggle} />
          </MenuIcon>
        </Menu2>
      </InnrNavCont>

      {isOpen && (
        <ResMen>
          <ResList>
            {navContent.map((item) => (
              <ResItem key={item}>
                <ResAnchor href="#" onClick={() => setIsOpen(false)}>
                  {item}
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
