import HeroCont, { Img1, Img2, MainFrame, MainImg, RegImgCont, RegisterCont } from './Hero.style'

const Hero = () => {
  return (
    <HeroCont>
      <section>
        <MainFrame>
          <MainImg src="src/assets/Frame-h-m.png" alt="Main Frame" />
        </MainFrame>
      </section>
      <RegisterCont>
        <RegImgCont>
          <Img1 src="src/assets/Group 2.png" alt="Back" />
          <Img2 src="src/assets/Vector 9.png" alt="Overlay" />
        </RegImgCont>
      </RegisterCont>
    </HeroCont>
  )
}

export default Hero
