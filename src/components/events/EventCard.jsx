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
  CardFooter,
  CardModalBtn,
  SeemoreIcon
} from './eventCard.styles'
import { seeMoreIcon } from '../../../config/content/events'
export default function EventCard({ img, id, title, subtitle, details }) {
  function genDetails(str, length) {
    str = str.trim()
    if (str.length > length) {
      return str.slice(0, length - 3) + '...'
    } else {
      return str
    }
  }

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
              <li>{genDetails(details[0], 220)}</li>
            </CardList>
            <CardModalBtn>
              <span>See More</span>
              <SeemoreIcon src={seeMoreIcon} />
            </CardModalBtn>
          </CardBody>
          <CardFooter>
            <Button id={id}>Register</Button>
          </CardFooter>
        </ContentWrapper>
      </Section>
    </Container>
  )
}
