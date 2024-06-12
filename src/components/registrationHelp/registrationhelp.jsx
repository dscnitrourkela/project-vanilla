import {
  RegistrationHelpContainer,
  RegistrationHelpContent,
  RegistrationHelpContentText
} from './registrationhelp.styles'

import { apostrophe } from '../../config/content/registrationHelp/registrationHelp'

export const RegistrationHelp = () => {
  return (
    <RegistrationHelpContainer>
      <RegistrationHelpContent>
        <RegistrationHelpContentText>{apostrophe.quote}</RegistrationHelpContentText>
      </RegistrationHelpContent>
    </RegistrationHelpContainer>
  )
}
