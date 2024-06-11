import tw from 'twin.macro'
import styled from 'styled-components'
import { apostrophe } from '../../config/content/registrationHelp/registrationHelp'

export const RegistrationHelpContainer = styled.div`
  ${tw`bg-brown-2 mb-14 0.7xsm:mb-14 flex flex-col justify-center items-center`}
`

export const RegisterCardContainer = styled.div`
  ${tw`bg-brown-2 h-[322px] w-[232px] 3md:h-[422px] 3md:w-[332px] flex flex-col items-center rounded-[16px] mr-3 mt-[20px]`}
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

export const RegistrationHelpContent = styled.div`
  ${tw`relative text-brown-4 font-Poppins font-normal 0.7xsm:text-xl 3md:text-2.3xl flex justify-center items-center text-center max-w-[1000px] pr-2 pl-2`}
`

export const RegistrationHelpContentText = styled.div`
  position: relative;
  &:before {
    content: '';
    position: absolute;
    width: 45px;
    height: 45px;
    background-image: url(${apostrophe[0].startApostrophe});
    background-size: cover;
    left: -50px;
    top: -10px;
  }
  &:after {
    content: '';
    position: absolute;
    width: 45px;
    height: 45px;
    background-image: url(${apostrophe[1].endApostrophe});
    background-size: cover;
    right: -50px;
    bottom: -10px;
  }

  @media (max-width: 1094px) {
    &:before,
    &:after {
      display: none;
    }
  }
`
