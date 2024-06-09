
import NavHero from '../components/marginals/Nav_Hero/NavHero'
import { Sponsors } from '../components/sponsors/sponsors'
import { TeamCarousel } from '../components/teamMembers/teamCarousel'
import Footer from '../components/marginals/footer/Footer'

const Playground = () => {
  return (
    <div>
      <h1>Playground page</h1>
      <p>For testing purpose</p>
      <NavHero />
      <TeamCarousel />
      <Sponsors />
      <Footer />
    </div>
  )
}

export default Playground
