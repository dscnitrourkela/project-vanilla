import About from '../components/about/About'
import Events from '../components/events/Events'
import NavHero from '../components/marginals/Nav_Hero/NavHero'
import { Sponsors } from '../components/sponsors/sponsors'
import { TeamCarousel } from '../components/teamMembers/teamCarousel'
import Footer from '../components/marginals/footer/Footer'
import { Faq } from '../components/faq/faq'
import { TimeLine } from '../components/timeline/timeLine'
import { RegistrationHelp } from '../components/registrationHelp/registrationhelp'

const Playground = () => {
  return (
    <div>
      <NavHero />
      <About />
      <Events />
      <TimeLine />
      <RegistrationHelp />
      <TeamCarousel />
      <Sponsors />
      <Faq />
      <Footer />
    </div>
  )
}

export default Playground
