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
import useGetRegisteredEvents from '../eventsqueries/GetRegisteredEvents'
import { useEffect, useState } from 'react'

EventCard.propTypes = {
  event: PropTypes.shape({
    poster: PropTypes.string,
    id: PropTypes.number,
    name: PropTypes.string,
    subHeading: PropTypes.string,
    description: PropTypes.array,
    rules: PropTypes.string
  }),
  handleSelectEvent: PropTypes.func,
  handleRegisterEvent: PropTypes.func
}

export default function EventCard({
  event: { poster, id, name, subHeading, description, rules },
  handleSelectEvent,
  handleRegisterEvent
}) {
  const [isRegistered, setIsRegistered] = useState(false)
  const { registeredevents: eventsArr, loading, error } = useGetRegisteredEvents('aiche')

  useEffect(() => {
    console.log('eventsarr', eventsArr)
    const checkIfRegistered = () => {
      // Check if eventsArr is defined and has elements
      if (eventsArr && eventsArr.length > 0) {
        // Use .find() to check if any event in eventsArr has the same id
        const isRegistered = eventsArr.find((event) => event.eventID === id)
        if (isRegistered) {
          setIsRegistered(true)
        } else {
          setIsRegistered(false)
        }
      }
    }

    checkIfRegistered()
  }, [eventsArr, id])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

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
            <CardImage src={poster} alt={name} />
            <CardTitle>{name}</CardTitle>
            {subHeading !== '' && <CardSubtitle>{subHeading}</CardSubtitle>}
          </CardHeader>
          <CardBody>
            <CardList>
              <div>{genDetails(description[0], 150)}</div>
            </CardList>
            <CardModalBtn onClick={() => handleSelectEvent(id)}>
              <SeeMoreText>See More</SeeMoreText>
              <SeemoreIcon src={seeMoreIcon} />
            </CardModalBtn>
          </CardBody>
          <CardFooter>
            <ButtonRules onClick={redirectToRules}>Rulebook</ButtonRules>
            {!isRegistered ? (
              <Button onClick={() => handleRegisterEvent(id)}>Register</Button>
            ) : (
              <Button>Registered</Button>
            )}
          </CardFooter>
        </ContentWrapper>
      </Section>
    </Container>
  )
}
