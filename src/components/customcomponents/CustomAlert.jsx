import PropTypes from 'prop-types'

import { Button, Container, Mssg, Section } from './customAlert.style'

const CustomAlert = ({ message, onClose }) => {
  if (!message) return null

  return (
    <Container>
      <Section>
        <div>
          <Mssg>{message}</Mssg>
          <Button onClick={onClose}>ok</Button>
        </div>
      </Section>
    </Container>
  )
}

CustomAlert.propTypes = {
  message: PropTypes.string,
  onClose: PropTypes.func.isRequired
}

export default CustomAlert
