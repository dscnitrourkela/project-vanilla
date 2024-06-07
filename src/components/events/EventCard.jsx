import PropTypes from 'prop-types'
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
import { seeMoreIcon } from '../../config/content/events/events'

EventCard.propTypes = {
  event: PropTypes.shape({
    img: PropTypes.string,
    id: PropTypes.number,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    details: PropTypes.array
  }),
  handleSelectEvent: PropTypes.func
}
export default function EventCard({
  event: { img, id, title, subtitle, details },
  handleSelectEvent
}) {
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
            <CardModalBtn onClick={() => handleSelectEvent(id)}>
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
