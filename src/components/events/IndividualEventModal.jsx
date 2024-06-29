import { useState } from 'react'
import PropTypes from 'prop-types'
import { useMutation } from '@apollo/client'
import { Button1, Input, InputContainer1, Text, TextHead, TextSub } from './registerModal.style'
import { RegistrationSchema } from '../../config/content/teamRegistration/registerSchema'
import { CREATE_EVENT_REGISTRATION } from '../../graphQL/mutations/eventRegistration'
import CustomAlert from '../customcomponents/CustomAlert'
import { toast } from 'react-toastify'
import {
  RegisterCompleteCardText,
  RegisterCompleteCardTextContainer
} from './teamRegistrationModal'

export const IndiEventModal = ({ EventId, EventTitle }) => {
  const [alcheID, setAlcheID] = useState('')
  const [show, setShow] = useState(true)
  const [error, setError] = useState(null)
  const [registerEvent, { loading, error: mutationError }] = useMutation(CREATE_EVENT_REGISTRATION)

  async function handleSubmit() {
    const validationResult = RegistrationSchema.safeParse({
      alcheID,
      eventID: EventId
    })

    if (!validationResult.success) {
      const validationError = validationResult.error.errors[0]?.message
      setError(validationError)
      return
    }

    try {
      console.log('Submitting Registration: ', { eventID: Number(EventId), userID: alcheID })

      const response = await registerEvent({
        variables: { eventRegistration: { eventID: EventId, userID: alcheID } }
      })

      console.log('Mutation Response: ', response)
      toast.success('You have been registered successfully!')
      setShow(false)
    } catch (error) {
      console.error('Error registering:', error)
      setError(error.message || 'Error registering. Please try again.')
    }
  }

  return (
    <>
      {show ? (
        <div>
          <Text>{EventTitle}</Text>
          <TextSub>(*single member Participation*)</TextSub>
          <TextHead className="text-lg font-bold">User ID</TextHead>
          <InputContainer1>
            <Input
              type="text"
              placeholder="Enter your alche id"
              value={alcheID}
              onChange={(e) => {
                setAlcheID(e.target.value)
                setError(null)
              }}
            />
          </InputContainer1>
          {error && <CustomAlert message={error} onClose={() => setError(null)} />}

          <Button1 onClick={handleSubmit} disabled={loading}>
            {loading ? 'Registering...' : 'Register'}
          </Button1>

          {mutationError && <Text className="error">{mutationError.message}</Text>}
        </div>
      ) : (
        <RegisterCompleteCardTextContainer>
          <RegisterCompleteCardText>Hurray! Ur Registration Completed</RegisterCompleteCardText>
        </RegisterCompleteCardTextContainer>
      )}
    </>
  )
}

IndiEventModal.propTypes = {
  EventId: PropTypes.string.isRequired,
  EventTitle: PropTypes.string.isRequired,
  closeRegisterModal: PropTypes.func
}
