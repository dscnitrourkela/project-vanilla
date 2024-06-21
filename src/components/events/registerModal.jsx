import PropTypes from 'prop-types'
import { Button2, Container, Section } from './registerModal.style'
import TeamEventModal from './TeamEventModal'
import { IndiEventModal } from './IndiEventModal'

export const RegisterModal = ({ event: { EventId, EventTitle, isTeamEvent }, closeModal }) => {
  return (
    <Container>
      <Section>
        <Button2 onClick={closeModal}>Back</Button2>
        {isTeamEvent ? (
          <TeamEventModal EventId={EventId} EventTitle={EventTitle} />
        ) : (
          <IndiEventModal EventId={EventId} EventTitle={EventTitle} />
        )}

        {/*                     <div>
                        <Text>Registration successful!</Text>
                        <Button1 onClick={closeModal}>Close</Button1>
                    </div> */}
        {/*   )} */}
      </Section>
    </Container>
  )
}

RegisterModal.propTypes = {
  event: PropTypes.shape({
    EventId: PropTypes.number.isRequired,
    EventTitle: PropTypes.string.isRequired,
    isTeamEvent: PropTypes.bool
  }),
  closeModal: PropTypes.func
}
