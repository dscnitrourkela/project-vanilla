
import About from '../components/about/About'
import Events from '../components/events/Events'
import { TeamCarousel } from '../components/teamMembers/teamCarousel'


const Playground = () => {
  return (
    <div>
      <About />
      <Events />
      <h1>Playground page</h1>
      <p>For testing purpose</p>
      <TeamCarousel />
    </div>
  )
}

export default Playground
