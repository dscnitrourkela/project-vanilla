import { useEffect, useState } from 'react'
import useGetRegisteredEvents from '../eventsqueries/GetRegisteredEvents'
import useRegisteredTeamEvents from '../eventsqueries/GetRegisteredTeamEvents'
import {
  Button,
  ModalContainer,
  Section,
  TextContainer,
  TextHead
} from './registeredEventModal.styles'
import { Container } from './registerModal.style'
import PropTypes from 'prop-types'

export const RegisteredEventModal = ({ closeModal, isTeamEvent, eventId }) => {
  const [clickedCardArr, setClickedCardArr] = useState([])

  const {
    registeredEvents: eventsArr,
    loading,
    error
  } = useGetRegisteredEvents('668bd9deff0327a608b9b6ea', '668c3707b8cca2f5e9a5d6f8')
  const {
    registeredTeamEvents: registeredTeamEventsArr,
    loading: loading3,
    error: error3
  } = useRegisteredTeamEvents('668bd9deff0327a608b9b6ea', '668c3707b8cca2f5e9a5d6f8')

  useEffect(() => {
    const checkEvent = (eventId) => {
      const combinedArray = eventsArr.concat(registeredTeamEventsArr)
      console.log('carray', combinedArray)
      const event = combinedArray.find((event) => event.eventID === eventId)

      if (event) {
        setClickedCardArr([event])
      }
    }

    if (eventsArr.length > 0 || registeredTeamEventsArr.length > 0) {
      checkEvent(eventId)
    }
  }, [eventId, eventsArr, registeredTeamEventsArr])

  if (loading3 || loading) return <p>Loading...</p>
  if (error3 || error) return <p>Error: {error3 ? error3.message : error.message}</p>

  console.log(clickedCardArr)

  return (
    <Container>
      <Section>
        <Button onClick={closeModal}>Back</Button>
        <ModalContainer>
          (
          {isTeamEvent
            ? clickedCardArr.map((event) => (
                <div key={event.eventID}>
                  <TextContainer>
                    <TextHead>TeamName:</TextHead> {event.teamName}
                  </TextContainer>
                  {event.userIDs.map((userID, index) => (
                    <div key={index}>
                      <TextContainer>
                        <TextHead>{index === 0 ? 'Team Lead ID:' : `Member ${index}:`}</TextHead>
                        {userID}
                        <b>{event.users[index].name}</b>
                        {event.users[index].college}
                      </TextContainer>
                    </div>
                  ))}
                </div>
              ))
            : clickedCardArr.map((event) => (
                <TextContainer key={event.eventID}>
                  <TextHead>UserID:</TextHead> {event.userID}
                </TextContainer>
              ))}
          )
        </ModalContainer>
      </Section>
    </Container>
  )
}

RegisteredEventModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  isTeamEvent: PropTypes.bool.isRequired,
  eventId: PropTypes.string.isRequired
}
