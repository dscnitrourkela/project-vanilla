// Modal.js
import ReactDOM from 'react-dom'
import { Overlay, ModalContainer, CloseButton } from './Modal.styles'
import PropTypes from 'prop-types'

const Modal = ({ children, open, onClose }) => {
  if (!open) return null

  return ReactDOM.createPortal(
    <Overlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        {children}
      </ModalContainer>
    </Overlay>,
    document.getElementById('overlay')
  )
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}

export default Modal
