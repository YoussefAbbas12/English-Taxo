import '../components/courses/Course.css'
import NavBar from '../layouts/NavBar/NavBar'
import KidsHero from '../components/courses/KidsHero'
import CourseFor from '../components/courses/CourseFor1'
import ProgramDuration from '../components/courses/ProgramDuration'
import Comments from '../components/home/Comments'
import Footer2 from '../components/courses/Footer2'
import OutMethology from '../components/courses/OutMethology'
import LearningJurny from '../components/courses/LearningJurny'

const KidsEnglishProgram = () => {
  return (
    <div>
        <NavBar  isHome={false}/>
        <KidsHero title1="Kids" title2="English" span="Program" p="Master all four language skills with our comprehensive, CEFR-aligned English curriculum designed for young learners" image="course2.svg" span1="Ages 5-10" span2="📡 Live Zoom Classes" span3="👥 Max 6 Students" />
        <CourseFor />
        <ProgramDuration />
        <LearningJurny />
        <OutMethology />
        <Comments />
        <Footer2 /> 
    </div>
  )
}

export default KidsEnglishProgram