import { Route, Routes } from "react-router-dom"
import Footer from "./layouts/Footer"
import About from "./pages/About"
import Home from "./pages/Home"
import KidsPhonics from "./pages/KidsPhonics"
import GeneralEnglish from "./pages/GeneralEnglish"
import KidsEnglishProgram from "./pages/KidsEnglishProgram"


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/KidsPhonics" element={<KidsPhonics />} />
        <Route path="/KidsEnglishProgram" element={<KidsEnglishProgram />} />
        <Route path="/GeneralEnglish" element={<GeneralEnglish />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
