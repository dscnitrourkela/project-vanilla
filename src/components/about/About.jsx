import AboutCard from './AboutCard'
import { data, aiche, aboutImage } from '../../config/content/about/about'
import { Container, CardContainer1, CardContainer2, Title, Image, SubSection } from './about.styles'
function About() {
  return (
    <Container id="about">
      <CardContainer1>
        {data.map((details, index) => (
          <AboutCard
            title={details.title}
            description={details.description}
            bgColor={details.bgColor}
            key={index}
          />
        ))}
      </CardContainer1>
      <CardContainer2>
        <Title>About Us</Title>
        <SubSection>
          <AboutCard
            title={aiche.title}
            description={aiche.description}
            bgColor={aiche.bgColor}
            isSuperTitle={true}
          />
          <Image src={aboutImage} alt="aboutus" />
        </SubSection>
      </CardContainer2>
    </Container>
  )
}

export default About
