import tw from 'twin.macro'
import styled from 'styled-components'

export const CardContainer = styled.div`
  ${tw`bg-brown-5 h-[322px] w-[232px] md:h-[422px] md:w-[332px] flex flex-col items-center shadow-customShadow rounded-[16px] mr-3 mb-3`}
`

export const CardContainerImage = styled.div`
  background-image: url(${props => props.bgimage});
  ${tw`h-[160px] w-[160px] mt-[32px] md:h-[240px] md:w-[240px] md:mt-[32px] rounded-max`}
`

export const CardContainerText = styled.div`
  ${tw`flex flex-col mt-[32px]`}
`

export const CardImageRole = styled.div`
  ${tw`text-brown-2 font-poppins font-bold text-[24px] md:text-[32px] flex justify-center`}
`

export const CardImageName = styled.div`
  ${tw`text-brown-2 font-poppins font-bold text-[24px] md:text-[32px] flex justify-center`}
`
