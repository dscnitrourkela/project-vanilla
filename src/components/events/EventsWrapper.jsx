import { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import EventCard from './EventCard'
import FlagshipCard from './FlagshipCard'
import PropTypes from 'prop-types'
import { EventWrapper } from './events.styles'
import { Navigation, Autoplay } from 'swiper/modules'

EventsWrapper.propTypes = {
  events: PropTypes.array.isRequired,
  handleSelectEvent: PropTypes.func.isRequired,
  swiperRef: PropTypes.object.isRequired
}

function EventsWrapper({ events, handleSelectEvent, swiperRef }) {
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
            <EventCard event={event} handleSelectEvent={handleSelectEvent} />
          </SwiperSlide>
        ))}
        <SwiperSlide>
          <FlagshipCard />
        </SwiperSlide>
      </Swiper>
    </EventWrapper>
  )
}

export default EventsWrapper
