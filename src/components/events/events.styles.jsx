import tw from 'twin.macro'
import styled from 'styled-components'

export const Container = styled.main`
  ${tw`h-[878px] bg-orange-2 text-orange-2 py-[108px] px-[42px]`}
`
export const Section = styled.section`
  ${tw`flex justify-between items-center gap-[53px]`}
`
export const Arrow = styled.img`
  ${tw`w-[79px] h-[88px] cursor-pointer`}
`

export const EventWrapper = styled.div`
  ${tw` w-[380px] brk-10:w-[850px] overflow-hidden h-[640px] flex gap-[28px] justify-between`}
`
export const EventsPillar = styled.div`
  ${tw`hidden w-[180.95px] h-[640px] rounded-[28.52px] bg-brown-4 shadow-events brk-3:flex justify-center items-center`}
`
export const EventsTitle = styled.h3`
  ${tw`w-[300px] h-[128px] transform -rotate-90 font-semibold text-[85.57px]`}
`
export const EventsBgPillar = styled.div`
  ${tw`hidden brk-2:block w-[49.92px] h-[640px] rounded-[28.52px] bg-brown-5`}
`
