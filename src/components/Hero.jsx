import HeroTypewriter from './HeroTypewriter'
import profileImage from '../assets/profile.jpg'
import { FaArrowRight, FaArrowUpRightFromSquare } from 'react-icons/fa6'

function Hero({ name, job }) {
  return (
    <section className="hero portfolio-hero" id="home" aria-labelledby="portfolio-name">
      <div className="hero-text">
        <HeroTypewriter />
        <p className="portfolio-greeting">Hi, I'm</p>
        <h1 className="hero-name" id="portfolio-name" aria-label={name}>
          {Array.from(name).map((letter, index) => (
            <span className="portfolio-name-letter" key={`${letter}-${index}`} aria-hidden="true" style={{ animationDelay: `${0.15 + index * 0.12}s` }}>
              {letter === ' ' ? '\u00A0' : letter}
            </span>
          ))}<span className="portfolio-name-dot" aria-hidden="true">.</span></h1>
        <h2 className="hero-job">{job}</h2>
        <p className="hero-summary">I build responsive React interfaces, with project experience in full‑stack development and software testing.</p>
        <ul className="portfolio-tech-list" aria-label="Core technologies">
          {['React', 'JavaScript', 'TypeScript', 'Node.js', 'PostgreSQL'].map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
        <div className="hero-buttons">
          <a href="#projects" className="primary-button">Explore projects <FaArrowRight aria-hidden="true" /></a>
          <a href="/Quynh-Trang-Nguyen-CV.pdf?v=20261007-2300" className="secondary-button" target="_blank" rel="noopener noreferrer" aria-label="View Quynh Trang Nguyen's CV in a new tab">View CV <FaArrowUpRightFromSquare aria-hidden="true" /></a>
        </div>
      </div>
      <div className="portfolio-portrait">
        <div className="portfolio-portrait-frame">
          <img src={profileImage} alt="Portrait of Quynh Trang Nguyen" fetchPriority="high" decoding="async" />
        </div>
        <div className="portfolio-portrait-caption"><span>Open to junior opportunities</span><span>Based in the UK</span></div>
      </div>
      <a className="portfolio-scroll-cue" href="#about" aria-label="Scroll to the About section">
        <span className="portfolio-scroll-label">Scroll to explore</span>
        <span className="portfolio-scroll-track" aria-hidden="true">
          <span className="portfolio-scroll-dot" />
          <svg className="portfolio-scroll-arrow" viewBox="0 0 24 24" fill="none"><path d="M12 4v16m-6-6 6 6 6-6" /></svg>
        </span>
      </a>
    </section>
  )
}

export default Hero
