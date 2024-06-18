import { gql } from '@apollo/client'
export const GET_USER_BY_ID = gql`
  query getUserById($userId: ID!) {
    user(id: $userId) {
      id
      aicheID
      name
      college
      idCard
    }
  }
`

export const GET_USERS = gql`
  query getAllUsers {
    users {
      id
      aicheID
      name
      college
      idCard
    }
  }
`
