import { Label } from './FileInput.styles'
import { SwitchButton, SwitchCheckbox, SwitchContainer, SwitchLabel } from './SwitchInput.styles'
import propTypes from 'prop-types'

SwitchInput.propTypes = {
  handleHostelRequired: propTypes.func,
  value: propTypes.bool
}

export default function SwitchInput({ handleHostelRequired, value }) {
  return (
    <SwitchContainer>
      <Label>Hostel Needed?</Label>
      <SwitchCheckbox
        type="checkbox"
        id="isHostelRequired"
        value={value}
        onClick={handleHostelRequired}
      />
      <SwitchLabel htmlFor="isHostelRequired">
        <SwitchButton />
      </SwitchLabel>
    </SwitchContainer>
  )
}
