import { useEffect, useState, useContext } from 'react'
import { useQuery } from '@apollo/client'
import { GET_EVENTS_REGISTERED } from '../../graphQL/queries/eventRegistration'
import { AuthContext } from '../../context/AuthContext'

const useRegisteredEvents = (orgID) => {
  const { userInfo } = useContext(AuthContext)
  const { uid } = userInfo

  const { loading, error, data } = useQuery(GET_EVENTS_REGISTERED, {
    variables: { userID: uid, orgID },
    skip: !uid
  })

  const [registeredEvents, setRegisteredEvents] = useState([])

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

  console.log(registeredEvents)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return { registeredEvents, loading, error }
}

export default useRegisteredEvents
