import {
  HelpButton,
  RegisterButton,
  ButtonContainer,
  DescriptionContainer,
  DescriptionParagraph,
  DescriptionTitle
} from './Description.styles'
import { DescriptionContent } from '../../../config/index'
import { ButtonWrapper } from './Description.styles'

const Description = () => {
  function redirect() {
    window.open('https://drive.google.com/file/d/1wEdNjtT4zmo7eePrLRpzAUch1eeKEXDB/view?usp=drivesdk', '_blank')
  }

  return (
    <DescriptionContainer id="home">
      <DescriptionTitle>{DescriptionContent.title}</DescriptionTitle>
      <DescriptionParagraph>{DescriptionContent.content}</DescriptionParagraph>
      <ButtonWrapper>
        <ButtonContainer>
          <HelpButton onClick={redirect}>{DescriptionContent.HeroButton}</HelpButton>
          {/* <RegisterButton>{DescriptionContent.RegisterButton}</RegisterButton> */}
          <RegisterButton>Starting Soon....</RegisterButton>
        </ButtonContainer>
      </ButtonWrapper>
    </DescriptionContainer>
  )
}

export default Description
