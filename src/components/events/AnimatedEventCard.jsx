import { motion } from 'framer-motion'
import EventCard from './EventCard'
import PropTypes from 'prop-types'

AnimatedEventCard.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    details: PropTypes.string
  }),
  handleSelectEvent: PropTypes.func
}

export default function AnimatedEventCard({
  event: { id, img, title, subtitle, details },
  handleSelectEvent
}) {
  return (
    <motion.div key={id} layout initial={{ x: 100 }} animate={{ x: 0 }}>
      <EventCard
        id={id}
        img={img}
        title={title}
        subtitle={subtitle}
        details={details}
        handleSelectEvent={handleSelectEvent}
      />
    </motion.div>
  )
}
