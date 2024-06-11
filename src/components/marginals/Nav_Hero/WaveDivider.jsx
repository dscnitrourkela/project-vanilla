import { Wave, WaveCont } from './WaveDivider.style'
import { links } from '../../../config/index'
const WaveDivider = () => {
  return (
    <WaveCont>
      <Wave src={links.wave} alt="Wave Divider" />
    </WaveCont>
  )
}

export default WaveDivider
