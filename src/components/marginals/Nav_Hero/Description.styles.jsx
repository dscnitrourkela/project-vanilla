import tw from 'twin.macro'
import styled from 'styled-components'

export const DescriptionContainer = styled.article`
  ${tw`
  w-full 
  text-center 
  bg-[#FFEEDA]
  py-[90px]
  md:pt-[70px]
  md:pb-[120px]
  px-4
  xsm:pb-[60px]
  pb-[30px]
  `}
`

export const DescriptionTitle = styled.h1`
  ${tw`
  py-3 
  text-4xl 
  md:text-5xl 
  font-semibold 
  leading-tight 
  md:leading-[72px]
  `}
`

export const DescriptionParagraph = styled.p`
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

export const ButtonWrapper = styled.div`
  ${tw`
  w-full 
  flex 
  justify-center 
  h-full 
 
  pb-5
  `}
`

export const ButtonContainer = styled.div`
  ${tw`
  w-full 
  md:max-w-[1000px] 
  h-full 
  flex 
  flex-col
  0.4xsm:flex-row 
  justify-center
  gap-8
  md:gap-[80px]
  2xl:gap-[110px]
  `}
`

export const HelpButton = styled.button`
  ${tw`
  0.4xsm:w-[140px]
  0.4xsm:h-[50px]
  px-2 
  py-2
  0.4xsm:py-1 
  rounded-[11.53px] 
  bg-brown-2
  text-brown-5 
  font-semibold 
  text-1.5lg 
  md:text-2xl  
  border-brown-5 
  border-2 
  transition 
  duration-300 
  ease-in-out 
  active:transform 
  active:translate-x-[3px] 
  active:translate-y-[3px] 
  active:shadow-none 
  shadow-[3px 3px 0px #1d1d1d ]`}
`

export const InnerSpan = styled.span`
  ${tw`absolute inset-0 transition duration-300 ease-in-out transform translate-x-2 translate-y-2  active:translate-x-0 active:translate-y-0 rounded-xl`}

  border-right-width : 2px;
  border-bottom-width: 2px;
  border-right: solid;
  border-bottom: solid;
  border-right-color: #1d1d1d;
  border-bottom-color: #1d1d1d;
`

export const RegisterButton = styled.button`
  ${tw`
  px-2 
  py-2 
  w-full
  0.4xsm:w-[140px]
  rounded-[11.53px] 
  bg-orange-1 
  text-brown-5 
  font-semibold 
  text-1.5lg 
  md:text-2xl  
  border-brown-5 
  border-2 
  transition 
  duration-300 
  ease-in-out 
  active:transform 
  active:translate-x-[3px] 
  active:translate-y-[3px] 
  active:shadow-none 
  shadow-[3px 3px 0px #1d1d1d ]`}
`

export const PaymentButton = styled.button`
  ${tw`
  px-2 
  py-2 
  w-full
  0.4xsm:w-[140px]
  rounded-[11.53px] 
  bg-orange-1 
  text-brown-5 
  font-semibold 
  text-1.5lg 
  md:text-2xl  
  border-brown-5 
  border-2 
  transition 
  duration-300 
  ease-in-out 
  active:transform 
  active:translate-x-[3px] 
  active:translate-y-[3px] 
  active:shadow-none 
  shadow-[3px 3px 0px #1d1d1d ]`}
`
