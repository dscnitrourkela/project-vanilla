import { gql } from '@apollo/client'

export const GET_USER_BY_ID = gql`
  query GetUser($id: ID, $email: String, $uid: String) {
    getUser(id: $id, email: $email, uid: $uid) {
      id
      name
      email
      srcID
      college
      createdAt
    }
  }
`
