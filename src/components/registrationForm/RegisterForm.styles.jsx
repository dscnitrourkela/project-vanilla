// RegisterForm.styles.js
import tw from 'twin.macro'
import styled from 'styled-components'

export const Container = styled.div`
  ${tw`grid md:grid-cols-2 grid-cols-1 font-Poppins`}
`

export const BackgroundImage = styled.div`
  ${tw`bg-cover bg-center h-full w-full z-0
`}
  background-image: url(${(props) => props.src});
`
export const LogoSection = styled.section`
  ${tw`md:flex flex-col justify-center items-center h-full w-full relative hidden `}
`
export const LogoContainer = styled.div`
  ${tw`flex flex-col items-center justify-center absolute z-10`}
`
export const Date = styled.h1`
  ${tw`text-brown-2 2.7md:text-4xl font-semibold text-3xl`}
`
export const FormContainer = styled.form`
  ${tw`flex flex-col justify-center items-center h-full w-full gap-[24px] md:gap-4 py-5 md:py-10 px-4 md:px-14 `}
`

export const Button = styled.button`
  ${tw`
  mt-5
  px-5
  py-2 
  rounded-[12px] 
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
export const MobileHeader = styled.div`
  ${tw`flex flex-col justify-between items-center w-full px-7 my-10  md:hidden`}
`
export const MobileDate = styled.h1`
  ${tw`text-brown-4 text-[23px] font-[600]`}
`
