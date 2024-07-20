import tw from 'twin.macro'
import styled from 'styled-components'

// Styled Components
export const Section = styled.section`
  ${tw`bg-[#402E32] border-4 border-black-1 relative max-w-full w-full md:max-w-[600px] rounded-[23.06px] font-Poppins max-h-[100vh] h-auto overflow-y-auto p-4 md:p-6`}
`

export const ModalContainer = styled.div`
  ${tw`flex flex-col gap-6 md:gap-10 justify-center text-4xl md:text-[64px] font-bold`}
`

export const EventName = styled.h1`
  ${tw`text-2xl md:text-[40px] mt-10 text-[#FF8911] font-semibold w-full text-center`}
`

export const TextContainer = styled.div`
  ${tw`text-lg md:text-[20px] mb-4 text-[#FF8911] font-semibold flex gap-2 capitalize`}
`

export const TextContainer2 = styled(TextContainer)`
  ${tw`text-xl md:text-[26px] underline`}
`

export const TextHead = styled.div`
  ${tw`text-lg md:text-[20px] text-[#FFEEDA] font-normal flex gap-2`}
`

export const TextHead1 = styled(TextHead)`
  ${tw`text-xl md:text-[26px] underline`}
`

export const TextContent = styled.h1`
  ${tw`text-lg md:text-[20px] text-[#FFEEDA] font-semibold w-full text-center`}
`

export const Button = styled.button`
  ${tw`p-1 w-full md:w-[20%] mt-4 md:mt-6 mx-auto md:ml-6 md:mr-6 rounded-[11.53px] bg-orange-1 text-brown-5 font-semibold text-sm md:text-base shadow-button border-brown-5 border-2 transition duration-300 ease-in-out active:transform active:translate-x-[3px] active:translate-y-[3px] active:shadow-none`}
`

export const Select = styled.select`
  ${tw`w-[80%] my-5 ml-[10%] h-[40px] px-2 bg-brown-2 text-brown-4 text-base focus:outline-none font-normal flex items-center `}
  border-radius: 8px;
  border: 1.6px solid black;
  line-height: 1.2;
  letter-spacing: 0.1em;
  position: relative;
  z-index: 1;
`
