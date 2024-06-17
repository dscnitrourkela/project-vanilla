import {
  InputContainer,
  Label,
  OuterBorder,
  Input,
  ExtrasContainer,
  Info,
  InfoBtn
} from './InputField.styles'
import { info } from '../../config/content/registrationForm/Registration'
import propTypes from 'prop-types'

InputField.propTypes = {
  input: propTypes.shape({
    id: propTypes.string.isRequired,
    label: propTypes.string.isRequired,
    placeholder: propTypes.string.isRequired,
    type: propTypes.string.isRequired,
    extras: propTypes.string
  }).isRequired,
  handleFormData: propTypes.func.isRequired
}

function InputField({ input: { id, label, placeholder, type, extras }, handleFormData }) {
  return (
    <InputContainer key={id}>
      <Label htmlFor={id}>{label}</Label>
      <OuterBorder>
        <Input
          id={id}
          placeholder={placeholder}
          type={type}
          containsIcon={extras ? true : false}
          onChange={handleFormData}
        />
        {extras && (
          <InfoBtn>
            <Info src={info} alt="info-icon" />
          </InfoBtn>
        )}
      </OuterBorder>
      {extras && (
        <ExtrasContainer>
          <Info src={info} alt="info-icon" />
          {extras}
        </ExtrasContainer>
      )}
    </InputContainer>
  )
}

export default InputField
