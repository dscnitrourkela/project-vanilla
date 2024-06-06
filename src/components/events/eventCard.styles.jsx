import tw from 'twin.macro'
import styled from 'styled-components'

export const Container = styled.main`
  ${tw`container  py-[20.18px] w-[354.59px] h-[640px] bg-brown-5 text-orange-2 rounded-[23.06px] font-Poppins
`}
`

export const Section = styled.section`
  ${tw`h-[593.59px] flex flex-col justify-between items-center`}
`
export const ContentWrapper = styled.div`
  ${tw`h-[500px] w-[288.29px]`}
`
export const CardHeader = styled.div`
  ${tw`flex flex-col items-center`}
`
export const CardImage = styled.img`
  ${tw`h-[144.14px] w-[144.14px]`}
`
export const CardTitle = styled.h3`
  ${tw` font-semibold text-[34.59px] `}
`
export const CardSubtitle = styled.h4`
  ${tw`h-[34.59px] font-medium text-[24.59px]`}
`

export const CardBody = styled.div`
  ${tw`h-[280px] overflow-scroll py-4`}
`

export const CardList = styled.ul`
  ${tw`font-normal text-[14.41px] list-disc`}
`
export const CardFooter = styled.div`
  ${tw`flex justify-end w-full`}
`
export const Button = styled.button`
  ${tw`h-[50.45px] w-[129.73px] rounded-[11.53px] bg-orange-1 text-brown-5 font-semibold text-[25.95px] shadow-button border-brown-5 border-2 transition duration-300 ease-in-out active:transform active:translate-x-[3px] active:translate-y-[3px] active:shadow-none`}
`
