import tw from 'twin.macro'
import styled from 'styled-components'

export const Container = styled.main`
  ${tw`py-[20.18px] w-[250px] brk-15:w-[270px] brk-14:w-[300px] brk-13:w-[354.59px] h-[550px] brk-15:h-[600px] brk-13:h-[640px] bg-brown-5 text-orange-2 rounded-[23.06px] font-Poppins
`}
`

export const Section = styled.section`
  ${tw` flex flex-col justify-between items-center`}
`
export const ContentWrapper = styled.div`
  ${tw` brk-13:h-[500px] brk-13:w-[288.29px] px-5 brk-13:px-0`}
`
export const CardHeader = styled.div`
  ${tw`flex flex-col items-center`}
`
export const CardImage = styled.img`
  ${tw` h-[80px] w-[80px] brk-15:h-[100px] brk-15:w-[100px] brk-13:h-[144.14px] brk-13:w-[144.14px]`}
`
export const CardTitle = styled.h3`
  ${tw` mt-5 font-semibold text-[18px] brk-15:text-[25px] brk-13:text-[34.59px] `}
`
export const CardSubtitle = styled.h4`
  ${tw` brk-15:h-[34.59px] font-medium text-[18px] brk-13:text-[24.59px]`}
`

export const CardBody = styled.div`
  ${tw`h-[300px] px-2 brk-14:px-5 mt-5`}
`

export const CardList = styled.ul`
  ${tw`font-normal text-[12px] brk-15:text-[13px] brk-13:text-[14.41px] list-disc`}
`
export const CardFooter = styled.div`
  ${tw`flex justify-end w-full`}
`
export const Button = styled.button`
  ${tw`brk-13:h-[50.45px] brk-13:w-[129.73px] 
  px-2 py-1 rounded-[11.53px] bg-orange-1 text-brown-5 font-semibold text-[19px] brk-13:text-[25.95px] shadow-button border-brown-5 border-2 transition duration-300 ease-in-out active:transform active:translate-x-[3px] active:translate-y-[3px] active:shadow-none`}
`
