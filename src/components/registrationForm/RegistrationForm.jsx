// Registration.js
import {
  logo2,
  logo1,
  bg,
  date,
  formInputs,
  mobileLogo
} from '../../config/content/registrationForm/Registration'
import {
  Container,
  BackgroundImage,
  LogoSection,
  LogoContainer,
  Date,
  FormContainer,
  Button,
  MobileHeader,
  MobileDate
} from './RegisterForm.styles'
import InputField from './InputField'
import FileInput from './FileInput'

export default function RegistrationForm() {
  function handleSubmit(e) {
    e.preventDefault()
    console.log('Form Submitted')
  }

  return (
    <Container>
      <LogoSection>
        <BackgroundImage src={bg} alt="background image" />
        <LogoContainer>
          <img src={logo1} alt="logo" />
          <img src={logo2} alt="logo2" />
          <Date>{date}</Date>
        </LogoContainer>
      </LogoSection>

      <MobileHeader>
        <img src={mobileLogo} alt="logo" />
        <img src={logo2} alt="logo2" />
        <MobileDate>{date}</MobileDate>
      </MobileHeader>

      <FormContainer action="">
        {formInputs.map((input) =>
          input.type === 'file' ? (
            <FileInput key={input.id} input={input} />
          ) : (
            <InputField key={input.id} input={input} />
          )
        )}
        <Button onClick={(e) => handleSubmit(e)}>Register</Button>
      </FormContainer>
    </Container>
  )
}
