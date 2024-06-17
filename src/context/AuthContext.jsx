import { createContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { auth, signInWithGoogle, signOutUser } from '../firebase/login'
import { onAuthStateChanged } from 'firebase/auth'
import { toast } from 'react-toastify'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserData] = useState({})

  const listenForAuthChanges = () => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userData = { name: user.displayName, email: user.email, uid: user.uid }
        setUserData(userData)
      } else {
        setUserData({})
      }
    })
  }

  useEffect(() => {
    listenForAuthChanges()
  }, [])

  const handleGoogleSignIn = async () => {
    try {
      const user = await signInWithGoogle()
      if (user) {
        const userData = { name: user.displayName, email: user.email, uid: user.uid }
        setUserData(userData)
        toast.success('Successfully signed in with Google.')
      } else {
        toast.error('Google sign-in failed. Please try again.')
      }
    } catch (error) {
      console.error('Error signing in with Google:', error)
      toast.error('Error signing in with Google. Please try again.')
    }
  }

  const handleSignOut = async () => {
    try {
      await signOutUser()
      setUserData({})
      toast.success('Successfully signed out.')
    } catch (error) {
      console.error('Error signing out:', error)
      toast.error('Error signing out. Please try again.')
    }
  }

  return (
    <AuthContext.Provider value={{ userInfo, setUserData, handleGoogleSignIn, handleSignOut }}>
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
}
