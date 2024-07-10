import { useState, useRef } from 'react'
import { Container, Arrow, Section, EventsTitleMobile } from './events.styles'
import { nextArrowIcon, prevArrowIcon } from '../../config/index'
import EventModal from './EventModal'
import EventsWrapper from './EventsWrapper'
import { createPortal } from 'react-dom'
import { RegisterModal } from './Register2Modal'

import { eventss, staticEventsData } from '../../config/content/events/events'
import { toast } from 'react-toastify'
import { useEffect } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { GET_EVENTS_BY_ORGID } from '../../graphQL/queries/getEvents'
import { skipToken, useSuspenseQuery } from '@apollo/client'
import { GET_EVENTS_REGISTERED } from '../../graphQL/queries/eventRegistration'
import { GET_TEAM_REGISTRATIONS_BY_USER } from '../../graphQL/queries/teamRegistration'

export default function Events() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false)
  const [isFlagshipEventModalOpen, setIsFlagshipEventModalOpen] = useState(false)
  const [event, setEvent] = useState(null)
  const [events, setEvents] = useState([])
  const [registeredEvents, setRegisteredEvents] = useState([])
  const [registeredTeamEvents, setRegisteredTeamEvents] = useState([])

  const [loading, setLoading] = useState(true)
  const [uid, setUid] = useState(null)

  const swiperRef = useRef(null)

  const { userInfo } = useContext(AuthContext)

  const orgId = '668bd9deff0327a608b9b6ea'

  const { data } = useSuspenseQuery(GET_EVENTS_BY_ORGID, uid ? { variables: { orgId } } : skipToken)
  const { data: registeredData } = useSuspenseQuery(
    GET_EVENTS_REGISTERED,
    uid ? { variables: { orgId, userId: '668c3707b8cca2f5e9a5d6f8' } } : skipToken
  )
  const { data: registeredTeamData } = useSuspenseQuery(
    GET_TEAM_REGISTRATIONS_BY_USER,
    uid ? { variables: { orgId, userId: '668c3707b8cca2f5e9a5d6f8' } } : skipToken
  )

  useEffect(() => {
    if (userInfo.name) {
      setUid(userInfo.name)
      const details = data
      const registeredEventDetails = registeredData
      const registeredTeamEventDetails = registeredTeamData
      if (details?.getEvents) {
        const allEvents = details.getEvents
        const allRegisteredEvents = registeredEventDetails.eventRegistration
        const allRegisteredTeamEvents = registeredTeamEventDetails.teamRegistrations
        getAllEvents(allEvents, allRegisteredEvents, allRegisteredTeamEvents)
      }
    }
  }, [userInfo, data, registeredData, registeredTeamData])

  async function getAllEvents(allEvents, allRegisteredEvents, allRegisteredTeamEvents) {
    try {
      const filteredEvents = allEvents.filter((event) => event.status === 'ACTIVE')
      if (filteredEvents.length > 0) {
        setEvents(filteredEvents)
        setRegisteredEvents(allRegisteredEvents)
        setRegisteredTeamEvents(allRegisteredTeamEvents)
      } else setEvents([])
    } catch (error) {
      console.error('Error fetching events:', error)
      toast.error('Something went wrong!')
    } finally {
      setLoading(false)
    }
  }
  console.log(events)
  console.log(registeredEvents)
  console.log(registeredTeamEvents)

  const combinedAray = registeredEvents.concat(registeredTeamEvents)
  console.log('ca', combinedAray)

  function handleRegisterModalOpen(EventId) {
    setIsRegisterModalOpen(true)
    const event = events.find((event) => event.id === EventId)
    if (event) {
      setEvent(event)
    }
  }

  function handleFlagshipCardModalOpen(EventId) {
    setIsFlagshipEventModalOpen(true)
    const event = eventss.find((event) => event.id === EventId)
    if (event) {
      setEvent(event)
    }
  }

  function handleModalOpen(EventId) {
    setIsModalOpen(true)
    const event = events.find((event) => event.id === EventId)
    if (event) {
      setEvent(event)
    }
  }

  function handleModalClose() {
    setIsModalOpen(false)
  }

  function handleFlagshipModalClose() {
    setIsFlagshipEventModalOpen(false)
  }

  function handleRegisterModalClose() {
    setIsRegisterModalOpen(false)
  }

  function handlePrev() {
    if (swiperRef.current) {
      swiperRef.current.slidePrev()
    }
  }

  function handleNext() {
    if (swiperRef.current) {
      swiperRef.current.slideNext()
    }
  }

  const overlay = document.getElementById('overlay')

  return (
    <div id="events">
      {createPortal(
        isModalOpen && <EventModal closeModal={handleModalClose} event={event} />,
        overlay
      )}
      {createPortal(
        isRegisterModalOpen && (
          <RegisterModal closeModal={handleRegisterModalClose} event={event} />
        ),
        overlay
      )}
      {createPortal(
        isFlagshipEventModalOpen && (
          <RegisterModal closeModal={handleFlagshipModalClose} event={event} />
        ),
        overlay
      )}
      <EventsTitleMobile>Events</EventsTitleMobile>(
      <Container>
        <Section>
          <Arrow src={prevArrowIcon} alt="Previous" onClick={handlePrev} />
          <EventsWrapper
            combinedArray={combinedAray}
            events={!loading ? events : staticEventsData} //
            handleSelectEvent={handleModalOpen}
            handleRegisterEvent={handleRegisterModalOpen}
            handlerFlagshipEvent={handleFlagshipCardModalOpen}
            swiperRef={swiperRef}
          />
          <Arrow src={nextArrowIcon} alt="Next" onClick={handleNext} />
        </Section>
      </Container>
      )
    </div>
  )
}

/* Events.propTypes = {
  eventsArr: PropTypes.array
} */
