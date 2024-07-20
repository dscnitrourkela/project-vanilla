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
import { GET_USER_BY_ID } from '../../graphQL/queries/userQueries'

export default function Events() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false)
  const [isFlagshipEventModalOpen, setIsFlagshipEventModalOpen] = useState(false)
  const [event, setEvent] = useState(null)
  const [events, setEvents] = useState([])
  const [mongoId, setMongoId] = useState(null)
  const [userSrcId, setUserSrcId] = useState(null)
  const [soloRegistration, setSoloRegistration] = useState([])
  const [teamRegistration, setTeamRegistration] = useState([])
  const [combinedRegistrations, setCombinedRegistrations] = useState([])
  const [grades, setGrades] = useState(null)

  const [loading, setLoading] = useState(true)
  const [uid, setUid] = useState(null)

  const swiperRef = useRef(null)

  const { userInfo } = useContext(AuthContext)

  const orgId = '668bd9deff0327a608b9b6ea'

  const { data: allEventsMade } = useSuspenseQuery(
    GET_EVENTS_BY_ORGID,
    uid ? { variables: { orgId } } : skipToken
  )
  const { data: soloRegistrations } = useSuspenseQuery(
    GET_EVENTS_REGISTERED,
    mongoId ? { variables: { orgId, userId: mongoId } } : skipToken
  )
  const { data: teamRegistrations } = useSuspenseQuery(
    GET_TEAM_REGISTRATIONS_BY_USER,
    mongoId ? { variables: { orgId, userId: mongoId } } : skipToken
  )

  const { data: userDataInDb } = useSuspenseQuery(
    GET_USER_BY_ID,
    uid ? { variables: { uid: uid, orgId } } : skipToken
  )

  useEffect(() => {
    if (userInfo.uid) {
      setUid(userInfo.uid)
      if (allEventsMade) {
        getAllEvents(allEventsMade?.getEvents)
      }

      if (userDataInDb) {
        setMongoId(userDataInDb?.getUser?.id)
        setUserSrcId(userDataInDb?.getUser?.srcID)
      }
      if (soloRegistrations) {
        setSoloRegistration(soloRegistrations?.eventRegistration)
      }

      if (teamRegistrations) {
        setTeamRegistration(teamRegistrations?.teamRegistrations)
      }

      const combinedRegistrations = [...(soloRegistration || []), ...(teamRegistration || [])]
      setCombinedRegistrations(combinedRegistrations)
    }
  }, [
    userInfo,
    allEventsMade,
    soloRegistrations,
    teamRegistrations,
    userDataInDb,
    soloRegistration,
    teamRegistration
  ])

  async function getAllEvents(allEvents) {
    try {
      const filteredEvents = allEvents.filter((event) => event.status === 'ACTIVE')
      if (filteredEvents.length > 0) {
        setEvents(filteredEvents)
      } else setEvents([])
    } catch (error) {
      console.error('Error fetching events:', error)
      toast.error('Something went wrong!')
    } finally {
      setLoading(false)
    }
  }

  function handleRegisterModalOpen(EventId, registeredGrades) {
    setGrades(registeredGrades)
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
    let event
    if (events.length === 0) {
      event = staticEventsData.find((event) => event.id === EventId)
    } else {
      event = events.find((event) => event.id === EventId)
    }
    setEvent(event)
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
          <RegisterModal
            mongoId={mongoId}
            closeModal={handleRegisterModalClose}
            userSrcId={userSrcId}
            event={event}
            grades={grades}
          />
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
            combinedArray={combinedRegistrations}
            events={!loading ? events : staticEventsData}
            handleSelectEvent={handleModalOpen}
            handleRegisterEvent={handleRegisterModalOpen}
            handlerFlagshipEvent={handleFlagshipCardModalOpen}
            swiperRef={swiperRef}
            mongoId={mongoId}
            userSrcId={userSrcId}
          />
          <Arrow src={nextArrowIcon} alt="Next" onClick={handleNext} />
        </Section>
      </Container>
      )
    </div>
  )
}
