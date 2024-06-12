import SmoothScroll from 'smooth-scroll'
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
import { links, heroContent } from '../../../config/content/navData/Nav_Hero'
const Hero = () => {
  const registerRefId = 'registerRefId'
  function newScrollObject() {
    return new SmoothScroll('', {
      offset: () => 100
    })
  }
  function handleScroll(id) {
    if (typeof window !== 'undefined' && id) {
      const isHome = window.location.pathname === '/' || window.location.pathname === '/playground'
      if (isHome) {
        const scroll = newScrollObject()
        const anchor = document.getElementById(id)
        if (anchor) {
          scroll.animateScroll(anchor)
        }
      }
    }
  }

  function onClick(id) {
    handleScroll(id)
    console.log(id)
  }

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
        <RegImgCont
          onClick={(e) => {
            e.preventDefault()
            onClick(registerRefId)
          }}
        >
          <Img1 src={links.registernow} alt="Back" />
          <Img2 src={links.down} alt="Overlay" />
        </RegImgCont>
      </RegisterCont>
    </HeroCont>
  )
}

export default Hero
