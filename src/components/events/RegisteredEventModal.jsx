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

export const RegisteredEventModal = ({
  closeModal,
  isTeamEvent,
  registerdEvent,
  eventName,
  openEventRegistration
}) => {
  const doesContainEDP = edpEvents.includes(eventName)
  const isK12 = eventName.includes('K-12')
  const [currentEvent, setCurrEvent] = useState(isK12 ? registerdEvent[0] : registerdEvent)
  const [grade, setGrade] = useState(currentEvent?.grade)
  useEffect(() => {
    if (isK12) {
      const findEvent = registerdEvent.find((event) => event.grade === grade)
      const registerdGrades = registerdEvent.map((event) => event.grade)
      const notRegisterdGrades = ['0', '1', '2', '3'].filter(
        (grade) => !registerdGrades.includes(grade)
      )
      const options = ['Kindergarten - Grade 2', 'Grade 3-5', 'Grade 6-8', 'Grade 9-12']
      const optionsResult = notRegisterdGrades.map((gradeIndex) => {
        return { value: gradeIndex, label: options[Number(gradeIndex)] }
      })
      if (findEvent) {
        setCurrEvent(findEvent)
      } else {
        openEventRegistration(optionsResult)
      }
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
  eventName: PropTypes.string,
  openEventRegistration: PropTypes.func
}
