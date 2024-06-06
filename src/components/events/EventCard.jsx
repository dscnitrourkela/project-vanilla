import {
  Button,
  CardBody,
  CardHeader,
  CardImage,
  CardTitle,
  CardSubtitle,
  CardList,
  Container,
  ContentWrapper,
  Section,
  CardFooter
} from './eventCard.styles'

export default function EventCard({ img, id, title, subtitle, details }) {
  return (
    <Container>
      <Section>
        <ContentWrapper>
          <CardHeader>
            <CardImage src={img} alt={title} />
            <CardTitle>{title}</CardTitle>
            {/* {subtitle !== '' && <CardSubtitle>{subtitle}</CardSubtitle>} */}
          </CardHeader>
          <CardBody>
            <CardList>
              {details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </CardList>
          </CardBody>
          <CardFooter>
            <Button id={id}>Register</Button>
          </CardFooter>
        </ContentWrapper>
      </Section>
    </Container>
  )
}
