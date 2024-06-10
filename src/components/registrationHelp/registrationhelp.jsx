import {
  RegistrationHelpContainer,
  RegisterCardContainer,
  RegisterCardContainerImage,
  RegisterCardImageRole,
  RegisterCardImageName,
  RegisterCardContainerText,
  RegistrationHelpContent,
  RegistrationHelpContentText,
} from './registrationhelp.styles'

export const RegistrationHelp = () => {
  return (
    <RegistrationHelpContainer>
      <RegisterCardContainer>
        <RegisterCardContainerImage bgimage="https://res.cloudinary.com/dhv234qct/image/upload/v1717692333/AICHE_SRC/team_members/SRC%20Chair.jpg"></RegisterCardContainerImage>
        <RegisterCardContainerText>
          <RegisterCardImageName>Aiswarya R. Behera</RegisterCardImageName>
          <RegisterCardImageRole>SRC Chair</RegisterCardImageRole>
        </RegisterCardContainerText>
      </RegisterCardContainer>
      <RegistrationHelpContent>
        <RegistrationHelpContentText>
          Attention students! Registrations for Student Regional Conference 2023 are LIVE! Click on
          the REGISTER link given below . For the steps on how to register click on HELP link . Join
          us for knowledge, in
        </RegistrationHelpContentText>
      </RegistrationHelpContent>
    </RegistrationHelpContainer>
  )
}
