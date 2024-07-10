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
  ButtonRules,
  ProgressBar
} from './eventModal.styles'

import { useState } from 'react'
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
  const [scrollPosition, setScrollPosition] = useState(0)

  function handleScroll(e) {
    const element = e.target
    const scrollTop = element.scrollTop
    const scrollHeight = element.scrollHeight - element.clientHeight
    const scrollPercentage = (scrollTop / scrollHeight) * 100
    setScrollPosition(scrollPercentage)
  }

  function redirectToRules() {
    window.open(rules, '_blank')
  }

  return (
    <Container>
      <Section onScroll={handleScroll}>
        <ProgressBar width={scrollPosition} />
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
