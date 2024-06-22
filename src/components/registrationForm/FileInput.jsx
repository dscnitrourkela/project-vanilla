import { useState } from 'react'
import {
  Container,
  HiddenInput,
  FileName,
  ImageButton,
  Input,
  InputContainer,
  Label,
  ErrorMessage
} from './FileInput.styles'
import { imageBtn } from '../../config/content/registrationForm/Registration'
import propTypes from 'prop-types'
import { toast } from 'react-toastify'

FileInput.propTypes = {
  input: propTypes.shape({
    id: propTypes.string.isRequired,
    label: propTypes.string.isRequired,
    type: propTypes.string.isRequired,
    placeholder: propTypes.string.isRequired
  }).isRequired,
  handleFormData: propTypes.func.isRequired,
  error: propTypes.string
}

export default function FileInput({
  input: { id, label, type, placeholder },
  handleFormData,
  error
}) {
  const [fileName, setFileName] = useState(placeholder)

  const handleFileChange = (e) => {
    if (!isValidImage(e)) {
      return toast.error('Invalid file format. Please upload an image')
    }
    const file = e.target.files[0]
    setFileName(file ? file.name : placeholder)
    handleFormData(id, file)
  }

  const handleClick = () => {
    document.getElementById(id).click()
  }

  function isValidImage(e) {
    const inputFile = e.target.files[0]

    if (!inputFile) {
      console.error('No file selected')
      return false
    }

    const validTypes = ['image/png', 'image/jpg', 'image/jpeg']
    const fileType = inputFile.type

    if (validTypes.includes(fileType)) {
      return true
    } else {
      return false
    }
  }

  return (
    <Container>
      <HiddenInput type={type} id={id} onChange={handleFileChange} />
      <Label htmlFor={id}>{label}</Label>
      <InputContainer>
        <Input onClick={handleClick}>
          <label htmlFor={id}>
            <ImageButton src={imageBtn} alt="upload" />
          </label>
          <FileName>{fileName}</FileName>
        </Input>
      </InputContainer>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  )
}
