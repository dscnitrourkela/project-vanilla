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
    img: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    details: PropTypes.array,
    rules: PropTypes.string
  })
}
function EventModal({ closeModal, event: { img, title, subtitle, details, rules } }) {
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
            <ButtonRules onClick={redirectToRules}>Rules</ButtonRules>
            <RegisterButton>Register</RegisterButton>
          </CardFooter>
        </ContentWrapper>
      </Section>
    </Container>
  )
}

export default EventModal
