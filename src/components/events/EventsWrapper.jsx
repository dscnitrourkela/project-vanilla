import { motion, AnimatePresence } from 'framer-motion'
import EventCard from './EventCard'
import { useEffect, useState } from 'react'

function AnimatedEvent({ event: { id, img, title, subtitle, details } }) {
  return (
    <motion.div key={id} layout initial={{ x: 100 }} animate={{ x: 0 }}>
      <EventCard id={id} img={img} title={title} subtitle={subtitle} details={details} />
    </motion.div>
  )
}
function isMobile() {
  return window.innerWidth < 1030
}

export default function EventsWrapper({ events, currIndex }) {
  const [mobileView, setMobileView] = useState(isMobile())
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
        <AnimatedEvent key={event.id} event={event} />
      ))}
    </AnimatePresence>
  )
}
