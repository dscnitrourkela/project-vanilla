import { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_EVENTS_REGISTERED } from '../../graphQL/queries/eventRegistration'

const useRegisteredEvents = (orgID) => {
  const { loading, error, data } = useQuery(GET_EVENTS_REGISTERED, {
    variables: { userID: 3, orgID }
  })
  const [registeredevents, setRegisteredEvents] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      console.log('data', data)
      try {
        if (data && data.eventRegistration) {
          setRegisteredEvents(data.eventRegistration)
        }
      } catch (error) {
        console.error('Error fetching events:', error)
      }
    }

    fetchData()
  }, [data])

  console.log(registeredevents)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return { registeredevents, loading, error }
}

export default useRegisteredEvents
