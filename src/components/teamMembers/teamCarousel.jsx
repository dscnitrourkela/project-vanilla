import { TeamSectionContainer, TeamSectionHeading } from './teamSection.styles'
import {
  CardContainer,
  CardContainerImage,
  CardContainerText,
  CardImageName,
  CardImageRole
} from './teamCards.styles'
import { TeamMembers } from '../..//config/content/teamsData/team'
import Marquee from 'react-fast-marquee'

export const TeamCarousel = () => {
  return (
    <TeamSectionContainer id="team">
      <TeamSectionHeading>Meet the team</TeamSectionHeading>
      <Marquee>
        {TeamMembers.map((member, index) => (
          <CardContainer key={index}>
            <CardContainerImage key={index} bgimage={member.image} />
            <CardContainerText>
              <CardImageRole>{member.role}</CardImageRole>
              <CardImageName>{member.name}</CardImageName>
            </CardContainerText>
          </CardContainer>
        ))}
      </Marquee>
    </TeamSectionContainer>
  )
}
