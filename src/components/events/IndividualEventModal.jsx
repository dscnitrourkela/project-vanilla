import { useState } from 'react'
import PropTypes from 'prop-types'
import { useMutation } from '@apollo/client'
import {
  Button1,
  FileUpload,
  Input,
  InputContainer1,
  Text,
  TextHead,
  TextSub,
  Err
} from './registerModal.style'
import { CREATE_EVENT_REGISTRATION } from '../../graphQL/mutations/eventRegistration'
import CustomAlert from '../customcomponents/CustomAlert'
import { uploadToCloudinary } from '../../utils/uploadToCloudinary'

import {
  RegisterCompleteCardText,
  RegisterCompleteCardTextContainer
} from './teamRegistrationModal'
import { RegistrationSchema } from '../../config/content/teamRegistration/registerSchema'

export const IndiEventModal = ({ EventId, EventTitle, mongoId, hasPdfUpload }) => {
  const [aicheID, setAicheID] = useState('')
  const [show, setShow] = useState(true)
  const [error, setError] = useState(null)
  const [pdf, setPdf] = useState(null)
  const [errorContent, setErrorContent] = useState('')
  const [loading, setLoading] = useState(false)
  const [registerEvent, { error: mutationError }] = useMutation(CREATE_EVENT_REGISTRATION)

  const orgId = '668bd9deff0327a608b9b6ea'

  async function handleSubmit() {
    const validationResult = RegistrationSchema.safeParse({
      aicheID,
      eventID: EventId
    })

    if (!validationResult.success) {
      const validationError = validationResult.error.errors[0]?.message
      setError(validationError)
      return
    }
    setLoading(true)

    try {
      if (aicheID.split('-')[1] !== mongoId) {
        setError('Invalid aicheID')
        return
      }

      if (hasPdfUpload && !pdf) {
        setError('Please upload a PDF file')
        if (pdf.type !== 'application/pdf') {
          setError('Please upload a valid PDF file')
        }
        return
      }
      let pdfUrl = null
      if (hasPdfUpload) {
        pdfUrl = await uploadToCloudinary(pdf)
      }

      await registerEvent({
        variables: {
          eventRegistration: {
            eventID: EventId,
            userID: aicheID.split('-')[1],
            submittedPDF: pdfUrl
          },
          orgId: orgId
        }
      })

      if (mutationError) {
        console.error('Error registering:', mutationError)
      }

      setTimeout(() => {
        window.location.reload()
      }, 2000)

      setShow(false)
    } catch (error) {
      console.error('Error registering:', error)

      setError(
        'Error registering. Please check your Aiche ID again. If the problem persists, please try again later.'
      )
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
              placeholder="Enter your aiche id"
              value={aicheID}
              onChange={(e) => {
                setAicheID(e.target.value)
                setError(null)
              }}
              onBlur={() =>
                setErrorContent(
                  aicheID.split('-')[1] !== mongoId
                    ? 'Invalid Aiche Id did you mean ' +
                        aicheID.split('-')[0].substring(0, 4) +
                        '-' +
                        mongoId
                    : null
                )
              }
            />
          </InputContainer1>
          {errorContent && <Err className="error">{errorContent}</Err>}
          {hasPdfUpload && (
            <InputContainer1>
              <TextHead className="text-lg font-bold">Upload PDF</TextHead>
              <FileUpload
                type="file"
                placeholder="Upload PDF here"
                onChange={handleFileChange}
                accept="application/pdf"
              />
            </InputContainer1>
          )}

          {error && <CustomAlert message={error} onClose={() => setError(null)} />}

          <Button1 onClick={handleSubmit} disabled={loading}>
            {loading ? 'Registering...' : 'Register'}
          </Button1>
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
  closeRegisterModal: PropTypes.func,
  mongoId: PropTypes.string,
  hasPdfUpload: PropTypes.bool
}
