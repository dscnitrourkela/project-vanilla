import About from '../components/about/About'
import Events from '../components/events/Events'
import NavHero from '../components/marginals/Nav_Hero/NavHero'
import { Sponsors } from '../components/sponsors/sponsors'
import { TeamCarousel } from '../components/teamMembers/teamCarousel'
import Footer from '../components/marginals/footer/Footer'
import { Faq } from '../components/faq/faq'
import { RegistrationHelp } from '../components/registrationHelp/registrationhelp'
import { Leads } from '../components/leads/leads'

const Home = () => {
  return (
    <div>
      <NavHero />
      <About />
      <Events />
      <RegistrationHelp />
      <TeamCarousel />
      <Leads />
      <Sponsors />
      <Faq />
      <Footer />
    </div>
  )
}

export default Home
