import { LoaderContainer } from './loader.styles'
import { tailspin } from 'ldrs'

function Loader() {
  tailspin.register()
  return (
    <LoaderContainer>
      <l-tailspin size="40" stroke="5" speed="0.9" color="#402E32"></l-tailspin>
    </LoaderContainer>
  )
}

export default Loader
