import tw from 'twin.macro'
import styled from 'styled-components'

export const Container = styled.main`
  ${tw`h-[878px] bg-orange-2 text-orange-2 py-[50px] 1.5md:px-[42px] px-[14px]`}
`
export const Section = styled.section`
  ${tw`flex w-full justify-center 2.3xl:justify-between items-center gap-[25px] 1.5lg:gap-[53px]`}
`
export const Arrow = styled.img`
  ${tw` sm:w-[79px] sm:h-[79px] 
      cursor-pointer hidden sm:block`}
`
export const EventWrapper = styled.div`
  ${tw`overflow-hidden h-[640px] w-full flex items-center justify-center`}
`
export const EventsPillar = styled.div`
  ${tw`hidden w-[180.95px] h-[640px] rounded-[28.52px] bg-brown-4 shadow-events 2.3xl:flex justify-center items-center`}
`
export const EventsTitle = styled.h3`
  ${tw`w-[300px] h-[128px] transform -rotate-90 font-semibold text-[85.57px]`}
`
export const EventsTitleMobile = styled.h3`
  ${tw`font-semibold text-brown-4 text-[75px] 2.3xl:hidden ml-[40px]`}
`
export const EventsBgPillar = styled.div`
  ${tw`hidden 2.5xl:block w-[80px] h-[640px] rounded-[28.52px] bg-brown-5`}
`
