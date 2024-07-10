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

import { useState } from 'react'
import { seeMoreIcon } from '../../config'
import { RegisteredEventModal } from './RegisteredEventModal'
import { createPortal } from 'react-dom'

EventCard.propTypes = {
  hasRegistered: PropTypes.bool,
  event: PropTypes.shape({
    poster: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    subHeading: PropTypes.string,
    description: PropTypes.string,
    rules: PropTypes.string,
    isTeamEvent: PropTypes.bool
  }),
  handleSelectEvent: PropTypes.func,
  handleRegisterEvent: PropTypes.func
}

export default function EventCard({
  combinedArray,
  hasRegistered,
  event: { poster, id, name, subHeading, description, rules, isTeamEvent },
  handleSelectEvent,
  handleRegisterEvent
}) {
  const [openModal, setOpenModal] = useState(false)

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

  const handleRegisteredEvents = () => {
    setOpenModal(true)
  }

  const overlay = document.getElementById('overlay')

  return (
    <>
      {createPortal(
        openModal && (
          <RegisteredEventModal
            closeModal={() => setOpenModal(false)}
            isTeamEvent={isTeamEvent}
            eventId={id}
          />
        ),
        overlay
      )}
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
                {(() => {
                  try {
                    const parsedDescription = JSON.parse(description)
                    if (Array.isArray(parsedDescription) && parsedDescription.length > 0) {
                      const firstDesc = genDetails(parsedDescription[0], 150)
                      return <div key={0}>{firstDesc}</div>
                    }
                  } catch (error) {
                    return (
                      <div>
                        {error.toString()}, {typeof description}
                      </div>
                    )
                  }
                  return null
                })()}
              </CardList>
              <CardModalBtn onClick={() => handleSelectEvent(id)}>
                <SeeMoreText>See More</SeeMoreText>
                <SeemoreIcon src={seeMoreIcon} />
              </CardModalBtn>
            </CardBody>
            <CardFooter>
              <ButtonRules onClick={redirectToRules}>Rulebook</ButtonRules>
              {!hasRegistered ? (
                <Button onClick={() => handleRegisterEvent(id)}>Register</Button>
              ) : (
                <Button onClick={handleRegisteredEvents}>Registered</Button>
              )}
            </CardFooter>
          </ContentWrapper>
        </Section>
      </Container>
    </>
  )
}
