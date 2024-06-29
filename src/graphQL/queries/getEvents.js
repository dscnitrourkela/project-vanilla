import { gql } from '@apollo/client'

export const GET_EVENTS_BY_ORGID = gql`
  query GetEvents($orgID: String!, $pagination: PaginationInputType) {
    getEvents(orgID: $orgID, pagination: $pagination) {
      id
      name
      subHeading
      prizeMoney
      description
      poster
      rules
      isTeamEvent
      maxTeamSize
      minTeamSize
    }
  }
`
