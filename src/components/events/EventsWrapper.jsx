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
  combinedArray,
  events,
  handleSelectEvent,
  swiperRef,
  handleRegisterEvent,
  handlerFlagshipEvent,
  mongoId,
  userSrcId
}) {
  useEffect(() => {
    if (swiperRef.current) {
      const swiper = swiperRef.current
      swiper.navigation.init()
      swiper.navigation.update()
    }
  }, [swiperRef])

  function giveRegisteredEvent(currEvent) {
    let registeredEvent = null
    let k12Events = []
    const k12EventId = '668d1b221b94b9c9625372b2'
    const isK12Event = currEvent.id === k12EventId

    if (isK12Event) {
      k12Events = combinedArray.filter((event) => event.eventID === k12EventId)
    }

    combinedArray.forEach((event) => {
      if (currEvent.id === event.eventID) {
        registeredEvent = event
      }
    })

    if (isK12Event) {
      if (k12Events.length > 0) {
        return k12Events
      } else {
        return null
      }
    } else {
      return registeredEvent
    }
  }

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
        {events.map((event) => {
          const registeredEvent = giveRegisteredEvent(event)
          return (
            <SwiperSlide key={event.id}>
              <EventCard
                registeredEvent={registeredEvent}
                event={event}
                handleSelectEvent={handleSelectEvent}
                handleRegisterEvent={handleRegisterEvent}
                mongoId={mongoId}
                userSrcId={userSrcId}
              />
            </SwiperSlide>
          )
        })}

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
  swiperRef: PropTypes.object.isRequired,
  combinedArray: PropTypes.array,
  mongoId: PropTypes.string,
  userSrcId: PropTypes.string
}

export default EventsWrapper
