import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa6'

import healthcareImage from '../assets/projects/healthcare.jpg'
import pompeyImage from '../assets/projects/pompey.jpg'
import hampshireImage from '../assets/projects/hampshire.jpg'

const projects = [
  {
    number: '01',
    title: 'Healthcare Booking System',
    type: 'Full-Stack Web Application',
    description:
      'A full-stack healthcare booking system featuring city-wide appointment search, intelligent scheduling, appointment swapping and Google Calendar integration.',
    technologies: [
      'JavaScript',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'Google Calendar API',
    ],
    image: healthcareImage,
    imageAlt: 'Healthcare Booking System displayed on desktop and mobile',
    featured: true,
    path: '/projects/healthcare-booking-system',
  },
  {
    number: '02',
    title: 'Pompey Furniture Company',
    type: 'Full-Stack Web Application',
    context: 'Team Project',
    description:
      'A database-driven furniture retail system supporting multi-showroom inventory, customer orders, returns, loyalty and staff operations.',
    technologies: ['JavaScript', 'Node.js', 'Express.js', 'PostgreSQL'],
    image: pompeyImage,
    imageAlt: 'Pompey Furniture Company retail management system interface',
    featured: false,
    path: '/projects/furniture-retail-management-system',
  },
  {
    number: '03',
    title: 'Hampshire Festival App',
    type: 'UX/UI Design',
    context: 'Team Project',
    description:
      'An interactive mobile prototype developed through user analysis, task modelling, iterative prototyping and heuristic evaluation to support festival discovery, planning and event management.',
    technologies: [
      'Figma',
      'UX Research',
      'High-Fidelity Prototype',
      'Heuristic Evaluation',
    ],
    image: hampshireImage,
    imageAlt:
      'High-fidelity screens from the Hampshire Festival mobile application prototype',
    featured: false,
    path: '/projects/hampshire-festival-app',
  },
]

function ProjectLink({ path }) {
  if (!path) {
    return null
  }

  return (
    <Link to={path} className="project-link">
      View Project
      <FaArrowRight aria-hidden="true" />
    </Link>
  )
}

function Projects() {
  const featuredProject = projects.find((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <section
      className="projects section-container section-divider"
      id="projects"
    >
      <div className="section-heading projects-heading">
        <p className="section-label">Projects</p>
        <h2>Selected work.</h2>
        <p className="section-description">
          A selection of full-stack development and UX/UI projects.
        </p>
      </div>

      <article className="project-card project-featured">
        <div className="project-image project-featured-image">
          <img src={featuredProject.image} alt={featuredProject.imageAlt} />
        </div>

        <div className="project-content">
          <div className="project-meta">
            <span className="project-number">{featuredProject.number}</span>
            <span className="featured-label">Featured</span>
          </div>

          <h3>{featuredProject.title}</h3>
          <p className="project-type">{featuredProject.type}</p>
          <p className="project-description">{featuredProject.description}</p>

          <div className="project-technologies">
            {featuredProject.technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>

          <ProjectLink path={featuredProject.path} />
        </div>
      </article>

      <div className="projects-grid">
        {otherProjects.map((project) => (
          <article className="project-card project-small" key={project.title}>
            <div className="project-image">
              <img src={project.image} alt={project.imageAlt} />
            </div>

            <div className="project-content">
              <div className="project-meta">
                <span className="project-number">{project.number}</span>
              </div>

              <h3>{project.title}</h3>

              <p className="project-type">
                {project.type}
                {project.context && (
                  <>
                    <span className="project-dot" aria-hidden="true">
                      •
                    </span>
                    {project.context}
                  </>
                )}
              </p>

              <p className="project-description">{project.description}</p>

              <div className="project-technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <ProjectLink path={project.path} />
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
