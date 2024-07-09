import { tailspin } from 'ldrs'

import { Container, LoaderContainer, LoaderText } from './loader.styles'

function Loader() {
  tailspin.register()
  return (
    <Container>
      <LoaderContainer>
        <l-tailspin size="40" stroke="5" speed="0.9" color="#402E32"></l-tailspin>
        <LoaderText>Please Wait Loading...</LoaderText>
      </LoaderContainer>
    </Container>
  )
}

export default Loader
