import '../components/courses/Course.css'
import NavBar from '../layouts/NavBar/NavBar'
import KidsHero from '../components/courses/KidsHero'
import Comments from '../components/home/Comments'
import Footer2 from '../components/courses/Footer2'
import CompleteEnglishJourney2 from '../components/courses/CompleteEnglishJourney2'
import CourseFor3 from '../components/courses/CourseFor3'
import ProgramDuration from '../components/courses/ProgramDuration'
import LearningJourney3 from '../components/courses/LearningJourney3'

const KidsEnglishProgram = () => {
  return (
    <div>
        <NavBar  isHome={false}/>
        <KidsHero title1="Speaking" title2="Course" span="For Adults" p="Develop real fluency through personalized 1:1 coaching. Build confidence for professional settings, daily conversations, and achieving your personal goals." image="course4.svg" span1="Ages 16+" span2="📡 Live Zoom Classes" span3="👥 1:1 Private Training" />
        <CourseFor3 />
        <CompleteEnglishJourney2 />
        <ProgramDuration frhstH3="30 Total Levels" frhstP="A1 to C2" secoundH3="3× Days" secoundP="Per Week" thirdH3="1 Hour" thirdP="Per Session" fourthH3="10 Session" fourthP="Per Level" students="Private 1:1 Training" live="Live Zoom Sessions" recorded="Recorded for Review" date="70-80% Speaking Time" />
        <LearningJourney3 />
        <Comments />
        <Footer2 /> 
    </div>
  )
}

export default KidsEnglishProgram