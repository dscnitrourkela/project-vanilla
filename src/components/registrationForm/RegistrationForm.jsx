import { useContext, useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useMutation, useQuery } from '@apollo/client'

import { formSchema } from '../../config/content/registrationForm/formSchema'
import {
  bg,
  date,
  formInputs,
  logo1,
  logo2,
  mobileLogo,
  tshirtSizeLink
} from '../../config/content/registrationForm/Registration'
import Modal from '../modal/Modal'
import { AuthContext } from '../../context/AuthContext'
import { CREATE_USER } from '../../graphQL/mutations/userMutation'
import { GET_USER_BY_ID } from '../../graphQL/queries/userQueries'
import Loader from '../loader/Loader'
import FileInput from './FileInput'
import InputField from './InputField'
import {
  BackgroundImage,
  Button,
  Container,
  DateTxT,
  FormContainer,
  LogoContainer,
  LogoSection,
  MobileDate,
  MobileHeader,
  SignInContainer,
  TshirtContainer,
  TshirtImage
} from './RegisterForm.styles'
import SwitchInput from './SwitchInput'
import { uploadToCloudinary } from '../../utils/uploadToCloudinary'

export default function RegistrationForm() {
  const orgId = '668bd9deff0327a608b9b6ea'
  const [isModalOpen, setIsModalOpen] = useState(false)
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  const [formData, setformData] = useState({
    name: '',
    email: '',
    mobile: '',
    aicheRegID: '',
    college: '',
    rollNumber: '',
    idCardPhoto: null,
    tSize: '',
    isHostelRequired: false
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
  const [userDataInDb, setUserDataInDb] = useState(null)
  const [uid, setUid] = useState(null)
  const { userInfo, handleGoogleSignIn } = useContext(AuthContext)
  const [createUser, { loading: createUserLoading, data: createUserData }] =
    useMutation(CREATE_USER)
  const { refetch: refetchUser } = useQuery(GET_USER_BY_ID, {
    variables: { uid: uid, orgId },
    skip: true
  })

  const navigate = useNavigate()

  async function signInWithGoogle() {
    setIsLoading(true)
    try {
      await handleGoogleSignIn()
    } catch (e) {
      console.error(e)
      toast.error('Failed to sign in!')
    } finally {
      setIsLoading(false)
    }
  }

  async function getUserData() {
    setIsLoading(true)
    try {
      const { data } = await refetchUser({ uid: userInfo.uid, orgId })
      setUserDataInDb(data.getUser)
      setIsLoading(false)
    } catch (err) {
      console.error('Error fetching user data', err)
    }
  }

  const loading = createUserLoading

  useEffect(() => {
    if (userInfo.uid) {
      setIsLoggedIn(true)
      setUid(userInfo.uid)
      getUserData()
      if (userDataInDb) {
        toast.info('You have already registered!')
        navigate(`/`)
      }
      setformData((p) => ({ ...p, name: userInfo.name, email: userInfo.email }))
    }

    if (createUserData) {
      setTimeout(() => {
        window.location.href = '/'
      }, 2000)
    }
  }, [userInfo, createUserData, navigate, userDataInDb])

  async function handleSubmit(e) {
    e.preventDefault()

    if (!isFormValid()) return
    if (!userInfo.name) return toast.error('Please sign in with Google!')

    setIsLoading(true)
    try {
      const imageUrl = await uploadToCloudinary(formData.idCardPhoto)

      if (!imageUrl) {
        toast.error('Failed to upload ID card! Please try again!')
        return
      }
      const uid = userInfo.uid

      const newFormData = { ...formData, idCardPhoto: imageUrl, uid }
      await createUser({
        variables: {
          user: newFormData,
          orgId: orgId
        }
      })

      toast.success('You have been registered successfully!')
    } catch (e) {
      console.error(e)

      if (e.message.includes('Unique constraint failed')) {
        toast.error('user already exist!')
      } else {
        toast.error(e.message)
      }
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

  function handleHostelRequired() {
    setformData((prevData) => ({
      ...prevData,
      isHostelRequired: !prevData.isHostelRequired
    }))
  }

  function showTshirtSizes() {
    openModal()
  }

  return (
    <>
      <Modal open={isModalOpen} onClose={closeModal}>
        <TshirtContainer>
          <TshirtImage src={tshirtSizeLink} alt="tshirt sizes" />
        </TshirtContainer>
      </Modal>
      <Container>
        {(isloading || loading) && <Loader />}
        <LogoSection>
          <BackgroundImage src={bg} />
          <LogoContainer>
            <img src={logo1} alt="logo" />
            <img src={logo2} alt="logo2" />
            <DateTxT>{date}</DateTxT>
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
                  value={formData[input.id]}
                  handleFormData={handleFormData}
                  error={formErrors[input.id]}
                  showTshirtSizes={showTshirtSizes}
                />
              )
            )}
            <SwitchInput
              value={formData.isHostelRequired}
              handleHostelRequired={handleHostelRequired}
            />
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
    </>
  )
}
