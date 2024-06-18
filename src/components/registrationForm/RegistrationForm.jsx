import { useState, useContext, useEffect } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { useMutation } from '@apollo/client'
import { toast } from 'react-toastify'
import Loader from '../loader/Loader'
import {
  logo2,
  logo1,
  bg,
  date,
  formInputs,
  mobileLogo
} from '../../config/content/registrationForm/Registration'
import {
  Container,
  BackgroundImage,
  LogoSection,
  LogoContainer,
  Date,
  FormContainer,
  Button,
  MobileHeader,
  MobileDate,
  SignInContainer
} from './RegisterForm.styles'
import InputField from './InputField'
import FileInput from './FileInput'
import { uploadToCloudinary } from './uploadToCloudinary'
import { ADD_USER } from '../../graphQL/mutations/userMutation'

export default function RegistrationForm() {
  const [formData, setformData] = useState({
    name: '',
    email: '',
    phone: '',
    aicheID: '',
    college: '',
    rollNo: '',
    idCard: null,
    tShirtSize: ''
  })
  const [isloading, setIsLoading] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const { userInfo, handleGoogleSignIn } = useContext(AuthContext)
  const [addUser, { loading, data }] = useMutation(ADD_USER)

  async function signInWithGoogle() {
    setIsLoading(true)
    try {
      await handleGoogleSignIn()
      setIsLoggedIn(true)
    } catch (e) {
      console.error(e)
      toast.error('Failed to sign in!')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (data) {
      console.log(data)
    }
  }, [data])

  useEffect(() => {
    userInfo.name ? setIsLoggedIn(true) : setIsLoggedIn(false)
  }, [userInfo])

  async function handleSubmit(e) {
    e.preventDefault()

    if (!checkValidations()) {
      toast.error('Please fill all the fields!')
      return
    }
    setIsLoading(true)
    try {
      if (!isLoggedIn) return
      const imageUrl = await uploadToCloudinary(formData.idCard)
      if (!imageUrl) return
      const newFormData = { ...formData, idCard: imageUrl }
      await addUser({
        variables: {
          user: newFormData
        }
      })
      toast.success('You have been registered successfully!')
    } catch (e) {
      console.error(e)
      toast.error('Failed to register! Please try again!')
    } finally {
      setIsLoading(false)
    }
  }

  function handleFormData(e) {
    setformData({
      ...formData,
      [e.target.id]: e.target.id === 'idCard' ? e.target.files[0] : e.target.value
    })
  }

  function checkValidations() {
    const keys = Object.keys(formData)
    const isValid = keys.every((key) => {
      return formData[key] !== '' && formData[key] !== undefined && formData[key] !== null
    })
    if (isValid) {
      if (formData.phone.length !== 10 || isNaN(formData.phone)) {
        toast.error('Phone number should be 10 digits long and should contain only numbers!')
        return false
      }
    }
    return isValid
  }

  return (
    <Container>
      {(isloading || loading) && <Loader />}
      <LogoSection>
        <BackgroundImage src={bg} />
        <LogoContainer>
          <img src={logo1} alt="logo" />
          <img src={logo2} alt="logo2" />
          <Date>{date}</Date>
        </LogoContainer>
      </LogoSection>

      <MobileHeader>
        <img src={mobileLogo} alt="logo" />
        <img src={logo2} alt="logo2" />
        <MobileDate>{date}</MobileDate>
      </MobileHeader>

      {isLoggedIn ? (
        <FormContainer>
          {formInputs.map((input) =>
            input.type === 'file' ? (
              <FileInput key={input.id} input={input} handleFormData={handleFormData} />
            ) : (
              <InputField key={input.id} input={input} handleFormData={handleFormData} />
            )
          )}
          <Button onClick={(e) => handleSubmit(e)} disabled={isloading}>
            Register
          </Button>
        </FormContainer>
      ) : (
        <SignInContainer>
          <Button onClick={signInWithGoogle} disabled={isloading}>
            Sign in with Google
          </Button>
        </SignInContainer>
      )}
    </Container>
  )
}
