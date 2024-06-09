import HeroCont, { Img1, Img2, MainFrame, MainImg, RegImgCont, RegisterCont } from './Hero.style'
import { links } from '../../../config/content/Nav_Hero'
const Hero = () => {
  return (
    <HeroCont>
      <section>
        <MainFrame>
          <MainImg src={links.main} alt="Main Frame" />
        </MainFrame>
      </section>
      <RegisterCont>
        <RegImgCont>
          <Img1 src={links.registernow} alt="Back" />
          <Img2 src={links.down} alt="Overlay" />
        </RegImgCont>
      </RegisterCont>
    </HeroCont>
  )
}

export default Hero
