import tw from 'twin.macro'
import styled from 'styled-components'

export const Container = styled.main`
  ${tw`py-[20.18px] h-[550px] xxsm:h-[650px] bg-brown-5 rounded-[23.06px] font-Poppins relative overflow-hidden border-[2px] border-blue-1`}
  box-shadow: inset -1px -1px 2px #007DFC;
`
export const GradientContainer = styled.main`
  ${tw`py-[20.18px] w-[100%] h-[100%] bg-[linear-gradient(to bottom, #007DFC -45%, #0097fc10 20%)] rounded-[23.06px] font-Poppins absolute top-0 left-0 z-10`}

  &::before {
    ${tw` opacity-50 `}
  }
`

export const Ellipse = styled.main`
  ${tw`absolute w-[100%] h-[116.7px] top-[-56.81px] left-[8.58px] bg-[linear-gradient(to bottom, #00A1FC 0%, #00A1FC 100%)] opacity-10 rounded-[50%] blur-lg`}
`

export const Section = styled.section`
  ${tw` flex flex-col justify-between items-center mt-[110px] sm:mt-0`}
`
export const ContentWrapper = styled.div`
  ${tw` sm:h-[500px]  px-5 flex justify-center items-center`}
`
export const CardHeader = styled.div`
  ${tw`flex flex-col items-center`}
`
export const CardImage = styled.img`
  ${tw` h-[80px] w-[80px] xxsm:h-[100px] xxsm:w-[100px] sm:h-[144.14px] sm:w-[144.14px]`}
`
export const CardTitle = styled.h3`
  ${tw` mt-5 font-semibold text-3.5xl leading-none text-center text-blue-1`}
`
export const CardSubtitle = styled.h5`
  ${tw` font-[400] text-sm text-[#ffffff7c] leading-none mt-3 text-center`}
`
export const CardHeaderText = styled.h4`
  ${tw` mt-[40px] font-semibold text-2xl leading-none text-center text-orange-1`}
`
