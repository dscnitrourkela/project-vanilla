import tw from 'twin.macro'
import styled, { keyframes } from 'styled-components'

const HeroCont = styled.div`
  ${tw`
  grid
  place-items-center
  mt-10
  0.4xsm:mt-20
  w-[100%] 
  h-screen
  md:px-10
  px-4
  font-Poppins
  `}
`

export const MainFrame = styled.div`
  ${tw`flex justify-center`}
`

export const LogoCont = styled.div`
  ${tw`flex flex-col items-center justify-center `}
`

export const InnerLogoCont = styled.div`
  ${tw`flex flex-col items-center justify-center gap-10 xsm:flex xsm:flex-row xsm:items-center xsm:justify-center xsm:gap-14`}
`

export const Presents = styled.div`
  ${tw`text-[#FFEEDA ] text-base md:text-3xl  font-[600] mt-10`}
`

export const AicheNit = styled.img`
  ${tw`w-auto h-[60px] 0.4xsm:h-[70px] md:h-[80px]`}
`

export const AicheLogo = styled.img`
  ${tw`w-auto h-[40px]  0.4xsm:h-[45px] md:h-[60px] `}
`
export const AicheLogonit = styled.img`
  ${tw`w-auto h-[50px]  0.4xsm:h-[60px] md:h-[100px] `}
`

export const MainImg = styled.img`
  ${tw` w-auto scale-[1.08] md:(h-[200px])`}
`

export const MainImgText = styled.div`
  ${tw`
  text-center text-lg xxsm:text-xl 0.5xsm:text-1.5xl 0.9xsm:text-2xl xsm:text-2.5xl text-brown-2 font-[600] text-[#FFEEDA ]
  
  `}
`

export const DateTime = styled.div`
  ${tw` px-5 h-[55px] font-[600] text-lg xxsm:text-xl 0.5xsm:text-1.5xl 0.9xsm:text-2xl xsm:text-2.5xl bg-orange-1 text-black-1  rounded-2xl flex justify-evenly items-center mt-10`}
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
  cursor-pointer	
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
