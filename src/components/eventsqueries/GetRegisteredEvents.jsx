import { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_EVENTS_REGISTERED } from '../../graphQL/queries/eventRegistration'

const useGetRegisteredEvents = (orgId, uid) => {
  const { data } = useQuery(GET_EVENTS_REGISTERED, {
    variables: { orgID: orgId, userId: uid }
  })

  console.log(orgId, uid)

  const [registeredEvents, setRegisteredEvents] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('112', data)
        const allRegisteredEvents = await data.eventRegistration

        console.log('filteredEvents', allRegisteredEvents)
        if (allRegisteredEvents > 0) {
          setRegisteredEvents(allRegisteredEvents)
          console.log(allRegisteredEvents)
        } else setRegisteredEvents([])
      } catch (error) {
        console.error('Error fetching events:', error)
      }
    }

    fetchData()
  }, [data])

  console.log(registeredEvents)

  return { registeredEvents }
}

export default useGetRegisteredEvents
