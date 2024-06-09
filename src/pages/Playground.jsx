import About from '../components/about/About'
import Events from '../components/events/Events'
import NavHero from '../components/marginals/Nav_Hero/NavHero'
import { Sponsors } from '../components/sponsors/sponsors'
import { TeamCarousel } from '../components/teamMembers/teamCarousel'
import Footer from '../components/marginals/footer/Footer'

const Playground = () => {
  return (
    <div>
      <NavHero />
      <About />
      <Events />
      <TeamCarousel />
      <Sponsors />
      <Footer />
    </div>
  )
}

export default Playground
