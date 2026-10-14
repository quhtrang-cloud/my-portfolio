import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa6'
import healthcareImage from '../assets/projects/healthcare.jpg'
import pompeyImage from '../assets/projects/furniture-homepage.png'
import hampshireImage from '../assets/projects/hampshire.jpg'

const projects = [
  {
    number: '01',
    title: 'Healthcare Booking System',
    type: 'Full-Stack Web Application',
    context: 'Individual Project',
    role: 'I researched requirements, mapped user journeys, and developed the application and database.',
    quality: 'I checked key workflows against requirements and added 27 automated tests using Jest and Supertest.',
    description: 'I built this prototype to explore a simpler way to find and manage GP appointments, with scheduling suggestions, appointment swaps and Google Calendar integration.',
    technologies: ['JavaScript', 'Node.js', 'Express.js', 'PostgreSQL', 'Jest / Supertest'],
    image: healthcareImage,
    imageAlt: 'Preview of the Healthcare Booking System interface',
    path: '/projects/healthcare-booking-system',
  },
  {
    number: '02',
    title: 'Pompey Furniture Company',
    type: 'Full-Stack Web Application',
    context: 'Team Project',
    role: 'I coordinated project tasks, designed the database, wrote SQL reports and helped integrate application workflows.',
    quality: 'I validated SQL queries and HTML/CSS, then independently strengthened access controls and payment data validation.',
    description: 'Our team built this prototype to connect customer orders with showroom stock, returns and staff workflows.',
    technologies: ['JavaScript', 'Node.js', 'Express.js', 'PostgreSQL'],
    image: pompeyImage,
    imageAlt: 'Preview of the Pompey Furniture Company website',
    path: '/projects/furniture-retail-management-system',
  },
  {
    number: '03',
    title: 'Hampshire Festival App',
    type: 'UX/UI Design',
    context: 'Team Project',
    role: 'I contributed to user analysis and task modelling, then independently created the high-fidelity prototype in Figma.',
    quality: 'I contributed to heuristic evaluation to identify usability issues in the proposed user journeys.',
    description: 'Our team explored how a mobile app could help visitors discover festivals and plan their visit, while supporting event management.',
    technologies: ['Figma', 'User Analysis', 'High-Fidelity Prototype', 'Heuristic Evaluation'],
    image: hampshireImage,
    imageAlt: 'High-fidelity screens from the Hampshire Festival App prototype',
    path: '/projects/hampshire-festival-app',
  },
]

function Projects() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeProject = projects[activeIndex]
  const changeProject = (direction) => {
    setActiveIndex((current) => (current + direction + projects.length) % projects.length)
  }
  const handleGalleryKeyDown = (event) => {
    if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault()
      changeProject(event.key === 'ArrowRight' ? 1 : -1)
    }
  }

  return (
    <section className="projects section-container section-divider work-gallery" id="projects" aria-labelledby="selected-work-title">
      <div className="work-gallery-heading">
        <div className="section-heading projects-heading">
          <p className="section-label">Selected projects</p>
          <h2 id="selected-work-title">From ideas to interfaces.</h2>
          <p className="section-description">A few projects I’ve worked on, from building web applications to exploring user experience.</p>
        </div>
        <span className="work-gallery-count">{projects.length} projects</span>
      </div>

      <div className="work-gallery-viewer" role="region" aria-roledescription="carousel" aria-label="Selected projects" onKeyDown={handleGalleryKeyDown}>
        <div className="work-gallery-stage">
          {projects.map((project, index) => {
            const isActive = index === activeIndex
            const isPrevious = index === (activeIndex - 1 + projects.length) % projects.length
            const position = isActive ? 'center' : isPrevious ? 'left' : 'right'
            return (
              <div key={project.number} className={`work-slide work-slide-${position}`}>
                {isActive ? (
                  <Link to={project.path} className="work-active-image" aria-label={`View ${project.title} case study`}>
                    <div className="work-browser-bar" aria-hidden="true"><span /><span /><span /><p>Project preview</p><FaArrowRight /></div>
                    <div className="work-image-canvas"><img src={project.image} alt={project.imageAlt} decoding="async" /></div>
                  </Link>
                ) : (
                  <button type="button" className={`work-preview work-preview-${position}`} onClick={() => setActiveIndex(index)} aria-label={`Select project: ${project.title}`}>
                    <img src={project.image} alt="" decoding="async" />
                    <span className="work-preview-number" aria-hidden="true">{project.number}</span>
                  </button>
                )}
              </div>
            )
          })}
        </div>

        <div className="work-gallery-controls">
          <button type="button" className="work-arrow" onClick={() => changeProject(-1)} aria-label="Previous project"><FaChevronLeft aria-hidden="true" /></button>
          <p className="work-position"><span>{activeProject.number}</span> / 03</p>
          <button type="button" className="work-arrow" onClick={() => changeProject(1)} aria-label="Next project"><FaChevronRight aria-hidden="true" /></button>
        </div>
        <p className="work-screen-reader" aria-live="polite" aria-atomic="true">Project {activeIndex + 1} of {projects.length}: {activeProject.title}</p>

        <div className="work-project-details">
          <div className="work-details-content" key={activeProject.number}>
          <p className="work-project-type">{activeProject.type}<span aria-hidden="true"> / </span>{activeProject.context}</p>
          <h3>{activeProject.title}</h3>
          <p className="work-project-description">{activeProject.description}</p>
          <div className="work-project-evidence">
            <p className="work-project-role"><strong>What I worked on</strong>{activeProject.role}</p>
            <p className="work-project-proof"><strong>{activeProject.type === 'UX/UI Design' ? 'How I reviewed it' : 'How I tested it'}</strong>{activeProject.quality}</p>
          </div>
          <ul className="work-project-technologies" aria-label="Technologies and methods">
            {activeProject.technologies.map((technology) => <li key={technology}>{technology}</li>)}
          </ul>
          </div>
          <Link to={activeProject.path} className="work-case-link">View case study <FaArrowRight aria-hidden="true" /></Link>
        </div>

        <div className="work-project-selector" role="group" aria-label="Choose a project">
          {projects.map((project, index) => (
            <button type="button" key={project.number} className={activeIndex === index ? 'is-active' : ''} aria-pressed={activeIndex === index} onClick={() => setActiveIndex(index)}>
              <span>{project.number}</span>{project.title}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
