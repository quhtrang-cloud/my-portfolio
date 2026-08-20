import profileImage from '../assets/profile.jpg'

function Hero({ name, job }) {
  const nameLetters = name.split('')

  return (
    <section className="hero" id="home">
      <div className="hero-text">
        <p className="intro">Hi, I'm</p>

        <h1 className="hero-name" aria-label={name}>
          {nameLetters.map((letter, index) => (
            <span
              key={`${letter}-${index}`}
              aria-hidden="true"
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </span>
          ))}
        </h1>

        <h2>{job}</h2>

        <p className="hero-summary">
          Building clean, responsive and accessible web experiences.
        </p>

        <p className="tech-stack">
          Front-End focused • React • JavaScript • HTML • CSS • Node.js •
          PostgreSQL
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-button">
            View Projects
          </a>

          <a
            href="/Quynh-Trang-Nguyen-CV.pdf"
            className="secondary-button"
            target="_blank"
            rel="noreferrer"
          >
            Download CV
          </a>
        </div>

        <a
          href="#about"
          className="scroll-indicator"
          aria-label="Scroll to About section"
        >
          <span className="mouse" aria-hidden="true">
            <span className="mouse-wheel"></span>
          </span>

          <span className="scroll-text">Scroll</span>
        </a>
      </div>

      <div className="hero-image">
        <div className="image-frame">
          <img src={profileImage} alt="Portrait of Trang" />
        </div>
      </div>
    </section>
  )
}

export default Hero