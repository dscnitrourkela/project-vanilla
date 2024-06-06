import tw from 'twin.macro'
import styled from 'styled-components'

const NavCont = styled.div`
  ${tw`
  pb-[135px] 
  w-[100%]
  `}
`

export const InnrNavCont = styled.div`
  ${tw`
  flex 
  items-center 
  justify-between 
  `}
`

export const Logo = styled.div`
  ${tw`
  h-[48px]
  w-[48px] 
  sm:h-[56px] 
  sm:w-[56px] 
  md:h-[64px] 
  md:w-[64px] 
  ml-5 
  mt-2
  `}
`
export const LogoImg = styled.img`
  ${tw`
  object-contain 
  w-full 
  h-full
  `}
`
export const Menu = styled.div`
  ${tw`
  items-center 
  hidden 
  md:flex
  `}
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
  ${tw`
  flex 
  items-center 
  md:hidden
  `}
`
export const Btn = styled.button`
  ${tw`
  overflow-hidden 
  focus:outline-none
  `}
`

export const MenuIcon = styled.div`
  ${tw`
  mr-7
  `}
`

export const SvgIcon = styled.svg`
  ${tw`	
  w-[1.5rem] 
  h-[1.5rem] 
  `}
`

export const ResMen = styled.div`
  ${tw`
  z-10 
  mr-5 
  md:hidden
  `}
`
export const ResList = styled.ul`
  ${tw`
  flex 
  flex-col 
  items-end 
  justify-end
  `}
`
export const ResItem = styled.li`
  ${tw`
  my-2
  `}
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
