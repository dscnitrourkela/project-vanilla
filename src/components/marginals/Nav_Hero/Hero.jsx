import HeroCont, { Img1, Img2, MainFrame, MainImg, RegImgCont, RegisterCont } from './Hero.style'

const Hero = () => {
  return (
    <HeroCont>
      <section>
        <MainFrame>
          <MainImg
            src="https://res.cloudinary.com/dqqyuvg1v/image/upload/v1717683326/Frame-h-m_rb3rh9.png"
            alt="Main Frame"
          />
        </MainFrame>
      </section>
      <RegisterCont>
        <RegImgCont>
          <Img1
            src="https://res.cloudinary.com/dqqyuvg1v/image/upload/v1717683299/Group_2_rfdbbh.png"
            alt="Back"
          />
          <Img2
            src="https://res.cloudinary.com/dqqyuvg1v/image/upload/v1717683287/Vector_9_piw4n5.png"
            alt="Overlay"
          />
        </RegImgCont>
      </RegisterCont>
    </HeroCont>
  )
}

export default Hero
