import About from '../components/about/About'
import Events from '../components/events/Events'
import NavHero from '../components/marginals/Nav_Hero/NavHero'
// import { Sponsors } from '../components/sponsors/sponsors'
import { TeamCarousel } from '../components/teamMembers/teamCarousel'
import Footer from '../components/marginals/footer/Footer'
import { Faq } from '../components/faq/faq'
// import { RegistrationHelp } from '../components/registrationHelp/registrationhelp'
import { Leads } from '../components/leads/leads'
import { Schedule } from '../components/schedule/schedule'
import { motion } from 'framer-motion'
const Home = () => {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 500 }}
      // exit={{ opacity: 0, y: 500 }}
      transition={{
        duration: 1,
        ease: [0.2, 1, 0.2, 1],
        delay: 0.5
      }}
    >
      <NavHero />
      <About />
      <Events />
      {/* <RegistrationHelp /> */}
      <Schedule />
      <Leads />
      <TeamCarousel />
      {/* <Sponsors /> */}
      <Faq />
      <Footer />
    </motion.div>
  )
}

export default Home
