import { Route, Routes, useLocation } from "react-router-dom"
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
import OTPVerify from './pages/OTPVerify';
import AdminDashboard from "./pages/AdminDashboard"


const App = () => {

  const location = useLocation();
  
  const adminRoutes = ['/admin/verify', '/admin/dashboard'];
  const showFooter = !adminRoutes.includes(location.pathname);

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
        <Route path="/student/:id" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Home />} />
        <Route path="/admin/verify" element={<OTPVerify />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
      {showFooter && <Footer />}
    </>
  )
}

export default App