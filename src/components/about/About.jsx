import AboutCard from './AboutCard'
import { data, aiche } from '../../../config/content/about'
import { Container, CardContainer1, CardContainer2, Title, Image, SubSection } from './about.styles'
function About() {
  return (
    <Container>
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
          <Image
            src="https://res.cloudinary.com/dmvdbpyqk/image/upload/v1717651216/uicuys5ldvlimqqlsojh.png"
            alt="aboutus"
          />
        </SubSection>
      </CardContainer2>
    </Container>
  )
}

export default About
