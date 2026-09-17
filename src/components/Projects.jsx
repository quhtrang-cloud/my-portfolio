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
    imageAlt:
      'Healthcare Booking System displayed on desktop and mobile',
    featured: true,
    path: '/projects/healthcare-booking-system',
  },
  {
    number: '02',
    title: 'Pompey Furniture Company',
    type: 'Full-Stack Web Application',
    context: 'Team Project',
    description:
      'A database-driven full-stack furniture retail platform developed to connect customer-facing services with multi-showroom inventory, product availability, orders, returns, loyalty programmes and role-based staff operations.',
    technologies: [
      'JavaScript',
      'Node.js',
      'Express.js',
      'PostgreSQL',
    ],
    image: pompeyImage,
    imageAlt:
      'Pompey Furniture Company retail management system interface',
    featured: false,
    path: '/projects/furniture-retail-management-system',
  },
  {
    number: '03',
    title: 'Hampshire Festival App',
    type: 'UX/UI Design',
    context: 'Team Project',
    description:
      'A role-based mobile prototype developed through user analysis, task modelling, low- and high-fidelity design, and heuristic evaluation to support festival discovery, planning and event management.',
    technologies: [
      'Figma',
      'User Analysis',
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

function ProjectAction() {
  return (
    <span className="project-link">
      View Project
      <FaArrowRight aria-hidden="true" />
    </span>
  )
}

function ProjectCard({ project, featured = false }) {
  if (!project.path) {
    return null
  }

  return (
    <Link
      to={project.path}
      className={`project-card ${
        featured ? 'project-featured' : 'project-small'
      }`}
      aria-label={`View ${project.title} project`}
    >
      <div
        className={`project-image ${
          featured ? 'project-featured-image' : ''
        }`}
      >
        <img
          src={project.image}
          alt={project.imageAlt}
        />
      </div>

      <div className="project-content">
        <div className="project-meta">
          <span className="project-number">
            {project.number}
          </span>

          {featured && (
            <span className="featured-label">
              Featured
            </span>
          )}
        </div>

        <h3>{project.title}</h3>

        <p className="project-type">
          {project.type}

          {project.context && (
            <>
              <span
                className="project-dot"
                aria-hidden="true"
              >
                •
              </span>

              {project.context}
            </>
          )}
        </p>

        <p className="project-description">
          {project.description}
        </p>

        <div className="project-technologies">
          {project.technologies.map((technology) => (
            <span key={technology}>
              {technology}
            </span>
          ))}
        </div>

        <ProjectAction />
      </div>
    </Link>
  )
}

function Projects() {
  const featuredProject = projects.find(
    (project) => project.featured
  )

  const otherProjects = projects.filter(
    (project) => !project.featured
  )

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

      {featuredProject && (
        <ProjectCard
          project={featuredProject}
          featured
        />
      )}

      <div className="projects-grid">
        {otherProjects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects
