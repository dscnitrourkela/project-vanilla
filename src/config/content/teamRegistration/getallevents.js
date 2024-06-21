import { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { QUERY_ALL_EVENTS } from '../../../graphQL/queries/eventregistrationQueries'

const FetchEvents = () => {
  const { loading, error, data } = useQuery(QUERY_ALL_EVENTS)
  const [events, setEvents] = useState([])

  useEffect(() => {
    if (data && data.events) {
      setEvents(data.events.eventIDs)
    }
  }, [data])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <div>
      <h1>All Events</h1>
      <ul>
        {events.map((eventID) => (
          <li key={eventID}>{eventID}</li>
        ))}
      </ul>
    </div>
  )
}

export default FetchEvents
