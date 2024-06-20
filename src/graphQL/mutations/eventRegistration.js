import { gql } from '@apollo/client'

// when user registers for an event

export const CREATE_EVENT_REGISTRATION = gql`
  mutation CreateEventRegistration($eventRegistration: EventRegistrationCreateInputType!) {
    createEventRegistration(eventRegistration: $eventRegistration) {
      eventID
      userID
    }
  }
`
