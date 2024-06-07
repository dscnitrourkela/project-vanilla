import { AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import AnimatedEventCard from './AnimatedEventCard'

EventsWrapper.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      img: PropTypes.string,
      title: PropTypes.string,
      subtitle: PropTypes.string,
      details: PropTypes.string
    })
  ),
  currIndex: PropTypes.number,
  handleSelectEvent: PropTypes.func
}

export default function EventsWrapper({ events, currIndex, handleSelectEvent }) {
  const [mobileView, setMobileView] = useState(isMobile())
  function isMobile() {
    return window.innerWidth < 1030
  }

  useEffect(() => {
    function handleResize() {
      setMobileView(isMobile())
    }
    window.addEventListener('resize', handleResize)
    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const currentEvents = mobileView
    ? [events[currIndex]]
    : [events[currIndex], events[(currIndex + 1) % events.length]]

  return (
    <AnimatePresence>
      {currentEvents.map((event) => (
        <AnimatedEventCard key={event.id} event={event} handleSelectEvent={handleSelectEvent} />
      ))}
    </AnimatePresence>
  )
}
