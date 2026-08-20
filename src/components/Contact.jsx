import {
  FaArrowRight,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa6'

function Contact() {
  return (
    <section
      className="contact section-container"
      id="contact"
    >
      <div className="contact-layout">
        <div className="contact-intro">
          <p className="section-label">Contact</p>

          <h2>Let's connect.</h2>
        </div>

        <div className="contact-content">
          <p className="contact-description">
            I'm currently open to graduate and junior web
            development opportunities in the UK.
          </p>

          <a
            className="contact-cta"
            href="mailto:quhtrang@gmail.com"
          >
            Get in touch
            <FaArrowRight aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="contact-links">
        <a href="mailto:quhtrang@gmail.com">
          <div className="contact-link-left">
            <FaEnvelope aria-hidden="true" />
            <span>Email</span>
          </div>

          <span className="contact-link-value">
            quhtrang@gmail.com
          </span>

          <FaArrowRight
            className="contact-link-arrow"
            aria-hidden="true"
          />
        </a>

        <a
          href="https://www.linkedin.com/in/quynh-trang-nguyen-21a559334/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="contact-link-left">
            <FaLinkedin aria-hidden="true" />
            <span>LinkedIn</span>
          </div>

          <span className="contact-link-value">
            Connect with me
          </span>

          <FaArrowRight
            className="contact-link-arrow"
            aria-hidden="true"
          />
        </a>

        <a
          href="https://github.com/quhtrang-cloud"
          target="_blank"
          rel="noreferrer"
        >
          <div className="contact-link-left">
            <FaGithub aria-hidden="true" />
            <span>GitHub</span>
          </div>

          <span className="contact-link-value">
            View my code
          </span>

          <FaArrowRight
            className="contact-link-arrow"
            aria-hidden="true"
          />
        </a>
      </div>
    </section>
  )
}

export default Contact