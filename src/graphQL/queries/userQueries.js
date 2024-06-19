import { gql } from '@apollo/client'
export const GET_USER_BY_ID = gql`
  query getUser($userId: ID!) {
    user(id: $userId) {
      name
      email
      srcID
      college
    }
  }
`
