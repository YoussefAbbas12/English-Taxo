import '../components/about/About.css'
import AboutHero from '../components/about/AboutHero'
import Founder from '../components/about/Founder'
import How from '../components/about/How'
import OurStory from '../components/about/OurStory'
import Vision from '../components/about/Vision'
import NavBar from '../layouts/NavBar/NavBar'
import Ready from '../layouts/Ready'
const About = () => {
  return (
    <div>
      <NavBar  isHome={false}/>
      <AboutHero />
      <OurStory />
      <Vision />
      <How />
      <Founder />
      <Ready />
    </div>
  )
}

export default About
