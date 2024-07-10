import { useState } from 'react'
import PropTypes from 'prop-types'
import { Button1 } from './registerModal.style'
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
  TextSub,
  AddMemberButton,
  RemoveButton,
  IconButtonContainer,
  RegisterCompleteCardText,
  RegisterCompleteCardTextContainer
} from './teamRegistrationModal'
import { TeamRegistrationSchema } from '../../config/content/teamRegistration/registerSchema'
import { toast } from 'react-toastify'
import { MinusButtonUrl, PlusButtonUrl } from '../../config/content/teamRegistration/registermodal'

export const TeamEventModal = ({ EventId, EventTitle }) => {
  const [formData, setFormData] = useState({
    teamname: '',
    teamleadid: '',
    userIds: ['']
  })

  const [show, setShow] = useState(true)
  const [error, setError] = useState(null)

  const [teamRegisterEvent, { loading, error: mutationError }] =
    useMutation(CREATE_TEAM_REGISTRATIONS)

  const handleChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value
    })
    setError(null)
  }

  const handleUserIdChange = (index, value) => {
    const newUserIds = [...formData.userIds]
    newUserIds[index] = value
    setFormData({
      ...formData,
      userIds: newUserIds
    })
  }

  const addUserId = () => {
    if (formData.userIds.length > 4) {
      return toast.error("you've reached maximum team limit")
    }
    setFormData({
      ...formData,
      userIds: [...formData.userIds, '']
    })
  }

  const removeUserId = () => {
    if (formData.userIds.length > 1) {
      const newUserIds = [...formData.userIds]
      newUserIds.pop()
      setFormData({
        ...formData,
        userIds: newUserIds
      })
    }
  }

  async function handleSubmit() {
    const validationResult = TeamRegistrationSchema.safeParse(formData)

    if (!validationResult.success) {
      const validationError = validationResult.error.errors[0]?.message
      setError(validationError)
      return
    }

    try {
      const response = await teamRegisterEvent({
        variables: {
          orgId: '668bd9deff0327a608b9b6ea',
          teamRegistration: {
            eventID: EventId,
            teamName: formData.teamname,
            userIDs: [formData.teamleadid, ...formData.userIds]
          }
        }
      })
      console.log('mutation response', response)

      toast.success('You have been registered successfully!')
      setShow(false)
    } catch (err) {
      setError('Error registering. Please try again.')
    }
  }

  return (
    <>
      {show ? (
        <>
          <Text>{EventTitle}</Text>
          <TextSub>(*Team Participation*)</TextSub>
          <GridContainer>
            <Grid1>
              <div>
                <TextHead>Team Name</TextHead>
                <Input
                  type="text"
                  placeholder="Enter Team Name"
                  value={formData.teamname}
                  onChange={(e) => handleChange('teamname', e.target.value)}
                />
              </div>
              <div>
                <TextHead>Team Lead ID</TextHead>
                <Input
                  type="text"
                  placeholder="Enter Team Lead ID"
                  value={formData.teamleadid}
                  onChange={(e) => handleChange('teamleadid', e.target.value)}
                />
              </div>
            </Grid1>
            <IconButtonContainer>
              <AddMemberButton onClick={addUserId}>
                <img style={{ width: '40px', height: '40px' }} src={PlusButtonUrl} alt="Add" />
              </AddMemberButton>
              <RemoveButton onClick={removeUserId}>
                <img style={{ width: '40px', height: '40px' }} src={MinusButtonUrl} alt="Remove" />
              </RemoveButton>
            </IconButtonContainer>
            <Grid2>
              {formData.userIds.map((userId, index) => (
                <div className="flex" key={index}>
                  <TextHead>{`Member ${index + 1} ID`}</TextHead>
                  <Input2
                    type="text"
                    placeholder={`Enter Member ${index + 1}'s ID`}
                    value={userId}
                    onChange={(e) => handleUserIdChange(index, e.target.value)}
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
        </>
      ) : (
        <RegisterCompleteCardTextContainer>
          <RegisterCompleteCardText>Hurray! Your Registration Completed</RegisterCompleteCardText>
        </RegisterCompleteCardTextContainer>
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
