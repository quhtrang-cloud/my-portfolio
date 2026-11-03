import HeroTypewriter from './HeroTypewriter'
import { FaArrowRight, FaArrowUpRightFromSquare } from 'react-icons/fa6'
import profileImage from '../assets/profile.jpg'

const technologies = ['React', 'JavaScript', 'TypeScript', 'Node.js', 'PostgreSQL']

function Hero({ name = 'Trang', job = 'Graduate Web Developer' }) {
  return (
    <section className="hero-intro section-container" id="home" aria-labelledby="portfolio-name">
      <div className="hero-intro-content">
        <HeroTypewriter />
        <p className="hero-intro-greeting">Hi, I&apos;m</p>
        <h1 className="hero-intro-name" id="portfolio-name" aria-label={name}>
          {Array.from(name).map((letter, index) => (
            <span className="hero-intro-letter" key={`${letter}-${index}`} aria-hidden="true" style={{ animationDelay: `${0.15 + index * 0.12}s` }}>
              {letter === ' ' ? '\u00A0' : letter}
            </span>
          ))}<span className="hero-intro-dot" aria-hidden="true">.</span>
        </h1>
        <h2 className="hero-intro-job">{job}</h2>
        <p className="hero-intro-summary">
          I build responsive interfaces with React and TypeScript, backed by project experience in full-stack development and software testing.
        </p>
        <ul className="hero-intro-technologies" aria-label="Core technologies">
          {technologies.map(technology => <li key={technology}>{technology}</li>)}
        </ul>
        <div className="hero-intro-actions">
          <a className="hero-intro-button hero-intro-button-primary" href="#projects">
            Explore projects <FaArrowRight aria-hidden="true" />
          </a>
          <a className="hero-intro-button hero-intro-button-secondary" href="/Quynh-Trang-Nguyen-CV.pdf?v=20261030" target="_blank" rel="noopener noreferrer" aria-label="View Quynh Trang Nguyen's CV in a new tab">
            View CV <FaArrowUpRightFromSquare aria-hidden="true" />
          </a>
        </div>
      </div>
      <figure className="hero-intro-portrait">
        <div className="hero-intro-artwork">
          <span className="hero-intro-dots" aria-hidden="true" />
          <div className="hero-intro-frame">
            <img src={profileImage} alt="Portrait of Quynh Trang Nguyen" fetchPriority="high" decoding="async" />
          </div>
          <div className="hero-intro-location">
            <span>Based in <br />the UK</span>
            <svg viewBox="0 0 80 60" fill="none" aria-hidden="true">
              <path d="M68 8C67 35 48 48 14 43" />
              <path d="m23 35-10 8 10 8" />
            </svg>
          </div>
        </div>
        <figcaption className="hero-intro-availability">
          <span aria-hidden="true" />Open to junior opportunities
        </figcaption>
      </figure>
      <a className="portfolio-scroll-cue" href="#about" aria-label="Scroll to the About section">
        <span className="portfolio-scroll-label">Scroll to explore</span>
        <span className="portfolio-scroll-track" aria-hidden="true">
          <span className="portfolio-scroll-dot" />
          <svg className="portfolio-scroll-arrow" viewBox="0 0 24 24" fill="none">
            <path d="M12 4v16m-6-6 6 6 6-6" />
          </svg>
        </span>
      </a>
    </section>
  )
}

export default Hero
