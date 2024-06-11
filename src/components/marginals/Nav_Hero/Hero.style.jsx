import tw from 'twin.macro'
import styled, { keyframes } from 'styled-components'

const HeroCont = styled.div`
  ${tw`
  pt-[180px] 
  w-[100%] 
  h-[100%]
  `}
`

export const MainFrame = styled.div`
  ${tw`flex justify-center`}
`

export const LogoCont = styled.div`
  ${tw`flex flex-col items-center justify-center mb-2`}
`
export const Presents = styled.div`
  ${tw`text-[#FFEEDA ] text-3xl font-Poppins font-bold mt-6`}
`

export const LogoImg = styled.img`
  @media (max-width: 671px) {
    max-width: 300px;
    width: 50%;
    height: auto;
  }
  ${tw`w-[45%] h-[20%] max-w-[400px]`}
`

export const MainImg = styled.img`
  @media (max-width: 671px) {
    max-width: 400px;
    width: 100%;
  }
  ${tw`
  md:w-[100%] 
  
  md:max-w-[800px] 
  object-contain
  
  `}
`

export const DateTime = styled.div`
  @media (max-width: 671px) {
    width: 70%;
    height: 50px;
  }
  ${tw`w-[245px] h-[70px] font-semibold text-2xl bg-orange-1 text-black-1 font-Poppins rounded-2xl flex justify-evenly items-center mt-6`}
`

export const RegisterCont = styled.div`
  ${tw`
  w-full 
  flex 
  justify-end 
  mt-5 
  mr-10
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
  z-10
  `}
`

export const Img2 = styled.img`
  @media (max-width: 640px) {
    top: 60px;
    left: 65px;
  }
  @media (min-width: 640px) {
    top: 20px;
    left: 35px;
  }
  @media (min-width: 671px) {
    left: 60px;
    top: 55px;
  }
  @media (min-width: 758px) {
    left: 65px;
    top: 65px;
  }
  @media (min-width: 850px) {
    left: 70px;
    top: 70px;
  }
  @media (min-width: 892px) {
    left: 75px;
    top: 70px;
  }
  @media (min-width: 927px) {
    left: 75px;
    top: 75px;
  }
  @media (min-width: 990px) {
    left: 90px;
    top: 80px;
  }
  @media (min-width: 1024px) {
    left: 65px;
    top: 65px;
  }
  @media (min-width: 1100px) {
    left: 70px;
    top: 65px;
  }
  @media (min-width: 1180px) {
    left: 75px;
    top: 70px;
  }
  @media (min-width: 1278px) {
    left: 80px;
    top: 75px;
  }
  @media (min-width: 1325px) {
    left: 85px;
    top: 80px;
  }
  @media (min-width: 1400px) {
    left: 95px;
    top: 90px;
  }
  @media (min-width: 1552px) {
    left: 110px;
    top: 105px;
  }
  @media (min-width: 1777px) {
    left: 120px;
    top: 120px;
  }
  @media (min-width: 1920px) {
    left: 130px;
    top: 125px;
  }

  ${tw`
  absolute 
  md:(w-[26.71px] h-auto )
  sm:(w-[20px] h-auto )
  object-contain
  `}
`

export default HeroCont
