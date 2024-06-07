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
  ${tw`fixed inset-0 z-50 bg-brown-2 bg-opacity-75 backdrop-blur-md flex justify-center items-center  brk-19:p-[2rem] p-[10px]`}
  animation: ${fadeInAnimation} 0.3s ease-out; /* Apply the animation */
`

export const Section = styled.section`
  ${tw`bg-black-1 text-brown-2 relative max-w-[600px] w-full rounded-[23.06px] font-Poppins`}
`

export const ContentWrapper = styled.div`
  ${tw`px-2 py-5 brk-19:p-10`}
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
  ${tw`mt-5 font-semibold text-[28px] brk-19:text-[34.59px] leading-none text-center`}
`

export const CardSubtitle = styled.h3`
  ${tw`text-orange-1 font-medium text-[14px] brk-19:text-[16px] leading-none mt-2 text-center`}
`

export const CardBody = styled.div`
  ${tw`mt-5 h-[350px] overflow-y-scroll px-5`}
`

export const CardList = styled.ul`
  ${tw`font-normal text-[12.8px] brk-19:text-[14.41px] list-disc px-2`}
`

export const ListItems = styled.li`
  ${tw`mt-2`}
`

export const CardFooter = styled.div`
  ${tw`flex w-full justify-end mt-2 px-5 pb-2`}
`

export const RegisterButton = styled.button`
  ${tw`h-[50.45px] w-[129.73px] px-2 py-1 rounded-[11.53px] bg-orange-1 text-brown-5 font-semibold text-[19px] sm:text-[25.95px] shadow-button border-brown-5 border-2 transition duration-300 ease-in-out active:transform active:translate-x-[3px] active:translate-y-[3px] active:shadow-none`}
  @media (min-width: 640px) {
    ${tw`text-[25.95px]`}
  }
`
