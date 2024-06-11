import tw from 'twin.macro'
import styled from 'styled-components'

export const Container = styled.main`
  ${tw`bg-orange-2 text-orange-2 mt-5  1.5md:px-[42px] px-[14px] mb-10`}
`
export const Section = styled.section`
  ${tw`flex w-full justify-center 2.3xl:justify-between items-center gap-[25px] 1.5lg:gap-[53px]`}
`
export const Arrow = styled.img`
  ${tw` sm:w-[79px] sm:h-[79px] 
      cursor-pointer hidden sm:block`}
`
export const EventWrapper = styled.div`
  ${tw`overflow-hidden md:h-[650px] flex items-center justify-center`}
`
export const EventsPillar = styled.div`
  ${tw`hidden w-[180.95px] h-[640px] rounded-[28.52px] bg-brown-4 shadow-events 2.3xl:flex justify-center items-center`}
`
export const EventsTitle = styled.h3`
  ${tw`w-[300px] h-[128px] transform -rotate-90 font-semibold text-7.3xl`}
`
export const EventsTitleMobile = styled.h3`
  ${tw`text-[40px] xxsm:text-5.5xl xsm:text-6.5xl mb-1 md:text-7.2xl 1.5lg:text-8.5xl 2.3xl:text-8.55xl 2.5xl:text-9xl font-[700] text-brown-4 ml-5 2xl:text-10xl block`}
`
export const EventsBgPillar = styled.div`
  ${tw`hidden 2.5xl:block w-[80px] h-[640px] rounded-[28.52px] bg-brown-5`}
`
