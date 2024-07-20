import PropTypes from 'prop-types'
import { Button2, Container, Section } from './registerModal.style'
import TeamEventModal from './TeamEventModal'
import { IndiEventModal } from './IndividualEventModal'
import { eventsWithPdfs } from '../../config/content/events/events'
import { useState } from 'react'
import { ProgressBar } from './eventModal.styles'

export const RegisterModal = ({
  event: { id, name, isTeamEvent, maxTeamSize },
  closeModal,
  mongoId,
  userSrcId,
  grades
}) => {
  const [scrollPosition, setScrollPosition] = useState(0)

  function handleScroll(e) {
    const element = e.target
    const scrollTop = element.scrollTop
    const scrollHeight = element.scrollHeight - element.clientHeight
    const scrollPercentage = (scrollTop / scrollHeight) * 100
    setScrollPosition(scrollPercentage)
  }
  const hasPdfUpload = eventsWithPdfs.includes(name)
  return (
    <Container>
      <Section>
        <ProgressBar width={scrollPosition} />
        <Button2 onClick={closeModal}>Back</Button2>
        {isTeamEvent ? (
          <TeamEventModal
            handleScroll={handleScroll}
            EventId={id}
            EventTitle={name}
            mongoId={mongoId}
            maxTeamSize={maxTeamSize}
            hasPdfUpload={hasPdfUpload}
            userSrcId={userSrcId}
            grades={grades}
          />
        ) : (
          <IndiEventModal
            handleScroll={handleScroll}
            EventId={id}
            EventTitle={name}
            mongoId={mongoId}
            maxTeamSize={maxTeamSize}
            hasPdfUpload={hasPdfUpload}
            userSrcId={userSrcId}
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
  mongoId: PropTypes.string,
  userSrcId: PropTypes.string,
  grades: PropTypes.array
}
