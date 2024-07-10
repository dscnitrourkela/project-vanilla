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
  Section
} from './FlagshipCard.styles'

export default function FlagshipCard() {
  return (
    <Container>
      <GradientContainer>
        <Ellipse />
        <Section>
          <ContentWrapper>
            <CardHeader>
              <CardImage
                src="https://res.cloudinary.com/dhv234qct/image/upload/v1720612216/AICHE_SRC/event_icons/flagship_mjcdj1.svg"
                alt="{title}"
              />
              <CardTitle>Flagship Event</CardTitle>
              <CardSubtitle>Ready Set go!! Unleash the Inner Engineer!</CardSubtitle>

              <CardHeaderText>Coming Soon...</CardHeaderText>
            </CardHeader>
          </ContentWrapper>
        </Section>
      </GradientContainer>
    </Container>
  )
}
