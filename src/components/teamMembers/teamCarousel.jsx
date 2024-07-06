import { TeamSectionContainer, Loading } from './teamSection.styles'
import {
  CardContainer,
  CardContainerImage,
  CardContainerText,
  CardImageName,
  CardImageRole
} from './teamCards.styles'
import { TeamMembers } from '../../config/index'
import Marquee from 'react-fast-marquee'
import { Suspense } from 'react'

export const TeamCarousel = () => {
  return (
    <TeamSectionContainer>
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
