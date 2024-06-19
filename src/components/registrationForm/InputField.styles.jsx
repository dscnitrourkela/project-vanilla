import tw from 'twin.macro'
import styled from 'styled-components'
export const Input = styled.input`
  ${tw`w-full h-10 px-2 bg-brown-2 text-brown-4 focus:outline-none font-normal`}
  border-radius: 8px;
  border: 1.6px solid black;
  line-height: 1.2;
  letter-spacing: 0.1em;
  position: relative;
  z-index: 1;
`
export const OuterBorder = styled.div`
  position: relative;
  width: 100%;

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
export const InputContainer = styled.div`
  ${tw`flex flex-col justify-start w-full gap-1`}
`
export const Label = styled.label`
  ${tw`text-brown-4 font-[600] text-lg`}
  letter-spacing: 1.036px;
`
export const ExtrasContainer = styled.div`
  ${tw`flex items-center gap-2 mt-1`}
`
export const Info = styled.img`
  ${tw`w-5 h-5`}
`
export const InfoBtn = styled.button`
  ${tw`w-5 h-5 top-3 right-2 absolute z-10`}
`
export const ErrorMessage = styled.p`
  ${tw`text-red-500 text-sm mt-2 font-[500]`}
`
