import { Link } from 'react-router-dom'
import { FaArrowRight, FaBriefcase, FaGraduationCap, FaFlask } from 'react-icons/fa6'

function About() {
  return (
    <section className="about section-container section-divider about-personal" id="about" aria-labelledby="about-title">
      <div className="section-heading">
        <p className="section-label">About me</p>
        <h2 id="about-title">A little more about me.</h2>
      </div>

      <div className="about-personal-layout">
        <div className="about-personal-story">
          <p>I’m a graduate web developer who enjoys turning ideas into clear, easy-to-use interfaces. I work mainly with React and JavaScript, with project experience in full-stack development, UX design and software testing.</p>
          <p>Before moving into tech, I spent four years supporting a healthcare programme in Vietnam. This experience strengthened my organisation and stakeholder communication skills. I bring the same careful planning and collaborative approach to my development projects.</p>
          <p className="about-personal-note">Away from my laptop, I enjoy exploring new places and learning about their history.</p>
          <a className="about-personal-cta" href="#projects">Explore my projects <FaArrowRight aria-hidden="true" /></a>
        </div>

        <aside className="about-personal-facts" aria-label="Education, project testing and previous experience">
          <article className="about-personal-fact">
            <FaGraduationCap aria-hidden="true" />
            <div><h3>MSc with Distinction</h3><p>Information Systems · University of Portsmouth</p></div>
          </article>
          <article className="about-personal-fact">
            <FaFlask aria-hidden="true" />
            <div><h3>Project testing experience</h3><p>Manual workflow checks and automated tests using Jest and Supertest.</p><Link to="/projects/healthcare-booking-system">See a project example <FaArrowRight aria-hidden="true" /></Link></div>
          </article>
          <article className="about-personal-fact">
            <FaBriefcase aria-hidden="true" />
            <div><h3>4 years in programme planning</h3><p>Healthcare delivery support across 16 provinces in Vietnam.</p></div>
          </article>
        </aside>
      </div>
    </section>
  )
}

export default About
