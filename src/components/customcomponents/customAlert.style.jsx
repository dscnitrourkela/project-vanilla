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
  ${tw`fixed inset-0 z-50 bg-black-1/[0.4] bg-opacity-45 backdrop-blur-md flex justify-center items-center h-screen  w-screen px-[1rem] md:px-[10px] `}
  animation: ${fadeInAnimation} 0.3s ease-out border-2 border-black-1;
`

export const Section = styled.section`
  ${tw` flex justify-center items-center bg-brown-2 border-4 border-black-1 relative w-[400px]  rounded-[23.06px] font-Poppins h-[200px] `}
`

export const Button = styled.button`
  ${tw`h-[30px]  w-[40%] ml-[25%]  mt-10  rounded-[11.53px] bg-orange-1 text-brown-5 font-semibold text-[15px] shadow-button border-brown-5 border-2 transition duration-300 ease-in-out active:transform active:translate-x-[3px] active:translate-y-[3px] active:shadow-none`}
`

export const Mssg = styled.button`
  ${tw`text-[15px] 0.8xsm:text-[20px]`}
`
