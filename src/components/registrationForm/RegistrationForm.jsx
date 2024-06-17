import { useState } from 'react'
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
  MobileDate
} from './RegisterForm.styles'
import InputField from './InputField'
import FileInput from './FileInput'

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
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    if (!checkValidations()) {
      toast.error('Please fill all the fields!')
      return
    }
    console.log(formData)

    const imageUrl = await uploadToCloudinary()
    if (!imageUrl) return
    toast.success('Image uploaded successfully!')
  }

  async function uploadToCloudinary() {
    const image = formData.idCard
    if (!image) return toast.error('Please select an image!')

    const cloudName = import.meta.env.VITE_PUBLIC_CLOUDINARY_CLOUD_NAME
    const uploadPreset = import.meta.env.VITE_PUBLIC_CLOUDINARY_UPLOAD_PRESET
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`

    const form = new FormData()
    form.append('file', image)
    form.append('upload_preset', uploadPreset)

    setLoading(true)
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: form
      })

      if (!response.ok) {
        throw new Error(`Failed to upload image: ${response.statusText}`)
      }
      const res = await response.json()
      return res.url
    } catch (err) {
      console.error(err)
      toast.error('Failed to upload image!')
    } finally {
      setLoading(false)
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
    return isValid
  }
  return (
    <Container>
      {loading && <Loader />}
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

      <FormContainer action="">
        {formInputs.map((input) =>
          input.type === 'file' ? (
            <FileInput key={input.id} input={input} handleFormData={handleFormData} />
          ) : (
            <InputField key={input.id} input={input} handleFormData={handleFormData} />
          )
        )}
        <Button onClick={(e) => handleSubmit(e)}>Register</Button>
      </FormContainer>
    </Container>
  )
}
