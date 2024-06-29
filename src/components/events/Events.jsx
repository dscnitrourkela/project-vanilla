import { useState, useRef } from 'react'
import { Container, Arrow, Section, EventsTitleMobile } from './events.styles'
import { events, nextArrowIcon, prevArrowIcon } from '../../config/content/events/events'
import EventModal from './EventModal'
import EventsWrapper from './EventsWrapper'
import { createPortal } from 'react-dom'
import { RegisterModal } from './Register2Modal'
import PropTypes from 'prop-types'
import useGetEventsByOrgid from '../eventsqueries/getventbyorgid'

export default function Events() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false)
  const [isFlagshipEventModalOpen, setIsFlagshipEventModalOpen] = useState(false)
  const [event, setEvent] = useState(null)
  const swiperRef = useRef(null)

  const { events: eventsArr, loading, error } = useGetEventsByOrgid('aiche')

  console.log(eventsArr)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  function handleRegisterModalOpen(EventId) {
    setIsRegisterModalOpen(true)
    const event = eventsArr.find((event) => event.id === EventId)
    if (event) {
      setEvent(event)
    }
  }

  function handleFlagshipCardModalOpen(EventId) {
    setIsFlagshipEventModalOpen(true)
    const event = eventsArr.find((event) => event.id === EventId)
    if (event) {
      setEvent(event)
    }
  }

  function handleModalOpen(EventId) {
    setIsModalOpen(true)
    const event = events.find((event) => event.id === EventId)
    if (event) {
      setEvent(event)
    }
  }

  function handleModalClose() {
    setIsModalOpen(false)
  }

  function handleFlagshipModalClose() {
    setIsFlagshipEventModalOpen(false)
  }

  function handleRegisterModalClose() {
    setIsRegisterModalOpen(false)
  }

  function handlePrev() {
    if (swiperRef.current) {
      swiperRef.current.slidePrev()
    }
  }

  function handleNext() {
    if (swiperRef.current) {
      swiperRef.current.slideNext()
    }
  }

  const overlay = document.getElementById('overlay')

  return (
    <div id="events">
      {createPortal(
        isModalOpen && <EventModal closeModal={handleModalClose} event={event} />,
        overlay
      )}

      {createPortal(
        isRegisterModalOpen && (
          <RegisterModal closeModal={handleRegisterModalClose} event={event} />
        ),
        overlay
      )}

      {createPortal(
        isFlagshipEventModalOpen && (
          <RegisterModal closeModal={handleFlagshipModalClose} event={event} />
        ),
        overlay
      )}

      <EventsTitleMobile>Events</EventsTitleMobile>
      <Container>
        <Section>
          <Arrow src={prevArrowIcon} alt="Previous" onClick={handlePrev} />
          <EventsWrapper
            events={eventsArr} //
            handleSelectEvent={handleModalOpen}
            handleRegisterEvent={handleRegisterModalOpen}
            handlerFlagshipEvent={handleFlagshipCardModalOpen}
            swiperRef={swiperRef}
          />
          <Arrow src={nextArrowIcon} alt="Next" onClick={handleNext} />
        </Section>
      </Container>
    </div>
  )
}

Events.propTypes = {
  eventsArr: PropTypes.array.isRequired
}
