import tw from 'twin.macro'
import styled from 'styled-components'
import { links } from '../../../config/index'

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
  bg-[#151515]  
  w-[100%] 
  bg-fixed  
  `}
`
