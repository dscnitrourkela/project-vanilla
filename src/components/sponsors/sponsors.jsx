import {
  Icon,
  SponsorsContainer,
  IconContainer,
  SponsorsSectionHeading,
  InnerSponsorsContainer
} from './sponsors.styles'
import { SponsorsData } from '../../config/index'

export const Sponsors = () => {
  return (
    <SponsorsContainer id="sponsors">
      <SponsorsSectionHeading>Sponsors</SponsorsSectionHeading>
      <InnerSponsorsContainer>
        {SponsorsData.map((data, index) => (
          <IconContainer key={index}>
            <Icon key={index} style={data.styles} src={data.url} />
          </IconContainer>
        ))}
      </InnerSponsorsContainer>
    </SponsorsContainer>
  )
}
