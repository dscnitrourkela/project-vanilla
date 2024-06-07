import { useState, useRef } from 'react'
import {
  Container,
  Arrow,
  EventsBgPillar,
  EventsPillar,
  EventsTitle,
  Section
} from './events.styles'
import { events, nextArrowIcon, prevArrowIcon } from '../../../config/content/events'
import EventModal from './EventModal'
import EventsWrapper from './EventsWrapper'
export default function Events() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [event, setEvent] = useState(null)
  const swiperRef = useRef(null)

  function handleModalOpen(id) {
    setIsModalOpen(true)
    const event = events.find((event) => event.id === id)
    if (event) {
      setEvent(event)
    }
  }
  function handleModalClose() {
    setIsModalOpen(false)
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

  return (
    <>
      {isModalOpen && <EventModal closeModal={handleModalClose} event={event} />}
      <Container>
        <Section>
          <Arrow src={prevArrowIcon} alt="Previous" onClick={handlePrev} />
          <EventsWrapper
            events={events}
            handleSelectEvent={handleModalOpen}
            swiperRef={swiperRef}
          />
          <EventsPillar>
            <EventsTitle>Events</EventsTitle>
          </EventsPillar>
          <EventsBgPillar></EventsBgPillar>
          <Arrow src={nextArrowIcon} alt="Next" onClick={handleNext} />
        </Section>
      </Container>
    </>
  )
}
