import PropTypes from 'prop-types'
import { Button2, Container, Section } from './registerModal.style'
import TeamEventModal from './TeamEventModal'
import { IndiEventModal } from './IndividualEventModal'
import { eventsWithPdfs } from '../../config/content/events/events'

export const RegisterModal = ({
  event: { id, name, isTeamEvent, maxTeamSize },
  closeModal,
  mongoId
}) => {
  const hasPdfUpload = eventsWithPdfs.includes(name)
  return (
    <Container>
      <Section>
        <Button2 onClick={closeModal}>Back</Button2>
        {isTeamEvent ? (
          <TeamEventModal
            EventId={id}
            EventTitle={name}
            mongoId={mongoId}
            maxTeamSize={maxTeamSize}
            hasPdfUpload={hasPdfUpload}
          />
        ) : (
          <IndiEventModal
            EventId={id}
            EventTitle={name}
            mongoId={mongoId}
            maxTeamSize={maxTeamSize}
            hasPdfUpload={hasPdfUpload}
          />
        )}
      </Section>
    </Container>
  )
}

RegisterModal.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isTeamEvent: PropTypes.bool,
    maxTeamSize: PropTypes.number
  }),
  closeModal: PropTypes.func,
  mongoId: PropTypes.string
}
