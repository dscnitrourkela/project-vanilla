import tw from 'twin.macro'
import styled from 'styled-components'

export const Container = styled.main`
  ${tw`px-3 xsm:px-8 py-10 flex flex-col-reverse 1.9lg:flex-row items-start gap-10 w-full justify-center font-Poppins`}
`
export const CardContainer1 = styled.section`
  ${tw`flex flex-col 1.9lg:flex-col gap-10 1.9lg:w-1/2`}
`
export const CardContainer2 = styled.section`
  ${tw`flex flex-col 1.9lg:flex-col items-start gap-5 h-full w-full 1.9lg:w-1/2`}
`
export const Title = styled.h1`
  ${tw`text-[40px] xxsm:text-[50px] xsm:text-[65px]  md:text-[80px] 1.5lg:text-[100px] 2.3xl:text-[115px] 2.5xl:text-[115px] font-[700] text-brown-4 text-left w-full`}
`
export const Image = styled.img`
  ${tw`hidden 1.9lg:block absolute -bottom-[14rem] left-[50%] transform -translate-x-1/2`}
`
export const SubSection = styled.section`
  ${tw` 1.9lg:relative`}
`
export const AboutCarouselContainer = styled.div`
  ${tw`bg-[#402E32] flex justify-center rounded-[4.4rem] w-full py-10 px-6 xsm:px-10`}
`
