import {
  TextContainer,
  TextHead,
  TextHead1,
  TextContainer2,
  Select
} from './registeredEventModal.styles'
import { edpLink } from '../../config/content/events/events'
import PropTypes from 'prop-types'

RegisteredTeam.propTypes = {
  currentEvent: PropTypes.any,
  doesContainEDP: PropTypes.bool,
  isK12: PropTypes.bool,
  setGrade: PropTypes.func,
  grade: PropTypes.string,
  allEvents: PropTypes.array
}

function RegisteredTeam({ currentEvent, doesContainEDP, isK12, setGrade, grade, allEvents }) {
  const teamLeadId = currentEvent.userIDs[0]
  const sortedUsers = [...currentEvent.users].sort((a, b) => {
    if (a.id === teamLeadId) return -1
    if (b.id === teamLeadId) return 1
    return 0
  })

  function genrateOptionsWithGrade() {
    const options = ['Kindergarten - Grade 2', 'Grade 3-5', 'Grade 6-8', 'Grade 9-12']
    const gradeIndexes = allEvents.map((event) => event.grade)
    const optionsResult = gradeIndexes.map((gradeIndex) => {
      return { value: gradeIndex, label: options[Number(gradeIndex)] }
    })
    return optionsResult
  }

  return (
    <div>
      {isK12 && (
        <div>
          <TextHead>Registered Grades</TextHead>
          <Select value={grade} onChange={(e) => setGrade(e.target.value)}>
            {genrateOptionsWithGrade().map((option) => (
              <option key={option.label} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
        </div>
      )}
      <TextContainer2>
        <TextHead1>Team Name:&nbsp;</TextHead1>
        {currentEvent.teamName}
      </TextContainer2>
      {sortedUsers.map((user, index) => (
        <div key={index}>
          <TextContainer>
            <TextHead>{index === 0 ? 'Team Lead:' : `Member ${index + 1}:`}</TextHead>
            {user.name + ' - ' + user.college}
          </TextContainer>
        </div>
      ))}
      {doesContainEDP && (
        <TextContainer>
          <TextHead>Submit your EDPs here: </TextHead>
          <a href={edpLink} target="_blank" rel="noreferrer">
            Link
          </a>
        </TextContainer>
      )}
    </div>
  )
}

export default RegisteredTeam
