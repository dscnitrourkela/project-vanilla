import tw, { css } from 'twin.macro'
import styled from 'styled-components'

export const Container = styled.div(({ bgColor }) => [
  tw`rounded-[4.4rem] grid place-items-center py-16 px-10 brk-6:w-[90%]`,
  css`
    background-color: ${bgColor};
  `
])

export const Section = styled.div`
  ${tw`text-white-1 flex items-center justify-center flex-col`}
`
export const Title = styled.h1(({ isSuperTitle }) => [
  isSuperTitle
    ? tw`brk-8:text-[96px] brk-7:text-[96px] text-[60px] mt-20`
    : tw`brk-8:text-5xl text-[30px] mt-[3.5rem]`,
  tw`font-[600] leading-[50px] brk-8:leading-[72px] text-center`
])

export const Paragraph = styled.p(({ isSuperTitle }) => [
  tw`w-full font-[400] leading-[27px] brk-8:text-[16.5px] text-[15px] brk-7:text-[18px]  brk-8:tracking-tight`,
  isSuperTitle ? tw`mt-20 mb-10` : tw`my-10`
])
