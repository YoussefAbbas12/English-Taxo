import '../components/courses/Course.css'
import NavBar from '../layouts/NavBar/NavBar'
import KidsHero from '../components/courses/KidsHero'
import CourseFor2 from '../components/courses/CourseFor2'
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
        <CourseFor2 />
        <ProgramDuration  frhstH3="26 Total Levels" frhstP="A0 to B1" secoundH3="3× Days" secoundP="Per Week" thirdH3="1 Hour" thirdP="Per Session" fourthH3="10 Session" fourthP="Per Level" students="Max 6 Students Per Group" live="Live Zoom Sessions" recorded="Recorded for 1 Week" date="Flexible Schedule Options" />
        <LearningJurny />
        <OutMethology />
        <Comments />
        <Footer2 /> 
    </div>
  )
}

export default KidsEnglishProgram