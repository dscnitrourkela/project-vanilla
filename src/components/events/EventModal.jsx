import {
  CardFooter,
  CloseButton,
  CardHeader,
  CardBody,
  Container,
  ContentWrapper,
  RegisterButton,
  CardImage,
  CardTitle,
  CardSubtitle,
  CardList,
  ListItems,
  Section,
  ButtonRules
} from './eventModal.styles'

import { XIcon } from '../../config/index'
import PropTypes from 'prop-types'

EventModal.propTypes = {
  closeModal: PropTypes.func,
  event: PropTypes.shape({
    poster: PropTypes.string,
    name: PropTypes.string,
    subHeading: PropTypes.string,
    description: PropTypes.string,
    rules: PropTypes.string
  })
}
function EventModal({ closeModal, event: { poster, name, subHeading, description, rules } }) {
  function redirectToRules() {
    window.open(rules, '_blank')
  }
  console.log(event)
  return (
    <Container>
      <Section>
        <CloseButton onClick={closeModal}>
          <img src={XIcon} alt="close" />
        </CloseButton>
        <ContentWrapper>
          <CardHeader>
            <CardImage src={poster} alt={name} />
            <CardTitle>{name}</CardTitle>
            {subHeading && <CardSubtitle>{subHeading}</CardSubtitle>}
          </CardHeader>
          <CardBody>
            <CardList>
              {JSON.parse(description).map((detail, index) => (
                <ListItems key={index}>{detail}</ListItems>
              ))}
            </CardList>
          </CardBody>
          <CardFooter>
            <ButtonRules onClick={redirectToRules}>Rules</ButtonRules>
            <RegisterButton>Register</RegisterButton>
          </CardFooter>
        </ContentWrapper>
      </Section>
    </Container>
  )
}

export default EventModal
