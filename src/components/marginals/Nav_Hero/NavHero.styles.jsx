import tw from 'twin.macro'
import styled from 'styled-components'

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
  background-image: url('src/assets/Noise & Texture.png');
  ${tw`
  md:py-5 
  bg-[#151515]  
  lg:max-w-[1440px] 
  w-[100%] 
  bg-fixed  
  `}
`
