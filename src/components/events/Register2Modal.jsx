import PropTypes from 'prop-types'
import { Button2, Container, Section } from './registerModal.style'
import TeamEventModal from './TeamEventModal'
import { IndiEventModal } from './IndividualEventModal'

export const RegisterModal = ({ event: { id, name, isTeamEvent }, closeModal, mongoId }) => {
  return (
    <Container>
      <Section>
        <Button2 onClick={closeModal}>Back</Button2>
        {isTeamEvent ? (
          <TeamEventModal EventId={id} EventTitle={name} mongoId={mongoId} />
        ) : (
          <IndiEventModal EventId={id} EventTitle={name} mongoId={mongoId} />
        )}
      </Section>
    </Container>
  )
}

RegisterModal.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isTeamEvent: PropTypes.bool
  }),
  closeModal: PropTypes.func,
  mongoId: PropTypes.string
}
