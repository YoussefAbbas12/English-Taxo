import '../components/courses/Course.css'
import NavBar from '../layouts/NavBar/NavBar'
import KidsHero from '../components/courses/KidsHero'
import CourseFor from '../components/courses/CourseFor1'
import OurMethodology from '../components/courses/OurMethodology'
import ProgramDuration from '../components/courses/ProgramDuration'
import Journey from '../components/courses/Journey'
import Comments from '../components/home/Comments'
import Footer2 from '../components/courses/Footer2'

const KidsPhonics = () => {
  return (
    <div>
        <NavBar  isHome={false}/>
        <KidsHero title1="Kids" title2="Phonics" span="Program" p="Master all four language skills with our comprehensive, CEFR-aligned English curriculum designed for young learners" image="course.svg" span1="Ages 4-8" span2="📡 Live Zoom Classes" span3="👥 Max 5 Students" />
        <CourseFor />
        <OurMethodology />
        <ProgramDuration />
        <Journey />
        <Comments />
        <Footer2 /> 
    </div>
  )
}

export default KidsPhonics