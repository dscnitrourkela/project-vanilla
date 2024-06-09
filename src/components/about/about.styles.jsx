import tw from 'twin.macro'
import styled from 'styled-components'

export const Container = styled.main`
  ${tw`px-3 xsm:px-8 py-10 flex flex-col-reverse 1.9lg:flex-row items-center gap-10 w-full justify-center font-Poppins`}
`
export const CardContainer1 = styled.section`
  ${tw`flex flex-col 1.3lg:flex-row 1.9lg:flex-col gap-10`}
`
export const CardContainer2 = styled.section`
  ${tw`flex flex-col items-center`}
`
export const Title = styled.h1`
  ${tw`text-[40px] xxsm:text-[50px] xsm:text-[65px] mb-1 md:text-[80px] 1.5lg:text-[100px] 2.3xl:text-[115px] 2.5xl:text-[128px] font-[700] text-brown-4 w-full ml-14`}
`
export const Image = styled.img`
  ${tw`hidden 1.9lg:block absolute -bottom-[14rem] left-[50%] transform -translate-x-1/2`}
`
export const SubSection = styled.section`
  ${tw` 1.9lg:relative`}
`
