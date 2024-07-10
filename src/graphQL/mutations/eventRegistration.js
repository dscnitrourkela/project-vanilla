import { gql } from '@apollo/client'

// when user registers for an event

export const CREATE_EVENT_REGISTRATION = gql`
mutation Mutation($eventRegistration: EventRegistrationCreateInputType!, $orgId: ID) {
  createEventRegistration(eventRegistration: $eventRegistration, orgID: $orgId) {
    eventID
    userID
  }
}
`
