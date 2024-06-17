import { useState } from 'react'
import {
  Container,
  HiddenInput,
  FileName,
  ImageButton,
  Input,
  InputContainer,
  Label
} from './FileInput.styles'
import { imageBtn } from '../../config/content/registrationForm/Registration'
import propTypes from 'prop-types'

FileInput.propTypes = {
  input: propTypes.shape({
    id: propTypes.string.isRequired,
    label: propTypes.string.isRequired,
    type: propTypes.string.isRequired,
    placeholder: propTypes.string.isRequired
  }).isRequired,
  handleFormData: propTypes.func.isRequired
}

export default function FileInput({ input: { id, label, type, placeholder }, handleFormData }) {
  const [fileName, setFileName] = useState(placeholder)

  const handleFileChange = (event) => {
    const file = event.target.files[0]
    setFileName(file ? file.name : placeholder)
    handleFormData(event)
  }

  const handleClick = () => {
    document.getElementById(id).click()
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
    </Container>
  )
}
