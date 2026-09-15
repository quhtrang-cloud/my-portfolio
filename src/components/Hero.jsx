import profileImage from '../assets/profile.jpg'

function Hero({ name, job }) {
  const nameLetters = name.split('')

  return (
    <section className="hero" id="home">
      <div className="hero-text">
        <p className="intro hero-reveal hero-delay-1">
          Hi, I&apos;m
        </p>

        <h1 className="hero-name" aria-label={name}>
          {nameLetters.map((letter, index) => (
            <span
              key={`${letter}-${index}`}
              aria-hidden="true"
              style={{
                animationDelay: `${0.2 + index * 0.1}s`,
              }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </span>
          ))}
        </h1>

        <h2 className="hero-job hero-reveal hero-delay-2">
          {job}
        </h2>

        <p className="hero-summary hero-reveal hero-delay-3">
          Building clean, responsive and accessible web experiences.
        </p>

        <p className="tech-stack hero-reveal hero-delay-4">
          Front-End focused • React • JavaScript • HTML • CSS • Node.js •
          PostgreSQL
        </p>

        <div className="hero-buttons hero-reveal hero-delay-5">
          <a href="#projects" className="primary-button">
            View Projects
          </a>

          <a
            href="/Quynh-Trang-Nguyen-CV.pdf"
            className="secondary-button"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Quynh Trang Nguyen's CV in a new tab"
          >
            View CV
          </a>
        </div>

        <a
          href="#about"
          className="scroll-indicator hero-reveal hero-delay-6"
          aria-label="Scroll to the About section"
        >
          <span className="mouse" aria-hidden="true">
            <span className="mouse-wheel" />
          </span>

          <span className="scroll-text">Scroll</span>
        </a>
      </div>

      <div className="hero-image hero-image-reveal">
        <div className="image-float">
          <div className="image-frame">
            <img
              src={profileImage}
              alt="Portrait of Quynh Trang Nguyen"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero