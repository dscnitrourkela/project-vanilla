import {
  InputContainer,
  Label,
  OuterBorder,
  Input,
  ExtrasContainer,
  Info,
  InfoBtn,
  ErrorMessage
} from './InputField.styles'
import { info } from '../../config/content/registrationForm/Registration'
import PropTypes from 'prop-types'

function InputField({
  input: { id, label, placeholder, type, extras },
  handleFormData,
  value,
  error
}) {
  const handleChange = (e) => {
    handleFormData(id, e.target.value)
  }

  return (
    <InputContainer key={id}>
      <Label htmlFor={id}>{label}</Label>
      <OuterBorder>
        <Input
          id={id}
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={handleChange}
        />
        {extras && (
          <InfoBtn>
            <Info src={info} alt="info-icon" />
          </InfoBtn>
        )}
      </OuterBorder>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {extras && (
        <ExtrasContainer>
          <Info src={info} alt="info-icon" />
          {extras}
        </ExtrasContainer>
      )}
    </InputContainer>
  )
}

InputField.propTypes = {
  input: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    extras: PropTypes.string
  }).isRequired,
  handleFormData: PropTypes.func.isRequired,
  value: PropTypes.string,
  error: PropTypes.string
}

export default InputField
