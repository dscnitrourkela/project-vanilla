import tw from 'twin.macro'
import styled from 'styled-components'

export const Container = styled.main`
  ${tw`px-8 py-10 flex flex-col-reverse brk-6:flex-row items-center gap-10 w-full justify-center`}
`
export const CardContainer1 = styled.section`
  ${tw`flex flex-col brk-7:flex-row brk-6:flex-col gap-10`}
`
export const CardContainer2 = styled.section`
  ${tw`flex flex-col items-center`}
`
export const Title = styled.h1`
  ${tw`text-[65px] mb-1 brk-9:text-[80px] brk-5:text-[100px] brk-3:text-[115px] brk-2:text-[128px] font-[700] text-brown-4 w-full ml-14`}
`
export const Image = styled.img`
  ${tw`hidden brk-6:block absolute -bottom-[14rem] left-[50%] transform -translate-x-1/2`}
`
export const SubSection = styled.section`
  ${tw`brk-6:relative`}
`
