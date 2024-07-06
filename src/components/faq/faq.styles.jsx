import tw from 'twin.macro'
import styled from 'styled-components'
import { IoIosArrowDown } from 'react-icons/io'

export const FaqContainer = styled.div`
  ${tw`font-Poppins bg-brown-2 mb-20 3md:mb-32 px-3`}
`

export const AccordionItem = styled.div`
  ${({ isActive }) =>
    !isActive
      ? tw`w-full border-2 border-solid border-brown-5 rounded-xl mb-8 transition-all duration-300 shadow-customShadow2 `
      : tw`w-full border-2 border-solid border-brown-5 rounded-xl mb-8 transition-all duration-300 shadow-customShadow bg-brown-1 `}
`
export const TitleContainer = styled.div`
  ${tw`flex items-center text-xl justify-between cursor-pointer font-bold text-brown-5 px-2 py-3`}
`

export const FaqHeading = styled.div`
  ${tw`font-Poppins mb-10 text-brown-4 text-4.5xl font-bold 3md:text-8.5xl 2.5md:text-7.5xl 0.7xsm:text-6xl `}
`

export const Icon = styled(IoIosArrowDown)`
  ${({ isActive }) =>
    isActive
      ? tw`text-[1.5rem] transition-all duration-300 rotate-[180deg]`
      : tw`text-[1.5rem] transition-all duration-300`}
`

export const ContentContainer = styled.div`
  ${({ isActive }) =>
    isActive
      ? tw`overflow-hidden transition-all duration-300 px-2 py-4`
      : tw`overflow-hidden transition-all duration-300 px-2 py-0 h-0`}
`
