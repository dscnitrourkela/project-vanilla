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
            {subtitle !== '' && <CardSubtitle>{subtitle}</CardSubtitle>}
          </CardHeader>
          <CardBody>
            <CardList>
              {/* {details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))} */}
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur laborum,
                voluptate fuga sapiente vero maxime, adipisci fugiat tenetur, pariatur est tempora
                ab atque. Saepe natus quasi ipsam accusamus sint molestiae!
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex hic, fuga ipsam
                inventore ab consequatur? Sint et nostrum similique a saepe optio in aut sequi sed,
                sunt, porro autem incidunt.
              </li>
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
