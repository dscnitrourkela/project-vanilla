import {
  ProfileDropDown,
  ProfileDropDownItem,
  Label,
  LogoutButton,
  Value,
  CloseButton,
  Container,
  NotRegistered
} from './ProfileMenu.styles'
import propTypes from 'prop-types'
import { XIcon } from '../../../config/content/events/events'
import { useContext } from 'react'
import { AuthContext } from '../../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
ProfileMenuDropDown.propTypes = {
  setProfileOpen: propTypes.func,
  user: propTypes.object
}
function ProfileMenuDropDown({ setProfileOpen, user }) {
  const navigate = useNavigate()
  const userDetails = [
    { label: 'Name', value: user.name },
    { label: 'Email', value: user.email },
    { label: 'Src Id', value: user.srcID }
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
