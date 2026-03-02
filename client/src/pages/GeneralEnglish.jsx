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
        <ProgramDuration  frhstH3="16 Total Levels" frhstP="A0 to B1" secoundH3="3× Days" secoundP="Per Week" thirdH3="1 Hour" thirdP="Per Session" fourthH3="10 Session" fourthP="Per Level" students="Max 6 Students Per Group" live="Live Zoom Sessions" recorded="Recorded for 1 Week" date="Flexible Schedule Options" />
        <LearningJurny2 />
        <OutMethology />
        <Comments />
        <Footer2 /> 
    </div>
  )
}

export default KidsEnglishProgram