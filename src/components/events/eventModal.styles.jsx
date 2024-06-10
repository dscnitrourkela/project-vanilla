import tw from 'twin.macro'
import styled, { keyframes } from 'styled-components'

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`

export const Container = styled.main`
  ${tw`fixed inset-0 z-50 bg-brown-2 bg-opacity-75 backdrop-blur-md flex justify-center items-center  w-screen px-[1rem] md:px-[10px] `}
  animation: ${fadeInAnimation} 0.3s ease-out;
`

export const Section = styled.section`
  ${tw`bg-black-1 text-brown-2 relative max-w-[600px] w-full rounded-[23.06px] font-Poppins max-h-[95vh]`}
`

export const ContentWrapper = styled.div`
  ${tw`px-2 py-8 0.8xsm:px-10`}
`

export const CardHeader = styled.div`
  ${tw`flex flex-col items-center`}
`

export const CloseButton = styled.button`
  ${tw`absolute top-5 right-5 font-semibold text-[25px]`}
`

export const CardImage = styled.img`
  ${tw`h-[144px] w-[144px]`}
`

export const CardTitle = styled.h1`
  ${tw`mt-5 font-semibold text-[28px] 0.8xsm:text-[34.59px] leading-none text-center`}
`

export const CardSubtitle = styled.h3`
  ${tw`text-orange-1 font-medium text-[14px] 0.8xsm:text-[16px] leading-none mt-2 text-center`}
`

export const CardBody = styled.div`
  ${tw`my-5 h-[180px] 0.5xxsm:h-[250px] xxsm:h-[300px] overflow-y-scroll px-5`}
`

export const CardList = styled.ul`
  ${tw`font-normal text-[12.8px] 0.8xsm:text-[14.41px] list-disc px-2`}
`

export const ListItems = styled.li`
  ${tw`mt-2`}
`

export const CardFooter = styled.div`
  ${tw`flex flex-col gap-5 xxsm:flex-row w-full justify-between mt-2 px-5`}
`

export const RegisterButton = styled.button`
  ${tw` xxsm:w-[150px] w-full p-2 rounded-[11.53px] bg-orange-1 text-brown-5 font-semibold text-[19px] 1.5md:text-[25.95px] shadow-button border-brown-5 border-2 transition duration-300 ease-in-out active:transform active:translate-x-[3px] active:translate-y-[3px] active:shadow-none`}
`
export const ButtonRules = styled.button`
  ${tw`
  xxsm:w-[150px]
    w-full
  p-2
  rounded-[11.53px] 
  bg-brown-2
  text-brown-5 
  font-semibold 
  text-[19px] 
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
  shadow-[3px 3px 0px #ffeeda ]
  `}
`
