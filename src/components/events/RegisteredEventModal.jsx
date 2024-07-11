import { edpEvents, edpLink } from '../../config/content/events/events'
import {
  Button,
  ModalContainer,
  Section,
  TextContainer,
  TextContent,
  TextHead,
  TextHead1,
  TextContainer2,
  EventName
} from './registeredEventModal.styles'
import { Container } from './registerModal.style'
import PropTypes from 'prop-types'

export const RegisteredEventModal = ({ closeModal, isTeamEvent, registerdEvent, eventName }) => {
  const doesContainEDP = edpEvents.includes(eventName)
  return (
    <Container>
      <Section>
        <Button onClick={closeModal}>Back</Button>
        <ModalContainer>
          <EventName>{eventName}</EventName>
          {isTeamEvent ? (
            <div>
              <TextContainer2>
                <TextHead1>Team Name:&nbsp;</TextHead1>
                {registerdEvent.teamName}
              </TextContainer2>
              {registerdEvent.users.map((user, index) => (
                <div key={index}>
                  <TextContainer>
                    <TextHead>{index === 0 ? 'Team Lead:' : `Member ${index + 1}:`}</TextHead>
                    {user.name + ' - ' + user.college}
                  </TextContainer>
                </div>
              ))}

              {doesContainEDP && (
                <TextContainer>
                  <TextHead>Submit your EDPs here: </TextHead>
                  <a href={edpLink} target="_blank" rel="noreferrer">
                    Link
                  </a>
                </TextContainer>
              )}
            </div>
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
