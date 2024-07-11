import { useContext, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

import propTypes from 'prop-types'

import { useQuery } from '@apollo/client'

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
  const [loading, setLoading] = useState(false)
  const { refetch: refetchUser } = useQuery(GET_USER_BY_ID, {
    variables: { uid: uid, orgId },
    skip: true
  })
  useEffect(() => {
    if (userInfo.uid) {
      setUid(userInfo.uid)
      getUserData()
    }
  }, [userInfo, uid])

  async function getUserData() {
    setLoading(true)
    try {
      const { data } = await refetchUser({ uid: userInfo.uid, orgId })
      setUser(data.getUser)
      setLoading(false)
    } catch (err) {
      // console.log('Error fetching user data', err)
    }
  }

  const overlay = document.getElementById('overlay')

  return (
    <>
      {createPortal(
        isProfileOpen && (
          <ProfileMenuDropDown setProfileOpen={setProfileOpen} user={user} loading={loading} />
        ),
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
