import {
  RegistrationHelpContainer,
  RegisterCardContainer,
  RegisterCardContainerImage,
  RegisterCardImageRole,
  RegisterCardImageName,
  RegisterCardContainerText,
  RegistrationHelpContent,
  RegistrationHelpContentText
} from './registrationhelp.styles'

import { apostrophe } from '../../config/content/registrationHelp/registrationHelp'

export const RegistrationHelp = () => {
  return (
    <RegistrationHelpContainer>
      <RegisterCardContainer>
        <RegisterCardContainerImage></RegisterCardContainerImage>
        <RegisterCardContainerText>
          <RegisterCardImageName>{apostrophe[4].quoteImageName}</RegisterCardImageName>
          <RegisterCardImageRole>{apostrophe[5].quoteImageDesignation}</RegisterCardImageRole>
        </RegisterCardContainerText>
      </RegisterCardContainer>
      <RegistrationHelpContent>
        <RegistrationHelpContentText>{apostrophe[3].quote}</RegistrationHelpContentText>
      </RegistrationHelpContent>
    </RegistrationHelpContainer>
  )
}
