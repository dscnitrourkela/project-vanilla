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
  Section
} from './eventModal.styles'

import { XIcon } from '../../../config/content/events'
import PropTypes from 'prop-types'

EventModal.propTypes = {
  closeModal: PropTypes.func,
  event: PropTypes.shape({
    img: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    details: PropTypes.string
  })
}
function EventModal({ closeModal, event: { img, title, subtitle, details } }) {
  return (
    <Container>
      <Section>
        <CloseButton onClick={closeModal}>
          <img src={XIcon} alt="close" />
        </CloseButton>
        <ContentWrapper>
          <CardHeader>
            <CardImage src={img} alt={title} />
            <CardTitle>{title}</CardTitle>
            {subtitle && <CardSubtitle>{subtitle}</CardSubtitle>}
          </CardHeader>
          <CardBody>
            <CardList>
              {details.map((detail, index) => (
                <ListItems key={index}>{detail}</ListItems>
              ))}
            </CardList>
          </CardBody>
          <CardFooter>
            <RegisterButton>Register</RegisterButton>
          </CardFooter>
        </ContentWrapper>
      </Section>
    </Container>
  )
}

export default EventModal
