import { gql } from '@apollo/client'

export const GET_USER_BY_ID = gql`
  query GetUser($uid: String) {
    getUser(uid: $uid) {
      id
      name
      email
      srcID
      college
      createdAt
    }
  }
`
