import tw from 'twin.macro'
import styled from 'styled-components'
import { links } from '../../../config/content/navData/Nav_Hero'

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
  h-[80px]
  md:w-[160px]
  sm:h-[40px] 
  sm:w-[80px] 
  md:h-[54px] 
  cursor-pointer
  z-50
  flex
  `}
`
export const LogoImg = styled.img`
  @media (max-width: 573px) {
    margin-top: 10px;
  }
  ${tw`object-contain w-full sm:h-full h-[65%] `}
`
export const NitImg = styled.img`
  @media (max-width: 573px) {
    margin-top: 10px;
    margin-right: 5px;
  }
  ${tw`object-contain w-full sm:h-[130%] ml-3 h-[80%]`}
`

export const Menu = styled.div`
  ${tw`items-center hidden min-[1090px]:flex`}
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

export const Register = styled.div`
  @media (max-width: 671px) {
    width: 20%;
    height: 50px;
  }
  @media (max-width: 1090px) {
    display: none;
  }
  ${tw`
  w-[150px] 
  h-[60px] 
  font-semibold 
  text-2xl 
  bg-orange-1 
  text-black-1 
  font-Poppins 
  rounded-2xl 
  flex 
  justify-evenly 
  items-center 
  cursor-pointer 
  sm:mt-4
  `}
`
export const SecRegister = styled.div`
  ${tw`
  w-[120px] 
  h-[50px] 
  font-semibold 
  text-2xl 
  bg-orange-1 
  text-black-1 
  font-Poppins 
  rounded-2xl 
  flex 
  justify-evenly 
  items-center 
  cursor-pointer 
  mt-4
  `}
`
export const Menu2 = styled.div`
  ${tw`min-[1090px]:hidden items-center flex z-50`}
`

export const MenuIcon = styled.div`
  ${tw``}
`

export const ResMen = styled.div`
  background-image: url(${links.stars});
  ${tw`z-10 min-[1090px]:hidden h-screen grid place-items-center w-full`}
`
export const ResList = styled.ul`
  ${tw`flex flex-col items-center fixed top-0 left-0 h-full w-full justify-center gap-10`}
`
export const ResItem = styled.li`
  ${tw` mb-1 cursor-pointer`}
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
