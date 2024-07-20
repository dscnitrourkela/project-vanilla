import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.div`
  ${tw`max-h-[85vh] overflow-scroll`}
  scrollbar-width: none;
`

export const GridContainer = styled.div`
  display: grid;
  gap: 10px;
`

export const Grid1 = styled.div`
  ${tw`grid grid-cols-1 gap-4`}
`

export const Grid2 = styled.div`
  ${tw`ml-[1.5%] mr-[1.5%] gap-2 xxsm:ml-[5%] xxsm:mr-[5%] grid grid-cols-1 xxsm:grid-cols-2 h-[150px] overflow-y-auto`}
`

export const Text = styled.div`
  ${tw`text-[34px] 0.8xsm:text-[37px] 0.9xsm:text-[40px] text-center w-full mt-7 font-bold font-Poppins`}
`

export const RegisterCompleteCardTextContainer = styled.div`
  ${tw`m-[100px]`}
`
export const RegisterCompleteCardText = styled.div`
  ${tw`text-[24px] 0.8xsm:text-[27px] 0.9xsm:text-[30px] text-center w-full font-bold font-Poppins`}
`

export const TextSub = styled.div`
  ${tw`text-[15px] 0.8xsm:text-[18px] 0.9xsm:text-[20px] text-center w-full text-orange-1 font-light font-Poppins`}
`

export const TextHead = styled.div`
  ${tw`text-lg font-Poppins ml-[10%] font-normal`}
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
  ${tw`w-[80%] ml-[10%] h-[40px] px-2 bg-brown-2 text-brown-4 focus:outline-none font-normal flex items-center`}
  border-radius: 8px;
  border: 1.6px solid black;
  line-height: 1.2;
  letter-spacing: 0.1em;
  position: relative;
  z-index: 1;
`

export const Select = styled.select`
  ${tw`w-[80%] ml-[10%] h-[40px] px-2 bg-brown-2 text-brown-4 focus:outline-none font-normal flex items-center`}
  border-radius: 8px;
  border: 1.6px solid black;
  line-height: 1.2;
  letter-spacing: 0.1em;
  position: relative;
  z-index: 1;
`

export const Input2 = styled.input`
  ${tw`w-[80%] ml-[10%] h-[35px] text-[11px] px-2 bg-brown-2 text-brown-4 focus:outline-none font-normal flex items-center`}
  border-radius: 8px;
  border: 1.6px solid black;
  line-height: 1.2;
  letter-spacing: 0.1em;
  position: relative;
  z-index: 1;
`

export const AddMemberButton = styled.button`
  ${tw`  text-[10px]   mt-4 mb-4 shadow-button transition duration-300 ease-in-out active:transform active:translate-x-[3px] active:translate-y-[3px] active:shadow-none`}
`

export const RemoveButton = styled.button`
  ${tw`ml-2  mt-4 mb-4 shadow-button transition duration-300 ease-in-out active:transform active:translate-x-[3px] active:translate-y-[3px] active:shadow-none`}
`

export const IconButtonContainer = styled.div`
  ${tw`flex justify-center`}
`

export const Button1 = styled.button`
  ${tw`  px-2 
    mt-10
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
