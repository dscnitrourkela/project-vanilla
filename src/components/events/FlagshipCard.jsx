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
                src="https://res.cloudinary.com/dmvdbpyqk/image/upload/v1717655995/kspdwtblyqcwoqqqeddc.svg"
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
