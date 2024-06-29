import { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import EventCard from './EventCard'
import FlagshipCard from './FlagshipCard'
import PropTypes from 'prop-types'
import { EventWrapper } from './events.styles'
import { Navigation, Autoplay } from 'swiper/modules'

function EventsWrapper({
  events = [],
  handleSelectEvent,
  swiperRef,
  handleRegisterEvent,
  handlerFlagshipEvent
}) {
  useEffect(() => {
    if (swiperRef.current) {
      const swiper = swiperRef.current
      swiper.navigation.init()
      swiper.navigation.update()
    }
  }, [swiperRef])

  return (
    <EventWrapper>
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
        breakpoints={{
          1170: {
            slidesPerView: 2,
            spaceBetween: 10
          }
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper
        }}
      >
        {events.map((event) => (
          <SwiperSlide key={event.id}>
            <EventCard
              event={event}
              handleSelectEvent={handleSelectEvent}
              handleRegisterEvent={handleRegisterEvent}
            />
          </SwiperSlide>
        ))}
        <SwiperSlide>
          <FlagshipCard handlerFlagshipEvent={handlerFlagshipEvent} />
        </SwiperSlide>
      </Swiper>
    </EventWrapper>
  )
}

EventsWrapper.propTypes = {
  events: PropTypes.array.isRequired,
  handleSelectEvent: PropTypes.func.isRequired,
  handleRegisterEvent: PropTypes.func.isRequired,
  handlerFlagshipEvent: PropTypes.func.isRequired,
  swiperRef: PropTypes.object.isRequired
}

export default EventsWrapper
