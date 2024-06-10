import tw, { css } from 'twin.macro'
import styled from 'styled-components'

export const Container = styled.div(({ bgColor }) => [
  tw`rounded-[4.4rem] grid place-items-center py-16 px-6 xsm:px-10 `,
  css`
    background-color: ${bgColor};
  `
])

export const Section = styled.div`
  ${tw`text-white-1 flex items-center justify-center flex-col`}
`
export const Title = styled.h1(({ isSuperTitle }) => [
  isSuperTitle
    ? tw` 1.5md:text-[96px] xsm:text-[70px] text-[40px] xxsm:text-[60px] xxsm:mt-10 xsm:mt-20`
    : tw` xsm:text-5xl text-[30px]  xsm:mt-[3.5rem]`,
  tw`font-[600] leading-[50px] xsm:leading-[72px] text-center`
])

export const Paragraph = styled.p(({ isSuperTitle }) => [
  tw`w-full font-[400] leading-[27px] xsm:text-[16.5px] text-[13.5px] xxsm:text-[15px] 1.3lg:text-[18px]  xsm:tracking-tight`,
  isSuperTitle ? tw`mt-10 xxsm:mt-16 xsm:mt-20 xsm:mb-10` : tw`xxsm:my-10 mt-10`
])

export const AboutCarouselContainer = styled.div`
  ${tw`w-96 flex justify-center`}
`
