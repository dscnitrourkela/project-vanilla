import tw from 'twin.macro'
import styled from 'styled-components'

export const Container = styled.main`
  ${tw`px-3 xsm:px-8 py-10 font-Poppins gap-10  1.9lg:grid 1.9lg:grid-cols-2 grid-cols-1 flex flex-col-reverse`}
`
export const CardContainer = styled.section`
  ${tw`flex flex-col items-start gap-5  h-full w-full`}
`

export const Title = styled.h1`
  ${tw`text-[40px] xxsm:text-[50px] xsm:text-[65px]  md:text-[80px] 1.5lg:text-[100px] 2.3xl:text-[115px] 2.5xl:text-[115px] font-[700] text-brown-4 text-left w-full leading-[50px] xsm:leading-[100px] mb-5`}
`
export const AboutCarouselContainer = styled.div`
  ${tw`bg-[#402E32] flex justify-center rounded-[4.4rem] w-full py-10 px-6 xsm:px-10`}
`
