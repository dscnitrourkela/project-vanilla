import tw from 'twin.macro'
import styled from 'styled-components'

export const Section = styled.section`
  ${tw`  bg-[#402E32] border-4 border-black-1 relative max-w-[600px] w-full rounded-[23.06px] font-Poppins max-h-[100vh] h-auto overflow-y-auto `}
`

export const ModalContainer = styled.div`
  ${tw`p-6 flex flex-col gap-10 justify-center text-[64px] font-bold `}
`

export const TextContainer = styled.div`
  ${tw`text-[20px] mb-4 text-[#FF8911] font-semibold flex  gap-2 capitalize`}
`
export const TextContainer2 = styled(TextContainer)`
  ${tw`text-[26px] underline`}
`
export const TextHead = styled.div`
  ${tw`text-[20px] text-[#FFEEDA] font-normal flex gap-2 `}
`
export const TextHead1 = styled(TextHead)`
  ${tw`text-[26px] underline`}
`

export const TextContent = styled.h1`
  ${tw`text-[20px] text-[#FFEEDA] font-semibold w-full text-center`}
`

export const Button = styled.button`
  ${tw`p-1 w-[20%]
  
   
   mt-6 ml-6 mr-6  rounded-[11.53px] bg-orange-1 text-brown-5 font-semibold text-sm 
  md:text-base  shadow-button border-brown-5 border-2 transition duration-300 ease-in-out active:transform active:translate-x-[3px] active:translate-y-[3px] active:shadow-none`}
`
