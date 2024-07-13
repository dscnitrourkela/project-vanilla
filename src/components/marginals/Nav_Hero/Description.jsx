import {
  HelpButton,
  RegisterButton,
  ButtonContainer,
  DescriptionContainer,
  DescriptionParagraph,
  DescriptionTitle,
  PaymentButton
} from './Description.styles'
import { DescriptionContent } from '../../../config/index'
import { ButtonWrapper } from './Description.styles'
import { useContext } from 'react'
import { AuthContext } from '../../../context/AuthContext'
import { Link } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { GET_USER_BY_ID } from '../../../graphQL/queries/userQueries'
import { useEffect, useState } from 'react'

const Description = () => {
  const orgId = '668bd9deff0327a608b9b6ea'
  const { userInfo } = useContext(AuthContext)
  const [uid, setUid] = useState(null)
  const [user, setUser] = useState(null)
  const { refetch: refetchUser } = useQuery(GET_USER_BY_ID, {
    variables: { uid: uid, orgId },
    skip: true
  })

  useEffect(() => {
    if (userInfo.uid) {
      setUid(userInfo.uid)
      getUserData()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo, uid])

  async function getUserData() {
    try {
      const { data } = await refetchUser({ uid: userInfo.uid, orgId })
      setUser(data.getUser)
    } catch (err) {
      console.log('Error fetching user data', err)
      // console.log('Error fetching user data', err)
    }
  }

  function redirect() {
    window.open(DescriptionContent.brochureLink, '_blank')
  }
  return (
    <DescriptionContainer id="home">
      <DescriptionTitle>{DescriptionContent.title}</DescriptionTitle>
      <DescriptionParagraph>{DescriptionContent.content}</DescriptionParagraph>
      <ButtonWrapper>
        <ButtonContainer>
          <HelpButton onClick={redirect}>{DescriptionContent.HeroButton}</HelpButton>
          {userInfo.name ? (
            !user?.srcID && (
              <PaymentButton>
                <Link target="_blank" to={DescriptionContent.paymentLink}>
                  Pay Now
                </Link>
              </PaymentButton>
            )
          ) : (
            <Link to="/register">
              <RegisterButton>{DescriptionContent.RegisterButton}</RegisterButton>
            </Link>
          )}
        </ButtonContainer>
      </ButtonWrapper>
    </DescriptionContainer>
  )
}

export default Description
