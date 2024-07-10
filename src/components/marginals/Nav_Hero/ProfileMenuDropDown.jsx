import { useContext } from 'react'

import propTypes from 'prop-types'
import { Link, useNavigate } from 'react-router-dom'

import { XIcon } from '../../../config/content/events/events'
import { AuthContext } from '../../../context/AuthContext'
import {
  CloseButton,
  Container,
  Label,
  LogoutButton,
  NotRegistered,
  ProfileDropDown,
  ProfileDropDownItem,
  Value,
  PaymentButton
} from './ProfileMenu.styles'

import { DescriptionContent } from '../../../config/index'

ProfileMenuDropDown.propTypes = {
  setProfileOpen: propTypes.func,
  user: propTypes.object
}
function ProfileMenuDropDown({ setProfileOpen, user }) {
  const navigate = useNavigate()
  const userDetails = [
    { label: 'Name', value: user.name },
    { label: 'Email', value: user.email },
    { label: 'College', value: user.college },
    { label: 'Src Id', value: user.srcId ? user.srcId : 'Available shortly...' }
  ]
  const { handleSignOut } = useContext(AuthContext)
  function logout() {
    handleSignOut()
    navigate('/')
  }

  return (
    <Container onMouseLeave={() => setProfileOpen(false)}>
      <ProfileDropDown>
        <CloseButton onClick={() => setProfileOpen(false)}>
          <img src={XIcon} alt="X" />
        </CloseButton>
        {userDetails[0].value ? (
          <>
            {userDetails.map((detail, index) => (
              <ProfileDropDownItem key={index}>
                <Label>{detail.label}:</Label> <Value>{detail.value}</Value>
              </ProfileDropDownItem>
            ))}
            <PaymentButton>
              <Link target="_blank" to={DescriptionContent.paymentLink}>
                {' '}
                Pay Now
              </Link>
            </PaymentButton>
            <LogoutButton onClick={logout}>Logout</LogoutButton>
          </>
        ) : (
          <NotRegistered>
            <Link to={'/register'}>Finalize Your Registration Now</Link>{' '}
          </NotRegistered>
        )}
      </ProfileDropDown>
    </Container>
  )
}

export default ProfileMenuDropDown
