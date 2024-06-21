import PropTypes from 'prop-types'
import {
  Button,
  CardBody,
  CardHeader,
  CardImage,
  CardTitle,
  CardSubtitle,
  CardList,
  Container,
  ContentWrapper,
  Section,
  CardFooter,
  CardModalBtn,
  SeemoreIcon,
  ButtonRules,
  SeeMoreText
} from './eventCard.styles'
import { seeMoreIcon } from '../../config/content/events/events'

EventCard.propTypes = {
  event: PropTypes.shape({
    img: PropTypes.string,
    EventId: PropTypes.number,
    EventTitle: PropTypes.string,
    subtitle: PropTypes.string,
    details: PropTypes.array,
    rules: PropTypes.string
  }),
  handleSelectEvent: PropTypes.func,
  handleRegisterEvent: PropTypes.func,
  handleTeamRegisterEvent: PropTypes.func
}

export default function EventCard({
  event: { img, EventId, EventTitle, subtitle, details, rules },
  handleSelectEvent,
  handleRegisterEvent
}) {
  function genDetails(str, length) {
    str = str.trim()
    if (str.length > length) {
      return str.slice(0, length - 3) + '...'
    } else {
      return str
    }
  }

  function redirectToRules() {
    window.open(rules, '_blank')
  }

  return (
    <Container>
      <Section>
        <ContentWrapper>
          <CardHeader>
            <CardImage src={img} alt={EventTitle} />
            <CardTitle>{EventTitle}</CardTitle>
            {subtitle !== '' && <CardSubtitle>{subtitle}</CardSubtitle>}
          </CardHeader>
          <CardBody>
            <CardList>
              <div>{genDetails(details[0], 150)}</div>
            </CardList>
            <CardModalBtn onClick={() => handleSelectEvent(EventId)}>
              <SeeMoreText>See More</SeeMoreText>
              <SeemoreIcon src={seeMoreIcon} />
            </CardModalBtn>
          </CardBody>
          <CardFooter>
            <ButtonRules onClick={redirectToRules}>Rulebook</ButtonRules>
            <Button onClick={() => handleRegisterEvent(EventId)}>Register</Button>
          </CardFooter>
        </ContentWrapper>
      </Section>
    </Container>
  )
}
