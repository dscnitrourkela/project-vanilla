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
  DateTime
} from './Hero.style'
import { links } from '../../../config/content/Nav_Hero'
const Hero = () => {
  return (
    <HeroCont id="home">
      <section>
        <MainFrame>
          <LogoCont>
            <LogoImg src={links.logoipsum} alt="Main Frame" />
            <Presents>Presents</Presents>
            <MainImg src={links.main} alt="Main Frame" />
            <DateTime>18th - 20th August</DateTime>
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
