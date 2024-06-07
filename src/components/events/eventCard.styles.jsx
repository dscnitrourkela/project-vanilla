import tw from 'twin.macro'
import styled from 'styled-components'

export const Container = styled.main`
  ${tw`py-[20.18px] brk-18:w-[400px] h-[550px] brk-15:h-[600px] brk-13:h-[640px] bg-brown-5 text-orange-2 rounded-[23.06px] font-Poppins relative
`}
`
export const Section = styled.section`
  ${tw` flex flex-col justify-between items-center`}
`
export const ContentWrapper = styled.div`
  ${tw` brk-13:h-[500px]  px-5`}
`
export const CardHeader = styled.div`
  ${tw`flex flex-col items-center`}
`
export const CardImage = styled.img`
  ${tw` h-[140px] w-[140px] brk-13:h-[144.14px] brk-13:w-[144.14px]`}
`
export const CardTitle = styled.h3`
  ${tw` mt-5 font-semibold text-[34.59px] leading-none text-center`}
`
export const CardSubtitle = styled.h4`
  ${tw` font-medium text-[16px] text-orange-1 leading-none mt-2 text-center`}
`

export const CardBody = styled.div`
  ${tw`h-[200px] overflow-clip px-2 brk-14:px-5 mt-5`}
`

export const CardList = styled.ul`
  ${tw`font-normal text-[12px] brk-15:text-[13px] brk-13:text-[14.41px] list-disc px-2`}
`

export const CardModalBtn = styled.button`
  ${tw`text-orange-1 font-light text-[14px] mt-5 flex items-center justify-center active:opacity-80 duration-100`}
`
export const SeemoreIcon = styled.img`
  ${tw`h-[15px] w-[15px] ml-1`}
`

export const CardFooter = styled.div`
  ${tw`absolute bottom-14 w-[85%] flex justify-end mt-5`}
`
export const Button = styled.button`
  ${tw`brk-13:h-[50.45px] brk-13:w-[129.73px] 
  px-2 py-1 rounded-[11.53px] bg-orange-1 text-brown-5 font-semibold text-[19px] brk-13:text-[25.95px] shadow-button border-brown-5 border-2 transition duration-300 ease-in-out active:transform active:translate-x-[3px] active:translate-y-[3px] active:shadow-none`}
`
