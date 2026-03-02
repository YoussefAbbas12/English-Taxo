import '../components/Home.css'
import NavBar from '../layouts/NavBar/NavBar'
import Hero from '../components/home/Hero'
import WhyUs from '../components/home/WhyUs'
import OurCourses from '../components/home/OurCourses'
import HowItWorks from '../components/home/HowItWorks'
import Payment from '../components/home/Payment'
import Comments from '../components/home/Comments'
import Questions from '../components/home/Questions'

const Home = () => {
  return (
    <div>
      <NavBar isHome={true} />
      <Hero />
      <WhyUs />
      <OurCourses />
      <HowItWorks />
      <Payment />
      <Comments />
      <Questions />      
    </div>
  )
}

export default Home
