import { useState } from 'react'
import { edpEvents } from '../../config/content/events/events'
import {
  Button,
  ModalContainer,
  Section,
  TextContainer,
  TextContent,
  EventName
} from './registeredEventModal.styles'
import { Container } from './registerModal.style'
import PropTypes from 'prop-types'
import RegisteredTeam from './RegisteredTeam'
import { useEffect } from 'react'

export const RegisteredEventModal = ({ closeModal, isTeamEvent, registerdEvent, eventName }) => {
  const doesContainEDP = edpEvents.includes(eventName)
  const isK12 = eventName.includes('K-12')
  const [currentEvent, setCurrEvent] = useState(isK12 ? registerdEvent[0] : registerdEvent)
  const [grade, setGrade] = useState(currentEvent?.grade)
  useEffect(() => {
    if (isK12) {
      const findEvent = registerdEvent.find((event) => event.grade === grade)
      setCurrEvent(findEvent)
    }
    // eslint-disable-next-line
  }, [grade])

  return (
    <Container>
      <Section>
        <Button onClick={closeModal}>Back</Button>
        <ModalContainer>
          <EventName>{eventName}</EventName>
          {isTeamEvent ? (
            <RegisteredTeam
              currentEvent={currentEvent}
              doesContainEDP={doesContainEDP}
              setGrade={setGrade}
              isK12={isK12}
              grade={grade}
              allEvents={registerdEvent}
            />
          ) : (
            <TextContainer>
              <TextContent>Congratulations, you have registered!</TextContent>
            </TextContainer>
          )}
        </ModalContainer>
      </Section>
    </Container>
  )
}

RegisteredEventModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  isTeamEvent: PropTypes.bool.isRequired,
  registerdEvent: PropTypes.any,
  eventName: PropTypes.string
}
