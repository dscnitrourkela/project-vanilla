import { gql } from '@apollo/client'

export const CREATE_USER = gql`
  mutation CreateUser($user: UserCreateInputType!) {
    createUser(user: $user) {
      email
      uid
      name
      college
      mobile
      rollNumber
      createdAt
      tSize
      srcID
      idCardPhoto
      aicheRegID
    }
  }
`
