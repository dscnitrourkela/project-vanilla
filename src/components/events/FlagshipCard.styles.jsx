import tw from 'twin.macro'
import styled from 'styled-components'

export const Container = styled.main`
  ${tw`py-[20.18px] brk-18:w-[400px] h-[550px] brk-15:h-[600px] brk-13:h-[640px] bg-brown-5 rounded-[23.06px] font-Poppins relative overflow-hidden border-[2px] border-green-1
`}
  box-shadow: inset -1px -1px 2px #cafc00;
`
export const GradientContainer = styled.main`
  ${tw`py-[20.18px] w-[100%] h-[100%] bg-[linear-gradient(to bottom, #cafc00 -45%, #cafc0010 20%)] rounded-[23.06px] font-Poppins absolute top-0 left-0 z-10`}

  &::before {
    ${tw` opacity-50 `}
  }
`

export const Ellipse = styled.main`
  ${tw`absolute w-[100%] h-[116.7px] top-[-56.81px] left-[8.58px] bg-[linear-gradient(to bottom, #cafc0046 0%, #cafc001e 100%)] opacity-10 rounded-[50%]`}
`

export const Section = styled.section`
  ${tw` flex flex-col justify-between items-center mt-[110px] brk-13:mt-0`}
`
export const ContentWrapper = styled.div`
  ${tw` brk-13:h-[500px]  px-5 flex justify-center items-center`}
`
export const CardHeader = styled.div`
  ${tw`flex flex-col items-center`}
`
export const CardImage = styled.img`
  ${tw` h-[80px] w-[80px] brk-15:h-[100px] brk-15:w-[100px] brk-13:h-[144.14px] brk-13:w-[144.14px]`}
`
export const CardTitle = styled.h3`
  ${tw` mt-5 font-semibold text-[34.59px] leading-none text-center text-green-2`}
`
export const CardSubtitle = styled.h5`
  ${tw` font-[400] text-[14px] text-[#ffffff7c] leading-none mt-3 text-center`}
`
export const CardHeaderText = styled.h4`
  ${tw` mt-[40px] font-semibold text-[24px] leading-none text-center text-orange-1`}
`
