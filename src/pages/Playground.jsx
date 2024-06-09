import About from '../components/about/About'
import Events from '../components/events/Events'
import { TeamCarousel } from '../components/teamMembers/teamCarousel'

const Playground = () => {
  return (
    <div>
      <h1>Playground page</h1>
      <p>For testing purpose</p>
      <About />
      <Events />
      <TeamCarousel />
    </div>
  )
}

export default Playground
