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
    window.open(DescriptionContent.brochureLink, '_blank')
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
