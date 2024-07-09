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
import { useContext } from 'react'
import { AuthContext } from '../../../context/AuthContext'
import { Link } from 'react-router-dom'

const Description = () => {
  const { userInfo } = useContext(AuthContext)

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
          {!userInfo.name && (
            <Link to="/register">
              <RegisterButton>{DescriptionContent.RegisterButton}</RegisterButton>
            </Link>
          )}
        </ButtonContainer>
      </ButtonWrapper>
    </DescriptionContainer>
  )
}

export default Description
