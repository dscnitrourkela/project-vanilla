import {
  HelpButton,
  RegisterButton,
  ButtonContainer,
  DescriptionContainer,
  DescriptionParagraph,
  DescriptionTitle
} from './Description.styles'
import { DescriptionContent } from '../../../config/content/navData/Nav_Hero'
import { ButtonWrapper } from './Description.styles'

const Description = () => {
  return (
    <DescriptionContainer id="registerRefId">
      <DescriptionTitle>{DescriptionContent.title}</DescriptionTitle>
      <DescriptionParagraph>{DescriptionContent.content}</DescriptionParagraph>
      <ButtonWrapper>
        <ButtonContainer>
          <HelpButton>{DescriptionContent.HeroButton}</HelpButton>
          <RegisterButton>{DescriptionContent.RegisterButton}</RegisterButton>
        </ButtonContainer>
      </ButtonWrapper>
    </DescriptionContainer>
  )
}

export default Description
