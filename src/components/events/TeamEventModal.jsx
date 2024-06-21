import { useState } from 'react'
import PropTypes from 'prop-types'
import { Button1 } from './registerModal.style'
import { TeamRegistrationSchema } from '../../config/content/teamRegistration/registerSchema'
import { InputData } from '../../config/content/teamRegistration/registermodal'
import { useMutation } from '@apollo/client'
import { CREATE_TEAM_REGISTRATIONS } from '../../graphQL/mutations/teamRegistration'
import CustomAlert from '../customcomponents/CustomAlert'
import {
  Grid1,
  Grid2,
  GridContainer,
  Input,
  Input2,
  Text,
  TextHead,
  TextSub
} from './teamRegistrationModal'

export const TeamEventModal = ({ EventId, EventTitle }) => {
  const [formData, setFormData] = useState(
    InputData.reduce((acc, item) => {
      acc[item.key] = ''
      return acc
    }, {})
  )

  const [show, setShow] = useState(true)
  const [error, setError] = useState(null)

  const [teamRegisterEvent, { loading, error: mutationError }] =
    useMutation(CREATE_TEAM_REGISTRATIONS)

  const userId = [formData.teamleadid, formData.m1id, formData.m2id, formData.m3id]

  const handleChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value
    })
    setError(null)
  }

  async function handleSubmit() {
    const validationResult = TeamRegistrationSchema.safeParse(formData)

    if (!validationResult.success) {
      const validationError = validationResult.error.errors[0]?.message
      setError(validationError)
      return
    }
    setShow(false)

    try {
      const response = await teamRegisterEvent({
        variables: {
          eventId: EventId,
          teamName: formData.teamname,
          userIds: userId
        }
      })

      if (response.data.createTeamRegistration.success) {
        null
      } else {
        setError(
          response.data.createTeamRegistration.message || 'Error registering. Please try again.'
        )
      }
    } catch (err) {
      setError('Error registering. Please try again.')
    }
  }

  return (
    <>
      {show ? (
        <div>
          <Text>{EventTitle}</Text>
          <TextSub>(*Team Participation*)</TextSub>
          <GridContainer>
            <Grid1>
              {InputData.slice(0, 2).map((item, index) => (
                <div key={index}>
                  <TextHead>{item.head}</TextHead>
                  <Input
                    type={item.type}
                    placeholder={item.placeholder}
                    value={formData[item.key]}
                    onChange={(e) => handleChange(item.key, e.target.value)}
                  />
                </div>
              ))}
            </Grid1>
            <Grid2>
              {InputData.slice(2).map((item, index) => (
                <div key={index}>
                  <TextHead>{item.head}</TextHead>
                  <Input2
                    type={item.type}
                    placeholder={item.placeholder}
                    value={formData[item.key]}
                    onChange={(e) => handleChange(item.key, e.target.value)}
                  />
                </div>
              ))}
            </Grid2>
          </GridContainer>

          {error && <CustomAlert message={error} onClose={() => setError(null)} />}

          <Button1 onClick={handleSubmit} disabled={loading}>
            {loading ? 'Registering...' : 'Register'}
          </Button1>

          {mutationError && <Text className="error">{mutationError.message}</Text>}
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <Text>Hurray! Ur Registration Completed</Text>
        </div>
      )}
    </>
  )
}

TeamEventModal.propTypes = {
  EventId: PropTypes.number.isRequired,
  EventTitle: PropTypes.string.isRequired,
  closeRegisterModal: PropTypes.func
}

export default TeamEventModal
