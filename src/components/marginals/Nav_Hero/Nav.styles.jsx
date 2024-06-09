import tw from 'twin.macro'
import styled from 'styled-components'
import { links } from '../../../config/content/Nav_Hero'

const NavCont = styled.nav`
  ${tw`
  bg-[#151515]
  w-[100%]
  fixed
  top-0
  z-50
  
  `}
`

export const InnrNavCont = styled.div`
  background-image: url(${links.stars});
  ${tw`flex items-center justify-between px-6 py-4 z-50`}
`

export const Logo = styled.div`
  ${tw`
  h-[48px]
  w-[48px] 
  sm:h-[40px] 
  sm:w-[40px] 
  md:h-[54px] 
  md:w-[54px]
  cursor-pointer
  z-50
  `}
`
export const LogoImg = styled.img`
  ${tw`object-contain w-full h-full `}
`
export const Menu = styled.div`
  ${tw`items-center hidden min-[903px]:flex`}
`
export const InnerMenu = styled.div`
  ${tw`
  text-[#FFEEDA] 
  flex 
  justify-between 
  gap-[50px] 
  px-2 
  items-center 
  mt-1
  `}
`

export const MenuItem = styled.div`
  ${tw`
  transition 
  ease-in 
  hover:text-[#FF8911] 
  `}
`

export const Menu2 = styled.div`
  ${tw`min-[903px]:hidden items-center flex z-50`}
`

export const MenuIcon = styled.div`
  ${tw``}
`

export const ResMen = styled.div`
  background-image: url(${links.stars});
  ${tw`z-10 min-[903px]:hidden h-screen grid place-items-center w-full`}
`
export const ResList = styled.ul`
  ${tw`flex flex-col items-center fixed top-0 left-0 h-full w-full justify-center gap-10`}
`
export const ResItem = styled.li`
  ${tw` mb-3 cursor-pointer`}
`

export const ResAnchor = styled.a`
  ${tw`
  transition 
  ease-in 
  text-[#FFEEDA] 
  hover:text-[#FF8911] 
  duration-75
  `}
`

export default NavCont
