import tw from 'twin.macro'
import styled from 'styled-components'

export const Container = styled.main`
  ${tw`h-[878px] bg-orange-2 text-orange-2 py-[108px] brk-12:px-[42px] px-[14px]`}
`
export const Section = styled.section`
  ${tw`flex justify-center brk-14:justify-between items-center gap-[25px] brk-10:gap-[53px]`}
`
export const Arrow = styled.img`
  ${tw`brk-13:w-[79px] brk-13:h-[79px] 
    brk-14:h-[60px] brk-14:w-[60px] h-[45px] w-[45px] cursor-pointer hidden brk-14:block`}
`

export const EventWrapper = styled.div`
  ${tw`overflow-hidden h-[640px] flex gap-10 justify-between`}
`

// export const EventWrapper = styled.div`
//   ${tw` brk-17:w-[265px] brk-16:w-[300px] brk-13:w-[354px] brk-10:w-[750px] gap-10 brk-10:gap-0 overflow-hidden h-[640px] flex  justify-between`}
// `

export const EventsPillar = styled.div`
  ${tw`hidden w-[180.95px] h-[640px] rounded-[28.52px] bg-brown-4 shadow-events brk-3:flex justify-center items-center`}
`
export const EventsTitle = styled.h3`
  ${tw`w-[300px] h-[128px] transform -rotate-90 font-semibold text-[85.57px]`}
`
export const EventsBgPillar = styled.div`
  ${tw`hidden brk-2:block w-[49.92px] h-[640px] rounded-[28.52px] bg-brown-5`}
`
