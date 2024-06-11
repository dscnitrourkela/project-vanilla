import styled from 'styled-components'
import tw from 'twin.macro'

export const RegisterCardContainer = styled.div`
  ${tw`bg-brown-2 h-[322px] w-[232px] 3md:h-[422px] 3md:w-[332px] flex flex-col items-center rounded-[16px] mx-auto mt-[15px] mb-6`}
`

export const RegisterCardContainerImage = styled.div`
  background-image: url('https://res.cloudinary.com/dhv234qct/image/upload/v1718101986/AICHE_SRC/team_members/quote.jpg');
  ${tw`h-[160px] w-[160px] mt-[32px] 3md:h-[245px] 3md:w-[245px] 3md:mt-[32px] rounded-max aspect-auto bg-cover bg-center`}
`

export const RegisterCardContainerText = styled.div`
  ${tw`flex flex-col mt-[24px]`}
`

export const RegisterCardImageRole = styled.div`
  ${tw`text-brown-4 font-Poppins font-semibold text-1.5sm 3md:text-1.5xl flex justify-center`}
`
export const RegisterCardImageName = styled.div`
  ${tw`text-brown-5 font-Poppins font-bold text-base 3md:text-2.5xl flex justify-center mb-[4px]`}
`
