import {
  FaBriefcase,
  FaGraduationCap,
  FaLocationDot,
  FaLaptopCode,
} from 'react-icons/fa6'

function About() {
  return (
    <section
        className="about section-container section-divider"
        id="about"
    >
      <div className="section-heading">
        <p className="section-label">About me</p>
        <h2>A little bit about me.</h2>
      </div>

      <div className="about-layout">
        <div className="about-content">
          <p>
            I'm Trang, a graduate web developer with an MSc in Information
            Systems from the University of Portsmouth.
          </p>

          <p>
            I enjoy building responsive, accessible and user-friendly web
            applications using React and modern web technologies.
          </p>

          <p>
            Before moving into web development, I worked on a nationwide
            healthcare programme in Vietnam. That experience strengthened my
            communication, planning and problem-solving skills while working
            with different stakeholders.
          </p>

          <p>
            I'm particularly interested in front-end development and creating
            clean, intuitive interfaces that combine usability with thoughtful
            design.
          </p>
        </div>

        <div className="about-details">
          <article className="about-card">
            <FaBriefcase className="about-icon" aria-hidden="true" />

            <div>
              <h3>Experience</h3>
              <p>3+ years in a healthcare programme</p>
            </div>
          </article>

          <article className="about-card">
            <FaGraduationCap className="about-icon" aria-hidden="true" />

            <div>
              <h3>Education</h3>
              <p>MSc Information Systems</p>
            </div>
          </article>

          <article className="about-card">
            <FaLocationDot className="about-icon" aria-hidden="true" />

            <div>
              <h3>Location</h3>
              <p>Portsmouth, United Kingdom</p>
            </div>
          </article>

          <article className="about-card">
            <FaLaptopCode className="about-icon" aria-hidden="true" />

            <div>
              <h3>Looking for</h3>
              <p>Graduate and junior front-end roles</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default About