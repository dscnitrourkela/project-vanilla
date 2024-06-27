import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { GET_EVENTS_BY_ORGID } from '../../graphQL/queries/getEvents'

const useGetEventsByOrgid = (orgID) => {
  const { loading, error, data } = useQuery(GET_EVENTS_BY_ORGID, {
    variables: { orgID, pagination: null }
  })

  const [events, setEvents] = useState([])

  useEffect(() => {
    console.log('data1', data)
    const fetchData = async () => {
      try {
        if (data && data.getEvents) {
          setEvents(data.getEvents)
        }
      } catch (error) {
        console.error('Error fetching events:', error)
      }
    }

    fetchData()
  }, [data])

  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    console.error(error)
    return <div>Error!</div>
  }

  return { events, loading, error }
}

export default useGetEventsByOrgid
