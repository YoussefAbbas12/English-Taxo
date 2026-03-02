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
        <ProgramDuration  frhstH3="9 Total Levels" frhstP="Level Zero + Levels 1-8" secoundH3="9 Months" secoundP="Complete Program" thirdH3="1 Hour" thirdP="Per Session" fourthH3="2-3 Session" fourthP="Per Week" students="Max 5 Students Per Group" live="Live Zoom Sessions" recorded="Recorded for 1 Week" />
        <Journey />
        <Comments />
        <Footer2 /> 
    </div>
  )
}

export default KidsPhonics