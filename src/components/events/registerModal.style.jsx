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
  ${tw`fixed inset-0 z-50 bg-black-1/[0.4] bg-opacity-75 backdrop-blur-md flex justify-center items-center h-screen  w-screen px-[1rem] md:px-[10px] `}
  animation: ${fadeInAnimation} 0.3s ease-out border-2 border-black-1 overflow-y-auto;
`

export const Section = styled.section`
  ${tw`bg-brown-2 border-4 border-black-1 relative max-w-[600px] w-full rounded-[23.06px] font-Poppins h-auto `}
`
export const Text = styled.div`
  ${tw`text-[34px] 0.8xsm:text-[37px]
        0.9xsm:text-[40px] text-center w-full  mt-7 font-bold  font-Poppins`}
`

export const TextSub = styled.div`
  ${tw`text-[15px] 0.8xsm:text-[18px]
        0.9xsm:text-[20px] text-center w-full text-orange-1 font-light  font-Poppins`}
`

export const TextHead = styled.div`
  ${tw`text-lg mt-[5%] font-Poppins ml-[10%] font-semibold mb-3`}
`

export const InputContainer1 = styled.div`
  ${tw`relative w-full`}
  &::after {
    content: '';
    position: absolute;
    top: 4px;
    left: 4px;
    right: -4px;
    bottom: -4px;
    border: 1.6px solid black;
    border-radius: 8px;
    z-index: -1;
  }
`

export const Input = styled.input`
  ${tw`w-[80%] ml-[10%] h-[40px] px-2 bg-brown-2 text-brown-4 focus:outline-none font-normal flex items-center `}
  border-radius: 8px;
  border: 1.6px solid black;
  line-height: 1.2;
  letter-spacing: 0.1em;
  position: relative;
  z-index: 1;
`

export const Button1 = styled.button`
  ${tw`  px-2 
    mt-16
    mb-12
    w-[80%]
    ml-[10%]
  py-2
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
export const Button2 = styled.button`
  ${tw`p-1
   
   mt-6 ml-6 mr-6
    w-[20%]
    
  
  rounded-[11.53px] 
  bg-orange-1 
  text-brown-5 
  font-semibold 
  text-sm 
  md:text-base 
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
