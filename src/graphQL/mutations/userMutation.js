import { gql } from '@apollo/client'
export const CREATE_USER = gql`
  mutation createUser($user: AddUserInput!) {
    createUser(user: $user) {
      aicheRegID
      uid
      email
      tSize
      name
      mobile
      college
      rollNumber
      idCardPhoto
    }
  }
`
