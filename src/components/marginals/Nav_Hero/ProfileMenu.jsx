import { useContext, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

import propTypes from 'prop-types'

import { skipToken, useSuspenseQuery } from '@apollo/client'

import { AuthContext } from '../../../context/AuthContext'
import { GET_USER_BY_ID } from '../../../graphQL/queries/userQueries'
import { ProfileMenuButton } from './ProfileMenu.styles'
import ProfileMenuDropDown from './ProfileMenuDropDown'

ProfileMenu.propTypes = {
  isProfileOpen: propTypes.bool,
  setProfileOpen: propTypes.func
}
function ProfileMenu({ isProfileOpen, setProfileOpen }) {
  const orgId = '668bd9deff0327a608b9b6ea'
  const { userInfo } = useContext(AuthContext)
  const [uid, setUid] = useState(null)
  const [user, setUser] = useState({})
  const { data: userDataInDb } = useSuspenseQuery(
    GET_USER_BY_ID,
    uid ? { variables: { uid: uid, orgId } } : skipToken
  )
  useEffect(() => {
    if (userInfo.uid) {
      setUid(userInfo.uid)
      if (userDataInDb?.getUser) {
        setUser(userDataInDb.getUser)
        console.log(userDataInDb.getUser)
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
