import tw from 'twin.macro'
import styled from 'styled-components'


export const SponsorsContainer = styled.div`
${tw`bg-brown-2 h-[410px] pt-[70px] `}
`
export const Icon = styled.div(({ style, url }) => ({
  backgroundImage: `url(${url})`,
  ...style // Correctly spread the style object properties
}));