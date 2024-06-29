import { gql } from '@apollo/client'

export const CREATE_TEAM_REGISTRATIONS = gql`
  mutation CreateTeamEventRegistration(
    $teamEventRegistration: TeamEventRegistrationCreateInputType!
  ) {
    createTeamEventRegistration(teamEventRegistration: $teamEventRegistration) {
      eventID
      teamName
      userIDs
    }
  }
`
