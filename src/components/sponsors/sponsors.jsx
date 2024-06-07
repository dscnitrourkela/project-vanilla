import { Icon, SponsorsContainer ,IconContainer} from './sponsors.styles'
import Marquee from 'react-fast-marquee'
import { SponsorsData } from '../../config/content/mycomp_data/sponsors'

export const Sponsors = () => {
  return (
    <SponsorsContainer>
      <Marquee> 
        {SponsorsData.map((data, index) => (
          <IconContainer key={index} >
             <Icon key={index} style={data.styles} src={data.url}  />
          </IconContainer>
        ))}
        
      </Marquee>
    </SponsorsContainer>
  )
}
