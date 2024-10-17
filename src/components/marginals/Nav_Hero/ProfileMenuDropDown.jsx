import { useContext } from 'react'
import { tailspin } from 'ldrs'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import propTypes from 'prop-types'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
import { MdContentCopy } from 'react-icons/md'

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
  PaymentButton,
  LoaderContainer,
  CopyButton
} from './ProfileMenu.styles'

import { DescriptionContent } from '../../../config/index'

ProfileMenuDropDown.propTypes = {
  setProfileOpen: propTypes.func,
  user: propTypes.object,
  loading: propTypes.bool
}
function ProfileMenuDropDown({ setProfileOpen, user, loading }) {
  tailspin.register()

  const navigate = useNavigate()
  const userDetails = [
    { label: 'Name', value: user.name },
    { label: 'Email', value: user.email },
    { label: 'College', value: user.college },
    { label: 'Src Id', value: user.srcID || 'Available shortly...' }
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
        {loading ? (
          <LoaderContainer>
            <l-tailspin size="40" stroke="5" speed="0.9" color="#ff8911"></l-tailspin>
          </LoaderContainer>
        ) : userDetails[0].value ? (
          <>
            {userDetails.map((detail, index) =>
              detail.label == 'Src Id' ? (
                <ProfileDropDownItem key={index}>
                  <Label>{detail.label}: </Label> <br />
                  <Value>{detail.value}</Value>
                  <CopyToClipboard
                    text={user.srcID || detail.value}
                    onCopy={() => {
                      toast.success('SrcID copied to clipboard')
                    }}
                  >
                    <CopyButton>
                      <MdContentCopy />
                    </CopyButton>
                  </CopyToClipboard>
                </ProfileDropDownItem>
              ) : (
                <ProfileDropDownItem key={index}>
                  <Label>{detail.label}: </Label> <Value>{detail.value}</Value>
                </ProfileDropDownItem>
              )
            )}
            {!user.srcID && (
              <PaymentButton>
                <Link target="_blank" to={DescriptionContent.paymentLink}>
                  Pay Now
                </Link>
              </PaymentButton>
            )}
            <LogoutButton onClick={logout}>Logout</LogoutButton>
          </>
        ) : (
          <NotRegistered>
            You are not registered yet. Please contact the admin for registration.
          </NotRegistered>
        )}
      </ProfileDropDown>
    </Container>
  )
}

export default ProfileMenuDropDown
