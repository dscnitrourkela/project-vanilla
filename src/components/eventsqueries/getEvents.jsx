import { useQuery } from '@apollo/client'
import { GET_EVENTS_BY_ORGID } from '../../graphQL/queries/getEvents'
import { toast } from 'react-toastify'

export const GetEvents = async () => {
  const orgId = '668bd9deff0327a608b9b6ea'

  const { data } = useQuery(GET_EVENTS_BY_ORGID, {
    variables: { orgId: orgId }
  })

  let events = []

  try {
    const allEvents = await data.getEvents

    const filteredEvents = allEvents.filter((event) => event.status === 'ACTIVE')

    if (filteredEvents.length > 0) {
      events = filteredEvents
    } else events = []
  } catch (error) {
    console.error('Error fetching events:', error)
    events = []
    toast.error('Error events')
  }

  return events
}
