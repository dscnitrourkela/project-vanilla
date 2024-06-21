import SmoothScroll from 'smooth-scroll'
import HeroCont, {
  MainFrame,
  MainImg,
  LogoImg,
  LogoCont,
  Presents,
  DateTime,
  InnerLogoCont,
  MainImgText
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
        <MainFrame
          onClick={(e) => {
            e.preventDefault()
            onClick(registerRefId)
          }}
        >
          <LogoCont>
            <InnerLogoCont>
              <LogoImg src={links.Alche} alt="Main Frame" />
              <LogoImg src={links.AlcheNITR} alt="Main Frame" />
            </InnerLogoCont>
            <Presents>{heroContent.Presents}</Presents>
            <MainImg src={links.main} alt="Main Frame" />
            <MainImgText>{heroContent.ImgText}</MainImgText>
            <DateTime>{heroContent.Dates}</DateTime>
          </LogoCont>
        </MainFrame>
      </section>
    </HeroCont>
  )
}

export default Hero
