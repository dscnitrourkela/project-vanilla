import { Container, Section, Title, Paragraph } from './aboutCard.styles'
function AboutCard({ title, description, bgColor, isSuperTitle = false }) {
  return (
    <Container bgColor={bgColor}>
      <Section>
        <Title isSuperTitle={isSuperTitle}>{title}</Title>
        <Paragraph isSuperTitle={isSuperTitle}>{description}</Paragraph>
      </Section>
    </Container>
  )
}

export default AboutCard
