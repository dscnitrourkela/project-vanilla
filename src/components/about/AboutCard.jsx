import PropTypes from 'prop-types'
import { Container, Section, Title, Paragraph } from './aboutCard.styles'

AboutCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  isSuperTitle: PropTypes.bool
}

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
