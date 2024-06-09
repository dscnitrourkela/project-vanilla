import tw from 'twin.macro'
import styled from 'styled-components'

export const SponsorsContainer = styled.div`
  ${tw`bg-brown-2 h-[410px] pt-[70px] `}
`

export const IconContainer = styled.span(({ style }) => ({
  ...style
}))
export const Icon = styled.img(({ src, style }) => ({
  src: `url(${src})`,
  ...style
}))
