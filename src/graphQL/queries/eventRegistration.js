import { gql } from '@apollo/client'

// get list of eventIDS registered by given user

export const GET_EVENTS_REGISTERED = gql`
  query EventRegistration($userId: ID, $orgId: ID) {
    eventRegistration(userID: $userId, orgID: $orgId) {
      eventID
    }
  }
`
