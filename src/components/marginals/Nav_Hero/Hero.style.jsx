import tw from 'twin.macro'
import styled, { keyframes } from 'styled-components'

const HeroCont = styled.div`
  ${tw`
  w-[100%] 
  h-[100%]
  `}
`

export const MainFrame = styled.div`
  ${tw`flex justify-center `}
`
export const MainImg = styled.img`
  ${tw`
  md:w-[40%] 
  sm:w-[30%] 
  md:max-w-[1000px] 
  object-contain
  `}
`

export const RegisterCont = styled.div`
  ${tw`
  w-full 
  flex 
  justify-end 
  mt-5 
  mb-[-1]
  `}
`
export const RegImgCont = styled.div`
  ${tw`
  relative 
  lg:w-[15%] 
  md:w-[20%] 
  max-w-[400px] 
  md:max-w-[600px] 
  `}
`
const rotate = keyframes`
    from{
        transform: rotate(360deg);
    }
    to{
        transform: rotate(0deg);
    }
`

export const Img1 = styled.img`
  animation: ${rotate} 5s linear infinite;
  ${tw`
  object-cover 
  md:(w-full  h-auto) 
  sm:(w-[60%] h-[60%])
  `}
`

export const Img2 = styled.img`
  @media (max-width: 640px) {
    top: 60px;
    left: 65px;
  }
  ${tw`
  absolute 
  lg:(left-[95px] top-[95px]) 
  md:(left-[80px] top-[80px]) 
  sm:(left-[70px] top-[60px]) 
  md:(w-[26.71px] h-auto )
  sm:(w-[20px] h-auto )
  object-contain
  `}
`

export default HeroCont
