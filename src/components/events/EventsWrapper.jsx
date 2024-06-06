import { motion, AnimatePresence } from 'framer-motion'
import EventCard from './EventCard'

function AnimatedEvent({ event: { id, img, title, subtitle, details } }) {
  return (
    <motion.div key={id} layout initial={{ x: 100 }} animate={{ x: 0 }}>
      <EventCard id={id} img={img} title={title} subtitle={subtitle} details={details} />
    </motion.div>
  )
}

export default function EventsWrapper({ events, currIndex }) {
  const currentEvents = [events[currIndex], events[(currIndex + 1) % events.length]]

  return (
    <AnimatePresence>
      {currentEvents.map((event) => (
        <AnimatedEvent key={event.id} event={event} />
      ))}
    </AnimatePresence>
  )
}
