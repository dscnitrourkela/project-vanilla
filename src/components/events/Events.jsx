import { useState, useRef } from 'react'
import {
  Container,
  Arrow,
  EventsBgPillar,
  EventsPillar,
  EventsTitle,
  Section
} from './events.styles'
import { events } from '../../../config/content/events'
import EventModal from './EventModal'
import EventsWrapper from './EventsWrapper'
export default function Events() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [event, setEvent] = useState(null)
  const swiperRef = useRef(null)

  function handleModalOpen(id) {
    setIsModalOpen(true)
    const event = events.find((event) => event.id === id)
    setEvent(event)
  }

  function handlePrev() {
    if (swiperRef.current && swiperRef.current) {
      swiperRef.current.slidePrev()
    }
  }

  function handleNext() {
    if (swiperRef.current && swiperRef.current) {
      swiperRef.current.slideNext()
    }
  }
  function handleModalClose() {
    setIsModalOpen(false)
  }

  return (
    <>
      {isModalOpen && <EventModal closeModal={handleModalClose} event={event} />}
      <Container>
        <Section>
          <Arrow
            src="https://res.cloudinary.com/dmvdbpyqk/image/upload/v1717655995/nkmjcmohqhylatngyere.svg"
            alt="left-arrow"
            onClick={handlePrev}
          />
          <EventsWrapper
            events={events}
            handleSelectEvent={handleModalOpen}
            swiperRef={swiperRef}
          />
          <EventsPillar>
            <EventsTitle>Events</EventsTitle>
          </EventsPillar>
          <EventsBgPillar></EventsBgPillar>
          <Arrow
            src="https://res.cloudinary.com/dmvdbpyqk/image/upload/v1717655995/rl0mfre3kurcv4gwvem6.svg"
            alt="right-arrow"
            onClick={handleNext}
          />
        </Section>
      </Container>
    </>
  )
}
