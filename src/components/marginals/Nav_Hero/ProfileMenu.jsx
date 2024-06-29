import { ProfileMenuButton } from './ProfileMenu.styles'
import { createPortal } from 'react-dom'
import { useContext, useEffect, useState } from 'react'
import ProfileMenuDropDown from './ProfileMenuDropDown'
import propTypes from 'prop-types'
import { AuthContext } from '../../../context/AuthContext'
import { useSuspenseQuery, skipToken } from '@apollo/client'
import { GET_USER_BY_ID } from '../../../graphQL/queries/userQueries'

ProfileMenu.propTypes = {
  isProfileOpen: propTypes.bool,
  setProfileOpen: propTypes.func
}
function ProfileMenu({ isProfileOpen, setProfileOpen }) {
  const { userInfo } = useContext(AuthContext)
  const [uid, setUid] = useState(null)
  const [user, setUser] = useState({})
  const { data: userDataInDb } = useSuspenseQuery(
    GET_USER_BY_ID,
    uid ? { variables: { uid: uid } } : skipToken
  )
  useEffect(() => {
    if (userInfo.uid) {
      setUid(userInfo.uid)
      if (userDataInDb?.getUser) {
        setUser(userDataInDb.getUser)
        // console.log(userDataInDb.getUser)
      }
    }
  }, [userInfo, userDataInDb, uid])
  const overlay = document.getElementById('overlay')

  return (
    <>
      {createPortal(
        isProfileOpen && <ProfileMenuDropDown setProfileOpen={setProfileOpen} user={user} />,
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
