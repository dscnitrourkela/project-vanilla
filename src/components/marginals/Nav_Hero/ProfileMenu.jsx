import {
  Label,
  LogoutButton,
  ProfileDropDown,
  ProfileDropDownItem,
  ProfileMenuButton,
  Value
} from './ProfileMenu.styles'

function ProfileMenu() {
  return (
    <div>
      <ProfileMenuButton>
        <img
          src="https://res.cloudinary.com/dmvdbpyqk/image/upload/v1718813973/user_leg9ei.svg"
          alt=""
        />
      </ProfileMenuButton>
      <ProfileDropDown>
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
    </div>
  )
}

export default ProfileMenu
