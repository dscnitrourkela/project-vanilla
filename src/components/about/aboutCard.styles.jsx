import tw, { css } from 'twin.macro'
import styled from 'styled-components'

export const Container = styled.div(({ bgColor }) => [
  tw`rounded-[4.4rem] grid place-items-center py-16 px-6 xsm:px-10 flex-grow h-full`,
  css`
    background-color: ${bgColor};
  `
])

export const Section = styled.div`
  ${tw`text-white-1 flex items-center justify-center flex-col`}
`
export const Title = styled.h1(({ isSuperTitle }) => [
  isSuperTitle
    ? tw`1.5md:text-8xl xsm:text-7xl text-4.5xl xxsm:text-6xl xxsm:mt-10 xsm:mt-20`
    : tw`xsm:text-5xl text-3xl xsm:mt-[3.5rem]`,
  tw`font-[600] leading-[50px] xsm:leading-[72px] text-center`
])

export const Paragraph = styled.p(({ isSuperTitle }) => [
  tw`w-full font-[400] leading-[27px] xsm:text-base text-sm xxsm:text-1.5sm 1.3lg:text-lg xsm:tracking-tight text-center`,
  isSuperTitle ? tw`mt-10 xxsm:mt-16 xsm:mt-20 xsm:mb-10` : tw`xxsm:my-10 mt-10`
])
