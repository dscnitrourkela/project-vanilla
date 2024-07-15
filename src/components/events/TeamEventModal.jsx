import { useState } from 'react'
import PropTypes from 'prop-types'
// import { Button1 } from './registerModal.style'
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
  RegisterCompleteCardTextContainer,
  Container,
  Button1
} from './teamRegistrationModal'
import { TeamRegistrationSchema } from '../../config/content/teamRegistration/registerSchema'
import { toast } from 'react-toastify'
import { MinusButtonUrl, PlusButtonUrl } from '../../config/content/teamRegistration/registermodal'
import { InputContainer1, FileUpload } from './registerModal.style'
import { uploadToCloudinary } from '../../utils/uploadToCloudinary'
import { edpEvents, edpLink } from '../../config/content/events/events'

export const TeamEventModal = ({
  EventId,
  EventTitle,
  maxTeamSize,
  hasPdfUpload,
  mongoId,
  handleScroll,
  userSrcId
}) => {
  const [formData, setFormData] = useState({
    teamname: '',
    teamleadid: userSrcId,
    userIds: ['']
  })

  const [show, setShow] = useState(true)
  const [error, setError] = useState(null)
  const [pdf, setPdf] = useState(null)
  const [loading, setLoading] = useState(false)

  const [teamRegisterEvent] = useMutation(CREATE_TEAM_REGISTRATIONS)

  const maxUsers = maxTeamSize

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
    if (formData.userIds.length > maxUsers - 2) {
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

  function hasDuplicates(arr) {
    let sorted_arr = arr.slice().sort()
    for (let i = 0; i < sorted_arr.length - 1; i++) {
      if (sorted_arr[i + 1] === sorted_arr[i]) {
        return false
      }
    }
    return true
  }

  async function handleSubmit() {
    const validationResult = TeamRegistrationSchema.safeParse(formData)

    if (!validationResult.success) {
      const validationError = validationResult.error.errors[0]?.message
      setError(validationError)
      return
    }

    if (hasPdfUpload && !pdf) {
      setError('Please upload a PDF file')
      if (pdf.type !== 'application/pdf') {
        setError('Please upload a valid PDF file')
      }
      return
    }
    const uIds = [splitId(formData.teamleadid), ...formData.userIds.map(splitId)]
    if (!uIds.includes(mongoId)) {
      setError('You must be part of the team')
      return
    }

    if (!hasDuplicates(uIds)) {
      setError('Duplicate User IDs are not allowed')
      return
    }
    setLoading(true)
    try {
      let pdfUrl = null
      if (hasPdfUpload) {
        pdfUrl = await uploadToCloudinary(pdf)
      }
      await teamRegisterEvent({
        variables: {
          orgId: '668bd9deff0327a608b9b6ea',
          teamRegistration: {
            eventID: EventId,
            teamName: formData.teamname,
            userIDs: uIds,
            submittedPDF: pdfUrl
          }
        }
      })
      setShow(false)
      setTimeout(() => {
        window.location.reload()
      }, 2000)
    } catch (err) {
      console.error(err)
      setError('Error registering. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]

    if (!file) {
      console.error('No file selected')
      return
    }

    const validTypes = ['application/pdf']
    const fileType = file.type
    if (validTypes.includes(fileType)) {
      setPdf(file)
      setError('')
    } else {
      setError('Please upload a valid PDF file.')
      setPdf(null)
      return
    }
  }

  function splitId(id) {
    return id.split('-')[1]
  }

  const doesContainEDP = edpEvents.includes(EventTitle)
  return (
    <>
      {show ? (
        <Container onScroll={handleScroll}>
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
                <TextHead>Team Lead srcID</TextHead>
                <Input
                  type="text"
                  placeholder="Enter Team Lead srcID"
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
                  <TextHead>{`Member ${index + 1} srcID`}</TextHead>
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
          {doesContainEDP && (
            <Button1
              onClick={() => {
                window.open(edpLink, '_blank')
              }}
            >
              Click to submit your EDPs here
            </Button1>
          )}

          {hasPdfUpload && (
            <InputContainer1>
              <TextHead className="text-lg font-bold">Submit your abstracts here</TextHead>
              <FileUpload type="file" onChange={handleFileChange} accept="application/pdf" />
            </InputContainer1>
          )}

          {error && <CustomAlert message={error} onClose={() => setError(null)} />}

          <Button1 onClick={handleSubmit} disabled={loading}>
            {loading ? 'Registering...' : 'Register'}
          </Button1>
        </Container>
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
  closeRegisterModal: PropTypes.func,
  hasPdfUpload: PropTypes.bool,
  mongoId: PropTypes.string,
  maxTeamSize: PropTypes.number,
  handleScroll: PropTypes.func,
  userSrcId: PropTypes.string
}

export default TeamEventModal
