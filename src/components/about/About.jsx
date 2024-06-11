import AboutCard from './AboutCard'
import { AboutUsData } from '../../config/index'
import { Container, CardContainer, Title } from './about.styles'
import AboutCarousel from './AboutCarousel'
function About() {
  return (
    <Container id="about">
      <CardContainer>
        {AboutUsData.data.map((details) => (
          <AboutCard
            title={details.title}
            description={details.description}
            bgColor={details.bgColor}
            key={details.id}
          />
        ))}
      </CardContainer>
      <CardContainer>
        <Title>About Us</Title>
        <AboutCarousel />
        <AboutCard
          title={AboutUsData.srcData.title}
          description={AboutUsData.srcData.description}
          bgColor={AboutUsData.srcData.bgColor}
          key={AboutUsData.srcData.id}
        />
      </CardContainer>
    </Container>
  )
}

export default About
