import styled from 'styled-components'
import tw from 'twin.macro'

export const GridContainer = styled.div`
  display: grid;
  gap: 1rem;
`

export const Grid1 = styled.div`
  ${tw`grid grid-cols-1 gap-4`}
`

export const Grid2 = styled.div`
  ${tw`ml-[1.5%] mr-[1.5%] xxsm:ml-[5%] xxsm:mr-[5%] grid grid-cols-1 xxsm:grid-cols-2 `}
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
  ${tw`text-lg  font-Poppins ml-[10%] font-semibold `}
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
  ${tw`w-[80%] ml-[10%] h-[30px] px-2 bg-brown-2 text-brown-4 focus:outline-none font-normal flex items-center `}
  border-radius: 8px;
  border: 1.6px solid black;
  line-height: 1.2;
  letter-spacing: 0.1em;
  position: relative;
  z-index: 1;
`
export const Input2 = styled.input`
  ${tw`w-[80%] ml-[10%] h-[30px] text-[11px] px-2 bg-brown-2 text-brown-4 focus:outline-none font-normal flex items-center `}
  border-radius: 8px;
  border: 1.6px solid black;
  line-height: 1.2;
  letter-spacing: 0.1em;
  position: relative;
  z-index: 1;
`
