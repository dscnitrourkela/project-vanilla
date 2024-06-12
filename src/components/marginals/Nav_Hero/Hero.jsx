import HeroCont, {
  Img1,
  Img2,
  MainFrame,
  MainImg,
  RegImgCont,
  RegisterCont,
  LogoImg,
  LogoCont,
  Presents,
  DateTime,
  LogoInn,
  LogoImg1,
  And
} from './Hero.style'
import { links, heroContent } from '../../../config/content/Nav_Hero'
const Hero = () => {
  return (
    <HeroCont id="home">
      <section>
        <MainFrame>
          <LogoCont>
            <LogoInn>
              <LogoImg src={links.Alche} alt="Main Frame" />
              <And> & </And>
              <LogoImg1 src={links.alcheNitr} alt="Main Frame" />
            </LogoInn>

            <Presents>{heroContent.Presents}</Presents>
            <MainImg src={links.main} alt="Main Frame" />
            <DateTime>{heroContent.Dates}</DateTime>
          </LogoCont>
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
