import '../components/courses/Course.css'
import NavBar from '../layouts/NavBar/NavBar'
import KidsHero from '../components/courses/KidsHero'
import Comments from '../components/home/Comments'
import Footer2 from '../components/courses/Footer2'
import CompleteEnglishJourney from '../components/courses/CompleteEnglishJourney'
import CourseFor from '../components/courses/CourseFor1'
import ProgramDuration from '../components/courses/ProgramDuration'
import LearningJourney3 from '../components/courses/LearningJourney3'

const KidsEnglishProgram = () => {
  return (
    <div>
        <NavBar  isHome={false}/>
        <KidsHero title1="Speaking" title2="Course" span="For Adults" p="Develop real fluency through personalized 1:1 coaching. Build confidence for professional settings, daily conversations, and achieving your personal goals." image="course4.svg" span1="Ages 16+" span2="📡 Live Zoom Classes" span3="👥 1:1 Private Training" />
        <CourseFor />
        <CompleteEnglishJourney />
        <ProgramDuration />
        <LearningJourney3 />
        <Comments />
        <Footer2 /> 
    </div>
  )
}

export default KidsEnglishProgram