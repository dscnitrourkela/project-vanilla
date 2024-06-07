import tw from 'twin.macro'
import styled, { keyframes } from 'styled-components'

const HeroCont = styled.div`
  ${tw`
  pt-[135px] 
  w-[100%] 
  h-[100%]
  `}
`

export const MainFrame = styled.div`
  ${tw`flex justify-center `}
`
export const MainImg = styled.img`
  ${tw`
  md:w-[60%] 
  sm:w-[40%] 
  md:max-w-[600px] 
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
  @media (min-width: 650px) and (max-width: 892px) {
    width: 80%;
    height: 80%;
  }
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
  @media (min-width: 640px) and (max-width: 758px) {
    left : 60px;
    top:55px;
  }
  @media (min-width: 758px) and (max-width: 850px) {
    left:65px;
    top:65px;
  }
  @media (min-width: 850px) and (max-width: 892px) {
    left:70px;
    top:70px;
  }
  @media (min-width:892px) and (max-width: 927px) {
    left:75px;
    top:70px;
  }
  @media (min-width:927px) and (max-width: 990px) {
    left:75px;
    top:75px;
  }
  @media (min-width:990px) and (max-width: 1024px) {
    left:90px;
    top:80px;
  }
  @media (min-width:1024px) and (max-width : 1100px) {
    left:65px;
    top:65px;
  }
  @media (min-width:1100px) and (max-width: 1180px) {
    left:70px;
    top:65px;
  }
  @media (min-width:1180px) and (max-width: 1278px) {
    left:75px;
    top:70px;
  }
  @media (min-width:1278px) and (max-width: 1325px)  {
    left:80px;
    top:75px;
  }
  @media (min-width:1325px) and (max-width: 1400px) {
    left:85px;
    top:80px;
  }
  @media (min-width:1400px){
    left:95px;
    top:90px;
  }


  ${tw`
  absolute 
  md:(w-[26.71px] h-auto )
  sm:(w-[20px] h-auto )
  object-contain
  `}
`

export default HeroCont
