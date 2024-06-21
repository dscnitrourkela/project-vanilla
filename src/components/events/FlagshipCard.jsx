import {
  CardHeader,
  CardImage,
  CardTitle,
  CardSubtitle,
  Container,
  GradientContainer,
  Ellipse,
  CardHeaderText,
  ContentWrapper,
  Section,
  Button1
} from './FlagshipCard.styles'
import { eventss } from '../../config/content/events/events'

import PropTypes from 'prop-types'

import { useState } from 'react'
import { useEffect } from 'react'

export default function FlagshipCard({ handlerFlagshipEvent }) {
  const [EventId, setEventId] = useState('')

  useEffect(() => {
    setEventId(eventss.EventId)
  }, [])

  return (
    <Container>
      <GradientContainer>
        <Ellipse />
        <Section>
          <ContentWrapper>
            <CardHeader>
              <CardImage
                src="https://res.cloudinary.com/dmvdbpyqk/image/upload/v1717655995/kspdwtblyqcwoqqqeddc.svg"
                alt="{title}"
              />
              <CardTitle>Flagship Event</CardTitle>
              <CardSubtitle>Ready Set go!! Unleash the Inner Engineer!</CardSubtitle>

              <CardHeaderText>Coming Soon...</CardHeaderText>
            </CardHeader>
            <Button1 onClick={() => handlerFlagshipEvent(EventId)}> Register </Button1>
          </ContentWrapper>
        </Section>
      </GradientContainer>
    </Container>
  )
}

FlagshipCard.propTypes = {
  EventId: PropTypes.number,
  handlerFlagshipEvent: PropTypes.func
}
