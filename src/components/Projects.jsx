import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaArrowUpRightFromSquare, FaChevronLeft, FaChevronRight } from 'react-icons/fa6'
import healthcareImage from '../assets/projects/healthcare.jpg'
import pompeyImage from '../assets/projects/furniture-homepage.png'
import hampshireImage from '../assets/projects/hampshire.jpg'
import portfolioImage from '../assets/projects/portfolio.png'

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
    description: 'Our team built this prototype to manage customer orders, showroom stock, returns and delivery information, with role-based workflows for staff.',
    technologies: ['JavaScript', 'Node.js', 'Express.js', 'PostgreSQL'],
    image: pompeyImage,
    imageAlt: 'Preview of the Pompey Furniture Company website',
    path: '/projects/furniture-retail-management-system',
  },
  {
    number: '03',
    title: 'React Developer Portfolio',
    type: 'Front-End Web Application',
    context: 'Personal Project',
    role: 'I designed the interface, built reusable React components and deployed the site. Features include client-side routing and a light/dark theme switch.',
    quality: 'I introduced TypeScript in selected components, with type checks integrated into the build. I also added keyboard navigation, visible focus states and reduced-motion support.',
    qualityLabel: 'Quality and accessibility',
    description: 'I built this responsive portfolio to present my web development and UX projects, with clear summaries and detailed case studies.',
    technologies: ['React', 'JavaScript', 'TypeScript', 'Vite', 'React Router', 'CSS'],
    image: portfolioImage,
    imageAlt: 'Homepage of Quynh Trang Nguyen’s React developer portfolio in dark mode',
    sourceUrl: 'https://github.com/quhtrang-cloud/my-portfolio',
  },
  {
    number: '04',
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
            const isNext = index === (activeIndex + 1) % projects.length
            if (!isActive && !isPrevious && !isNext) return null
            const position = isActive ? 'center' : isPrevious ? 'left' : 'right'
            return (
              <div key={project.number} className={`work-slide work-slide-${position}`}>
                {isActive ? (
                  project.sourceUrl ? (
                    <a href={project.sourceUrl} className="work-active-image" target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} source on GitHub (opens in a new tab)`}>
                      <div className="work-browser-bar" aria-hidden="true"><span /><span /><span /><p>Project preview</p><FaArrowUpRightFromSquare /></div>
                      <div className="work-image-canvas"><img src={project.image} alt={project.imageAlt} decoding="async" /></div>
                    </a>
                  ) : (
                    <Link to={project.path} className="work-active-image" aria-label={`View ${project.title} case study`}>
                      <div className="work-browser-bar" aria-hidden="true"><span /><span /><span /><p>Project preview</p><FaArrowRight /></div>
                      <div className="work-image-canvas"><img src={project.image} alt={project.imageAlt} decoding="async" /></div>
                    </Link>
                  )
                ) : (
                  <button type="button" className={`work-preview work-preview-${position}`} onClick={() => setActiveIndex(index)} aria-label={`Select project: ${project.title}`}>
                    <img src={project.image} alt="" decoding="async" />
                  </button>
                )}
              </div>
            )
          })}
        </div>

        <div className="work-gallery-controls">
          <button type="button" className="work-arrow" onClick={() => changeProject(-1)} aria-label="Previous project"><FaChevronLeft aria-hidden="true" /></button>
          <p className="work-position"><span>{activeProject.number}</span> / {String(projects.length).padStart(2, '0')}</p>
          <button type="button" className="work-arrow" onClick={() => changeProject(1)} aria-label="Next project"><FaChevronRight aria-hidden="true" /></button>
        </div>
        <p className="work-screen-reader" aria-live="polite" aria-atomic="true">Project {activeIndex + 1} of {projects.length}: {activeProject.title}</p>

        <div className="work-project-layout">
        <div className="work-project-selector" role="group" aria-label="Choose a project">
          {projects.map((project, index) => (
            <button type="button" key={project.number} className={activeIndex === index ? 'is-active' : ''} aria-pressed={activeIndex === index} aria-controls="project-summary" onClick={() => setActiveIndex(index)}>
              <span>{project.number}</span>{project.title}
            </button>
          ))}
        </div>

        <div className="work-project-details" id="project-summary">
          <div className="work-details-content" key={activeProject.number}>
          <p className="work-project-type">{activeProject.type}<span aria-hidden="true"> / </span>{activeProject.context}</p>
          <h3>{activeProject.title}</h3>
          <p className="work-project-description">{activeProject.description}</p>
          <div className="work-project-evidence">
            <p className="work-project-role"><strong>What I worked on</strong>{activeProject.role}</p>
            <p className="work-project-proof"><strong>{activeProject.qualityLabel || (activeProject.type === 'UX/UI Design' ? 'How I reviewed it' : 'How I tested it')}</strong>{activeProject.quality}</p>
          </div>
          <ul className="work-project-technologies" aria-label="Technologies and methods">
            {activeProject.technologies.map((technology) => <li key={technology}>{technology}</li>)}
          </ul>
          </div>
          {activeProject.sourceUrl ? (
            <a href={activeProject.sourceUrl} className="work-case-link" target="_blank" rel="noopener noreferrer" aria-label={`View ${activeProject.title} source on GitHub (opens in a new tab)`}>
              View source <FaArrowUpRightFromSquare aria-hidden="true" />
            </a>
          ) : (
            <Link to={activeProject.path} className="work-case-link">View case study <FaArrowRight aria-hidden="true" /></Link>
          )}
        </div>
        </div>

      </div>
    </section>
  )
}

export default Projects
