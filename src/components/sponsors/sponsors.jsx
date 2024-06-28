import { Icon, SponsorsContainer, IconContainer, SponsorsSectionHeading } from './sponsors.styles'
import Marquee from 'react-fast-marquee'
import { SponsorsData } from '../../config/index'

export const Sponsors = () => {
  return (
    <SponsorsContainer id="sponsors">
      <SponsorsSectionHeading>Sponsors</SponsorsSectionHeading>
      <Marquee speed={30} direction="right">
        {SponsorsData.map((data, index) => (
          <IconContainer key={index}>
            <Icon key={index} style={data.styles} src={data.url} />
          </IconContainer>
        ))}
      </Marquee>
    </SponsorsContainer>
  )
}
