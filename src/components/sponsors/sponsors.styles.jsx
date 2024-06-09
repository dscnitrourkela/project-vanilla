import tw from 'twin.macro'
import styled from 'styled-components'

export const SponsorsContainer = styled.div`
  ${tw`bg-brown-2 pt-[70px] `}
`

export const IconContainer = styled.span(({ style }) => ({
  ...style
}))
export const Icon = styled.img(({ src, style }) => ({
  src: `url(${src})`,
  ...style
}))

export const SponsorsSectionHeading = styled.h1`
  ${tw`font-Poppins text-brown-4 text-[40px] font-bold 3md:text-[128px] 2.5md:text-[90px] 0.7xsm:text-[60px] pl-3`}
`
