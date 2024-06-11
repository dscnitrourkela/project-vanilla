import { TeamSectionContainer, TeamSectionHeading, Loading } from './teamSection.styles'
import {
  CardContainer,
  CardContainerImage,
  CardContainerText,
  CardImageName,
  CardImageRole
} from './teamCards.styles'
import {
  RegisterCardContainer,
  RegisterCardContainerImage,
  RegisterCardContainerText,
  RegisterCardImageName,
  RegisterCardImageRole
} from './registerContainer.styles'
import { apostrophe } from '../../config/content/registrationHelp/registrationHelp'
import { TeamMembers } from '../..//config/content/teamsData/team'
import Marquee from 'react-fast-marquee'
import { Suspense } from 'react'

export const TeamCarousel = () => {
  return (
    <TeamSectionContainer id="team">
      <TeamSectionHeading>Meet the team</TeamSectionHeading>
      <RegisterCardContainer>
        <RegisterCardContainerImage />
        <RegisterCardContainerText>
          <RegisterCardImageName>{apostrophe[4].quoteImageName}</RegisterCardImageName>
          <RegisterCardImageRole>{apostrophe[5].quoteImageDesignation}</RegisterCardImageRole>
        </RegisterCardContainerText>
      </RegisterCardContainer>
      <Marquee>
        {TeamMembers.map((member, index) => (
          <Suspense key={index} fallback={<Loading>Loading...</Loading>}>
            <CardContainer key={index}>
              <CardContainerImage key={index} bgimage={member.image} />
              <CardContainerText>
                <CardImageName>{member.name}</CardImageName>
                <CardImageRole>{member.role}</CardImageRole>
              </CardContainerText>
            </CardContainer>
          </Suspense>
        ))}
      </Marquee>
    </TeamSectionContainer>
  )
}
