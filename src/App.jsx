import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import MotionEffects from './components/MotionEffects'
import HealthcareProject from './pages/HealthcareProject'
import FurnitureProject from './pages/FurnitureProject'
import HampshireFestivalProject from './pages/HampshireFestivalProject'

function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero name="Trang" job="Graduate Web Developer" />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

function App() {
  return (
    <>
      <ScrollToTop />
      <MotionEffects />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/healthcare-booking-system" element={<HealthcareProject />} />
        <Route path="/projects/furniture-retail-management-system" element={<FurnitureProject />} />
        <Route path="/projects/hampshire-festival-app" element={<HampshireFestivalProject />} />
      </Routes>
    </>
  )
}

export default App
