
import { useState } from 'react'
import NavCont, {
  InnerMenu,
  InnrNavCont,
  Logo,
  LogoImg,
  Menu,
  MenuItem,
  Menu2,
  Btn,
  MenuIcon,
  SvgIcon,
  ResMen,
  ResList,
  ResItem,
  ResAnchor
} from './Nav.styles'

import { navContent } from "../../../config/content/Nav_Hero";
import { links } from '../../../config/content/Nav_Hero';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <NavCont>
      
        <InnrNavCont>
          <Logo>
            <LogoImg 
            src={links.logo}
            alt="logo" 
            />
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
            <Btn onClick={handleToggle}>
              {isOpen ? (
                <MenuIcon>
                  <SvgIcon 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="#FFEEDA"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 5.25Zm0 4.5A.75.75 0 0 1 3.75 9h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                      clipRule="evenodd"
                    />
                  </SvgIcon>
                </MenuIcon>
              ) : (
                <MenuIcon>
                  <SvgIcon 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="#FFEEDA"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 5.25Zm0 4.5A.75.75 0 0 1 3.75 9h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                      clipRule="evenodd"
                    />
                  </SvgIcon>
                </MenuIcon>
              )}
            </Btn>
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
