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

import HealthcareProject from './pages/HealthcareProject'


function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero
          name="Trang"
          job="Graduate Web Developer"
        />

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

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/projects/healthcare-booking-system"
          element={<HealthcareProject />}
        />

      </Routes>
    </>
  )
}

export default App