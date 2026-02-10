import '../components/courses/Course.css'
import NavBar from '../layouts/NavBar/NavBar'
import KidsHero from '../components/courses/KidsHero'
import CourseFor from '../components/courses/CourseFor1'
import ProgramDuration from '../components/courses/ProgramDuration'
import Comments from '../components/home/Comments'
import Footer2 from '../components/courses/Footer2'
import OutMethology from '../components/courses/OutMethology'
import LearningJurny2 from '../components/courses/LearningJurny2'
import CompleteEnglishJourney from '../components/courses/CompleteEnglishJourney'

const KidsEnglishProgram = () => {
  return (
    <div>
        <NavBar  isHome={false}/>
        <KidsHero title1="General" title2="English" span="Program" p="Prepare your teen for school success, international exams, and future opportunities with our comprehensive English program designed for pre-teens and teenagers" image="course3.svg" span1="Ages 10-16" span2="📡 Live Zoom Classes" span3="👥 Max 6 Students" />
        <CompleteEnglishJourney />
        <ProgramDuration />
        <LearningJurny2 />
        <OutMethology />
        <Comments />
        <Footer2 /> 
    </div>
  )
}

export default KidsEnglishProgram