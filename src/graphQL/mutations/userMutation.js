import { gql } from '@apollo/client'
export const ADD_USER = gql`
  mutation addUser($user: AddUserInput!) {
    addUser(user: $user) {
      id
      aicheID
      name
      college
      idCard
    }
  }
`
