import About from '../components/about/About'
import Events from '../components/events/Events'
import NavHero from '../components/marginals/Nav_Hero/NavHero'
import { TeamCarousel } from '../components/teamMembers/teamCarousel'
import Footer from '../components/marginals/footer/Footer'
import { Faq } from '../components/faq/faq'
import { Leads } from '../components/leads/leads'
import { Schedule } from '../components/schedule/schedule'

const Home = () => {
  return (
    <div>
      <NavHero />
      <About />
      <Events />
      <Schedule />
      <Leads />
      <TeamCarousel />
      <Faq />
      <Footer />
    </div>
  )
}

export default Home
