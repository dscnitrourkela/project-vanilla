import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import EventsWrapper from './EventsWrapper'
import {
  Container,
  Arrow,
  EventWrapper,
  EventsBgPillar,
  EventsPillar,
  EventsTitle,
  Section
} from './events.styles'
import { events } from '../../../config/content/events'
export default function Events() {
  const [currIndex, setCurrIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        handleNext()
      }, 3000)

      return () => clearInterval(interval)
    }
  }, [isHovered, currIndex])

  function handleNext() {
    setCurrIndex((prevIndex) => (prevIndex + 1) % events.length)
  }
  function handlePrev() {
    setCurrIndex((prevIndex) => (prevIndex === 0 ? events.length - 1 : prevIndex - 1))
  }

  return (
    <Container>
      <Section>
        <Arrow
          src="https://res.cloudinary.com/dmvdbpyqk/image/upload/v1717655995/nkmjcmohqhylatngyere.svg"
          alt="left-arrow"
          onClick={handlePrev}
        />
        <EventWrapper
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence>
            <EventsWrapper events={events} currIndex={currIndex} />
          </AnimatePresence>
        </EventWrapper>
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
  )
}
