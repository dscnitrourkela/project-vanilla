import tw from 'twin.macro'
import styled from 'styled-components'

export const SponsorsContainer = styled.div`
  ${tw`bg-brown-2 pt-[45px] `}
`

export const IconContainer = styled.span(({ style }) => ({
  ...style
}))
export const Icon = styled.img(({ src, style }) => ({
  src: `url(${src})`,
  ...style
}))

export const InnerSponsorsContainer = styled.div`
  ${tw` flex flex-col 1.4lg:flex-row justify-center items-center`}
`

export const SponsorsSectionHeading = styled.h1`
  ${tw`font-Poppins text-brown-4 text-4.5xl font-bold 3md:text-8.5xl 2.5md:text-7.5xl 0.7xsm:text-6xl pl-3`}
`
