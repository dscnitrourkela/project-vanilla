import { gql } from '@apollo/client'

// get list of eventIDS registered by given user

export const GET_EVENTS_REGISTERED = gql`
  query GetEventRegistrations($userID: ID, $orgID: ID) {
    eventRegistration(userID: $userID, orgID: $orgID) {
      eventID
    }
  }
`
