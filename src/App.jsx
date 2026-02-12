import { Route, Routes } from "react-router-dom"
import Footer from "./layouts/Footer"
import About from "./pages/About"
import Home from "./pages/Home"
import News from "./pages/News"
import KidsPhonics from "./pages/KidsPhonics"
import GeneralEnglish from "./pages/GeneralEnglish"
import KidsEnglishProgram from "./pages/KidsEnglishProgram"
import SpeakingCourse from "./pages/SpeakingCourse"
import Dashboard from "./pages/Dashboard"
import Login from "./components/dashboard/Login"


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/KidsPhonics" element={<KidsPhonics />} />
        <Route path="/KidsEnglishProgram" element={<KidsEnglishProgram />} />
        <Route path="/GeneralEnglish" element={<GeneralEnglish />} />
        <Route path="/SpeakingCourse" element={<SpeakingCourse />} />
        <Route path="/Announcements" element={<News />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
