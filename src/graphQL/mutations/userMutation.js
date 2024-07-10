import { gql } from '@apollo/client'
export const CREATE_USER = gql`
  mutation CreateUser($user: UserCreateInputType!, $orgId: ID) {
    createUser(user: $user, orgID: $orgId) {
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
