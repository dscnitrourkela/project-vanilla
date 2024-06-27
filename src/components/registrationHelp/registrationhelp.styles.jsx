import tw from 'twin.macro'
import styled from 'styled-components'
import { apostrophe } from '../../config/index'

export const RegistrationHelpContainer = styled.div`
  ${tw`bg-brown-2 mb-14 0.7xsm:mb-14 flex flex-col justify-center items-center`}
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
    background-image: url(${apostrophe.startApostrophe});
    background-size: cover;
    left: -50px;
    top: -10px;
  }
  &:after {
    content: '';
    position: absolute;
    width: 45px;
    height: 45px;
    background-image: url(${apostrophe.endApostrophe});
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
