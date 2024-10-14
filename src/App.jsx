import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Home from "./Components/home/Home";
import AboutMe from "./Components/about me/AboutMe"

import About from "./Components/About";
import Certifications from "./Components/Certifications";
import Certi from "./Components/certifications/Certi";

import Projects from "./Components/Projects";
import Work from "./Components/Work/Work"
import Contact from "./Components/Contact";
import ContactMe from "./Components/contact me/ContactMe";
function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Home/>}/>
    
    <Route path="/about" element={<AboutMe/>}/>
    
    <Route path="/projects" element={<Work/>}/>
    <Route path="/contact" element={<ContactMe/>}/>
    <Route path="/certifications" element={<Certi/>}/>

    </Routes>
    
    </>
  );
}

export default App;
