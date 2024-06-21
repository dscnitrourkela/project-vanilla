import { gql } from '@apollo/client'

export const QUERY_ALL_EVENTS = gql`
  query GetAllEvents {
    events {
      eventIDs
    }
  }
`
