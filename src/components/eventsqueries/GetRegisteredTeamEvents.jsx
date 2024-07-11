import { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_TEAM_REGISTRATIONS_BY_USER } from '../../graphQL/queries/teamRegistration'

const useRegisteredTeamEvents = (orgId, uid) => {
  const { data } = useQuery(GET_TEAM_REGISTRATIONS_BY_USER, {
    variables: { orgId, userID: uid }
  })

  const [registeredTeamEvents, setRegisteredTeamEvents] = useState([])

  useEffect(() => {
    if (data && data.teamRegistrations) {
      setRegisteredTeamEvents(data.teamRegistrations)
    }
  }, [data])

  return { registeredTeamEvents, loading: false, error: null }
}

export default useRegisteredTeamEvents
