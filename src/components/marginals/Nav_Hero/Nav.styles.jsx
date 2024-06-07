import tw from 'twin.macro'
import styled from 'styled-components'
import { links } from '../../../config/content/Nav_Hero'

const NavCont = styled.nav`
  ${tw`
  bg-[#151515]
  w-[100%]
  fixed 
  top-0
  z-10
  rounded-b
  `}
`

export const InnrNavCont = styled.div`
  background-image : url(${links.stars});
  ${tw`flex items-center justify-between p-4`}
` 

export const Logo = styled.div`
  ${tw`
  h-[48px]
  w-[48px] 
  sm:h-[40px] 
  sm:w-[40px] 
  md:h-[54px] 
  md:w-[54px] 
  ml-5 
  mt-2
  `}
`
export const LogoImg = styled.img`
  ${tw`object-contain w-full h-full `}
`
export const Menu = styled.div`
  ${tw`items-center hidden min-[854px]:flex`}
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
  ${tw`flex items-center min-[854px]:hidden `}
`
export const Btn = styled.button`
  ${tw`overflow-hidden focus:outline-none`}
`

export const MenuIcon = styled.div`
  ${tw`mr-7`}
`

export const SvgIcon = styled.svg`
  ${tw`	
  w-[2rem] 
  h-[2rem] 
  `}
`

export const ResMen = styled.div`
  ${tw`z-10 mr-5  min-[854px]:hidden`}
`
export const ResList = styled.ul`
  background-image : url(${links.stars});
  ${tw`flex flex-col items-center justify-center backdrop-blur-md`}
`
export const ResItem = styled.li`
  ${tw`pb-[55px]`}
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
