import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { GET_EVENTS_BY_ORGID } from '../../../graphQL/queries/getEvents'
import Events from '../../../components/events/Events'

const GetEventsBYOrgid = () => {
  const { loading, error, data } = useQuery(GET_EVENTS_BY_ORGID, {
    variables: { orgID: 'alche' }
  })

  const [events, setEvents] = useState([])

  useEffect(() => {
    if (data && data.getEvents) {
      setEvents(data.getEvents)
    }
  }, [data])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <div>
      <Events eventsarr={events} />
    </div>
  )
}

export default GetEventsBYOrgid
