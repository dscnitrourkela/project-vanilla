import tw from 'twin.macro'
import styled from 'styled-components'

export const Container = styled.main`
  ${tw`py-[20.18px]  h-auto sm:h-[650px] bg-brown-5 text-orange-2 rounded-[23.06px] font-Poppins relative`}
`
export const Section = styled.section`
  ${tw` flex flex-col justify-between items-center`}
`
export const ContentWrapper = styled.div`
  ${tw` sm:h-[500px]  px-5`}
`
export const CardHeader = styled.div`
  ${tw`flex flex-col items-center`}
`
export const CardImage = styled.img`
  ${tw` w-[100px] h-[100px] 0.5xxsm:h-[140px] 0.5xxsm:w-[140px] sm:h-[144.14px] sm:w-[144.14px]`}
`
export const CardTitle = styled.h3`
  ${tw` mt-5 font-semibold text-2xl 0.8xsm:text-3.5xl leading-none text-center`}
`
export const CardSubtitle = styled.h4`
  ${tw` font-medium max-sm:text-0.5xs text-base text-orange-1 leading-none mt-2 text-center`}
`

export const CardBody = styled.div`
  ${tw`h-[200px] overflow-clip px-2 0.5xsm:px-5 mt-5`}
`

export const CardList = styled.ul`
  ${tw`font-normal text-xs xxsm:text-1.5xs sm:text-1.1sm list-disc px-2 mb-5`}
`

export const CardModalBtn = styled.button`
  ${tw`text-orange-1 font-light text-sm mt-5 flex items-center justify-center active:opacity-80 duration-100 mb-2`}
`
export const SeemoreIcon = styled.img`
  ${tw`h-[15px] w-[15px] ml-1`}
`

export const CardFooter = styled.div`
  ${tw`items-center px-3 xxsm:px-5 w-full flex flex-row gap-5 justify-between py-5`}
`
export const Button = styled.button`
  ${tw`h-[50px] w-full
  px-2 py-1  mt-8 md:mt-12 rounded-[11.53px] bg-orange-1 text-brown-5 font-semibold text-1.5lg sm:text-2.2xl shadow-button border-brown-5 border-2 transition duration-300 ease-in-out active:transform active:translate-x-[3px] active:translate-y-[3px] active:shadow-none`}
`
export const ButtonRules = styled.button`
  ${tw`
    w-full
  h-[50px]
  mt-8
  md:mt-12
  px-2 
  py-1 
  rounded-[11.53px] 
  bg-brown-2
  text-brown-5 
  text-1.5lg sm:text-2.2xl
  font-semibold 
  border-brown-5 
  border-2 
  transition 
  duration-300 
  ease-in-out 
  active:transform 
  active:translate-x-[3px] 
  active:translate-y-[3px] 
  active:shadow-none 
  shadow-[3px 3px 0px #ffeeda ]
  `}
`
export const SeeMoreText = styled.span`
  ${tw`
  ml-3
  `}
`
