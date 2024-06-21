import {
  ProfileDropDown,
  ProfileDropDownItem,
  Label,
  LogoutButton,
  Value,
  CloseButton,
  Container
} from './ProfileMenu.styles'
import propTypes from 'prop-types'
ProfileMenuDropDown.propTypes = {
  setProfileOpen: propTypes.func
}
import { XIcon } from '../../../config/content/events/events'
function ProfileMenuDropDown({ setProfileOpen }) {
  return (
    <Container onMouseLeave={() => setProfileOpen(false)}>
      <ProfileDropDown>
        <CloseButton onClick={() => setProfileOpen(false)}>
          <img src={XIcon} alt="X" />
        </CloseButton>
        <ProfileDropDownItem>
          <Label>UserId:</Label> <Value>lorem</Value>
        </ProfileDropDownItem>
        <ProfileDropDownItem>
          <Label>UserId:</Label> <Value>lorem</Value>
        </ProfileDropDownItem>
        <ProfileDropDownItem>
          <Label>UserId:</Label> <Value>lorem</Value>
        </ProfileDropDownItem>
        <LogoutButton>Logout</LogoutButton>
      </ProfileDropDown>
    </Container>
  )
}

export default ProfileMenuDropDown
