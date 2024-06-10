import AboutCard from './AboutCard'
import { data, srcData } from '../../config/content/about/about'
import { Container, CardContainer1, CardContainer2, Title } from './about.styles'
import AboutCarousel from './AboutCarousel'
function About() {
  return (
    <Container id="about">
      <CardContainer1>
        {data.map((details) => (
          <AboutCard
            title={details.title}
            description={details.description}
            bgColor={details.bgColor}
            key={details.id}
          />
        ))}
      </CardContainer1>
      <CardContainer2>
        <Title>About Us</Title>
        <AboutCarousel />
        <AboutCard
          title={srcData.title}
          description={srcData.description}
          bgColor={srcData.bgColor}
          key={srcData.id}
        />
      </CardContainer2>
    </Container>
  )
}

export default About
