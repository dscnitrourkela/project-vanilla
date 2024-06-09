import About from '../components/about/About'
import Events from '../components/events/Events'
import { Sponsors } from '../components/sponsors/sponsors'
import { TeamCarousel } from '../components/teamMembers/teamCarousel'
import Footer from '../components/marginals/footer/Footer'

const Playground = () => {
  return (
    <div>
      <h1>Playground page</h1>
      <p>For testing purposes</p>
      <About />
      <Events />
      <TeamCarousel />
      <Sponsors />
      <Footer />
    </div>
  )
}

export default Playground
