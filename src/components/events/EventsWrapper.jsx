import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import EventCard from './EventCard'
import PropTypes from 'prop-types'
import { EventWrapper } from './events.styles'

EventsWrapper.propTypes = {
  events: PropTypes.array.isRequired,
  handleSelectEvent: PropTypes.func.isRequired
}

function EventsWrapper({ events, handleSelectEvent }) {
  return (
    <EventWrapper>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        navigation
        breakpoints={{
          1170: {
            slidesPerView: 2,
            spaceBetween: 10
          }
        }}
      >
        {events.map((event) => (
          <SwiperSlide key={event.id}>
            <EventCard event={event} handleSelectEvent={handleSelectEvent} />
          </SwiperSlide>
        ))}
      </Swiper>
    </EventWrapper>
  )
}

export default EventsWrapper
