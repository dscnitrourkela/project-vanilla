import { gql } from '@apollo/client'

export const CREATE_TEAM_REGISTRATIONS = gql`
  mutation Mutation($orgId: ID, $teamRegistration: TeamRegistrationCreateInputType!) {
    createTeamRegistration(orgID: $orgId, teamRegistration: $teamRegistration) {
      userIDs
      teamName
      users {
        name
        college
      }
    }
  }
`
