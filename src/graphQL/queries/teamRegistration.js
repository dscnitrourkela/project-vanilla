import { gql } from '@apollo/client'

export const GET_TEAM_REGISTRATIONS_BY_USER = gql`
  query Query($orgId: ID, $userId: ID) {
    teamRegistrations(orgID: $orgId, userID: $userId) {
      eventID
      teamName
      userIDs
      users {
        name
        college
        id
      }
    }
  }
`
