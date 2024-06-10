import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import { aicheData } from '../../config/content/about/about'
import { Section, Title, Paragraph } from './aboutCarouselCard.styles'
import { AboutCarouselContainer } from './about.styles'

function AboutCarousel() {
  return (
    <AboutCarouselContainer>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        spaceBetween={30}
        pagination={{ clickable: true }}
      >
        {aicheData.map((details) => (
          <SwiperSlide key={details.title}>
            <Section>
              <Title>{details.title}</Title>
              <Paragraph>{details.description}</Paragraph>
            </Section>
          </SwiperSlide>
        ))}
      </Swiper>
    </AboutCarouselContainer>
  )
}

export default AboutCarousel
