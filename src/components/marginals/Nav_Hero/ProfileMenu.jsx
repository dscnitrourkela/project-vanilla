import { ProfileMenuButton } from './ProfileMenu.styles'
import { createPortal } from 'react-dom'
import ProfileMenuDropDown from './ProfileMenuDropDown'
import propTypes from 'prop-types'
ProfileMenu.propTypes = {
  isProfileOpen: propTypes.bool,
  setProfileOpen: propTypes.func
}
function ProfileMenu({ isProfileOpen, setProfileOpen }) {
  const overlay = document.getElementById('overlay')
  return (
    <>
      {createPortal(
        isProfileOpen && <ProfileMenuDropDown setProfileOpen={setProfileOpen} />,
        overlay
      )}
      <div>
        <ProfileMenuButton>
          <img
            src="https://res.cloudinary.com/dmvdbpyqk/image/upload/v1718813973/user_leg9ei.svg"
            alt=""
          />
        </ProfileMenuButton>
      </div>
    </>
  )
}

export default ProfileMenu
