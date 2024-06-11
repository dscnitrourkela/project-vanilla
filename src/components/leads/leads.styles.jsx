import tw from 'twin.macro'
import styled from 'styled-components'

export const LeadSectionContainer = styled.div`
  ${tw`bg-brown-2 flex flex-col items-center justify-around 3md:mb-4 mb-10`}
`

export const LeadSectionContainer2 = styled.div`
  ${tw`bg-brown-2 flex md:flex-row items-center justify-around flex-col xl:gap-36`}
`

export const LeadsCard = styled.div`
  ${tw`bg-brown-2 h-[322px] w-[232px] 3md:h-[422px] 3md:w-[332px] flex flex-col items-center rounded-[16px] mb-3`}
`

export const LeadCardImage = styled.div`
  background-image: url(${(props) => props.bgimage});
  ${tw`h-[160px] w-[160px] mt-[32px] 3md:h-[240px] 3md:w-[240px] rounded-max aspect-auto bg-cover bg-center`}
`

export const LeadCardContainerText = styled.div`
  ${tw`flex flex-col mt-[32px]`}
`

export const LeadCardRole = styled.div`
  ${tw`text-brown-4 font-Poppins font-bold text-1.5sm 3md:text-xl flex justify-center mb-1`}
`

export const LeadCardOrganization = styled.div`
  ${tw`text-brown-4 font-Poppins font-bold text-1.5sm 3md:text-lg flex justify-center text-center xxsm:text-xs`}
`

export const LeadCardName = styled.div`
  ${tw`text-brown-5 font-Poppins font-bold text-base 3md:text-2.3xl flex justify-center`}
`
