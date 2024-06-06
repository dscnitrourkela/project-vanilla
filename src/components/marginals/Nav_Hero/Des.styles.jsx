import tw from 'twin.macro'
import styled from 'styled-components'

export const DesCont = styled.article`
  ${tw`
  w-full 
  text-center 
  bg-[#FFEEDA]
  `}
`

export const DesTitle = styled.h1`
  ${tw`
  py-3 
  text-4xl 
  md:text-5xl 
  font-semibold 
  leading-tight 
  md:leading-[72px]
  `}
`

export const DesPara = styled.p`
  ${tw`
  w-full 
  py-5 
  px-4 
  md:px-[50px] 
  lg:px-[30px] 
  text-lg 
  md:text-2xl 
  leading-7 
  md:leading-9 
  text-left 
  mx-auto 
  max-w-6xl
  `}
`

export const BtnWrapper = styled.div`
  ${tw`
  w-full 
  flex 
  justify-center 
  h-full 
  md:h-[340.42px] 
  pb-5
  `}
`

export const BtnCont = styled.div`
  ${tw`
  w-full 
  md:max-w-[1000px] 
  h-full 
  flex 
  md:flex-row 
  justify-evenly 
  gap-4 
  md:gap-[90px]
  `}
`

export const Btn1 = styled.button`
  ${tw`
  relative 
  w-[140px] 
  md:w-[180px] 
  h-[50px] 
  md:h-[70px] 
  text-lg 
  md:text-2xl 
  font-semibold 
  border-2 
  rounded-2xl 
  bg-[#FFEEDA] 
  border-[#1D1D1D] 
  transition 
  ease-in-out 
  duration-300
  `}
  box-shadow: 3px 3px 0px #FFEEDA;
`

export const InnerSpan = styled.span`
  ${tw`absolute inset-0 transition duration-300 ease-in-out transform translate-x-2 translate-y-2 active:translate-x-0 active:translate-y-0 rounded-xl`}
  border-right-width : 2px;
  border-bottom-width: 2px;
  border-right: solid;
  border-bottom: solid;
  border-right-color: #1d1d1d;
  border-bottom-color: #1d1d1d;
`

export const Btn2 = styled.button`
  ${tw`
  w-[140px]
  md:w-[180px] 
  h-[50px] 
  md:h-[70px] 
  active:shadow-none 
  transition 
  ease-in-out 
  duration-300 
  border-2 
  rounded-2xl 
  border-[#1D1D1D] 
  bg-[#FF8911] 
  shadow-[4px 4px 0px #1D1D1D] 
  text-lg 
  md:text-2xl 
  font-semibold
  `}
`
