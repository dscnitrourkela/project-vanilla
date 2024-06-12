import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.div`
  ${tw`flex flex-col items-start w-full gap-2`}
`
export const HiddenInput = styled.input`
  ${tw`hidden`}
`
export const ImageButton = styled.img`
  ${tw`w-24 h-24 cursor-pointer `}
`
export const FileName = styled.span`
  ${tw`w-full text-sm text-[#848484] px-2 font-normal`}
  line-height: 1.2;
  letter-spacing: 0.1em;
`

export const Label = styled.label`
  ${tw`text-brown-4 font-[600] text-lg`}
  letter-spacing: 1.036px;
`

export const InputContainer = styled.div`
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

export const Input = styled.div`
  ${tw`w-full h-10 px-2 bg-brown-2 text-brown-4 focus:outline-none font-normal flex items-center cursor-pointer`}
  border-radius: 8px;
  border: 1.6px solid black;
  line-height: 1.2;
  letter-spacing: 0.1em;
  position: relative;
  z-index: 1;
`
