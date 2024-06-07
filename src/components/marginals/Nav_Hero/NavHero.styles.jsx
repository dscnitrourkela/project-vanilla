import tw from 'twin.macro'
import styled from 'styled-components'
import { links } from '../../../config/content/assetslink'

export const NavHeroContainer = styled.div`
  font-family: 'Poppins', sans-serif;
  ${tw`
  flex
  justify-center
  overflow-x-hidden 
  bg-[#151515]  
  flex-row items-center
 `}
`
export const NavHeroCont2 = styled.div`
  background-image: url(${links.stars});
  ${tw`
  md:py-5 
  bg-[#151515]  
  lg:max-w-[1440px] 
  w-[100%] 
  bg-fixed  
  `}
`
