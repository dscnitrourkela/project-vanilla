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
import { CREATE_USER } from '../../graphQL/mutations/userMutation'
import { formSchema } from '../../config/content/registrationForm/formSchema'

export default function RegistrationForm() {
  const [formData, setformData] = useState({
    name: '',
    email: '',
    mobile: '',
    aicheRegID: '',
    college: '',
    rollNumber: '',
    idCardPhoto: null,
    tSize: ''
  })
  const initialFormErrors = {
    name: '',
    email: '',
    mobile: '',
    aicheRegID: '',
    college: '',
    rollNumber: '',
    idCardPhoto: '',
    tSize: ''
  }
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [isloading, setIsLoading] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const { userInfo, handleGoogleSignIn } = useContext(AuthContext)
  const [createUser, { loading, data }] = useMutation(CREATE_USER)

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

    if (!isFormValid()) return

    setIsLoading(true)
    try {
      if (!isLoggedIn) return
      const imageUrl = await uploadToCloudinary(formData.idCardPhoto)
      if (!imageUrl) {
        toast.error('Failed to upload ID card! Please try again!')
        return
      }
      const newFormData = { ...formData, idCardPhoto: imageUrl }
      await createUser({
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

  const handleFormData = (fieldId, value) => {
    setformData((prevData) => ({
      ...prevData,
      [fieldId]: value
    }))

    if (formErrors[fieldId]) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        [fieldId]: ''
      }))
    }
  }

  function isFormValid() {
    const parseResult = formSchema.safeParse(formData)
    if (!parseResult.success) {
      const newFormErrors = {}
      parseResult.error.errors.forEach((err) => {
        newFormErrors[err.path[0]] = err.message
      })
      setFormErrors(newFormErrors)
      return false
    } else {
      return true
    }
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
              <FileInput
                key={input.id}
                input={input}
                handleFormData={handleFormData}
                error={formErrors[input.id]}
              />
            ) : (
              <InputField
                key={input.id}
                input={input}
                handleFormData={handleFormData}
                error={formErrors[input.id]}
              />
            )
          )}
          <Button onClick={(e) => handleSubmit(e)} disabled={loading}>
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
