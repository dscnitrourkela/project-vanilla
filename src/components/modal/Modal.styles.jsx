// Modal.styles.jsx
import tw from 'twin.macro'
import styled from 'styled-components'

export const Overlay = styled.div`
  ${tw`fixed inset-0 bg-black-1 bg-opacity-50 flex items-center justify-center`}
  z-index: 50;
`

export const ModalContainer = styled.div`
  ${tw`bg-white-1 p-1 0.4xsm:p-6 rounded-lg shadow-lg relative`}
  width: 90%;
  max-width: 500px;
`

export const CloseButton = styled.button`
  ${tw`absolute top-0 right-0 mt-0 mr-2 rounded-full text-red-500 text-2xl 0.4xsm:text-5xl`}
  background: none;
  border: none;
  cursor: pointer;
`
