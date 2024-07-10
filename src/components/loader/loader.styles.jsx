import styled from 'styled-components'
import tw from 'twin.macro'

export const LoaderContainer = styled.div`
  ${tw` flex flex-col items-center gap-10 justify-center`}
`

export const LoaderText = styled.h1`
  ${tw`text-black-1 text-2xl font-semibold`}
`

export const Container = styled.div`
  ${tw`fixed top-0 left-0 w-full h-full bg-brown-2 backdrop-blur-md bg-opacity-50 grid place-items-center`}
  z-index: 1000;
`
