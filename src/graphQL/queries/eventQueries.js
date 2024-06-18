import { gql } from '@apollo/client';

export const GET_EVENTS = gql`
  query GetEvents {
    events {
      isEvent
      Eventsid
      users {
        id
        name
      }
    }
  }
`;
