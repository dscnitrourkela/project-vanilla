import { gql } from '@apollo/client'

export const GET_TEAM_REGISTRATIONS_BY_USER = gql`
  query GetTeamRegistrationsByUser($userID: ID!) {
    teamRegistrationsByUser(userID: $userID) {
      teamName
      eventID
      userIDs
    }
  }
`
