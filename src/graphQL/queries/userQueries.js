import { gql } from '@apollo/client'
export const GET_USER_BY_ID = gql`
  query GetUser($uid: String, $orgId: ID) {
    getUser(uid: $uid, orgID: $orgId) {
      id
      name
      email
      srcID
      college
      createdAt
    }
  }
`
