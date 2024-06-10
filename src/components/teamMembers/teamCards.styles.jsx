import tw from 'twin.macro'
import styled from 'styled-components'

export const CardContainer = styled.div`
  ${tw`bg-brown-5 h-[322px] w-[232px] 3md:h-[422px] 3md:w-[332px] flex flex-col items-center shadow-customShadow rounded-[16px] mr-3 mb-3 mt-[20px]`}
`

export const CardContainerImage = styled.div`
  background-image: url(${(props) => props.bgimage});
  ${tw`h-[160px] w-[160px] mt-[32px] 3md:h-[240px] 3md:w-[240px] 3md:mt-[32px] rounded-max aspect-auto bg-cover bg-center`}
`

export const CardContainerText = styled.div`
  ${tw`flex flex-col mt-[32px]`}
`

export const CardImageRole = styled.div`
  ${tw`text-brown-2 font-Poppins font-bold text-[15px] 3md:text-[20px] flex justify-center opacity-80`}
`

export const CardImageName = styled.div`
  ${tw`text-brown-2 font-Poppins font-bold text-[16px] 3md:text-[26px] flex justify-center mb-[5px]`}
`
