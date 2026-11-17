import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  FaArrowRight,
  FaArrowUpRightFromSquare,
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa6'

import healthcareImage from '../assets/projects/healthcare.png'
import pompeyImage from '../assets/projects/furniture-homepage.png'
import hampshireImage from '../assets/projects/hampshire.jpg'
import portfolioImage from '../assets/projects/portfolio.png'
import ipTrackerImage from '../assets/projects/ip-address-tracker.png'
import rowmoraImage from '../assets/projects/rowmora.png'

const projects = [
  {
    number: '01',
    title: 'Healthcare Booking System',
    type: 'Full-Stack Web Application',
    context: 'Individual Project',
    role: 'I researched requirements, mapped user journeys, designed the interface, and developed the application and database.',
    quality:
      'I checked core workflows against requirements and added 27 Jest and Supertest tests covering authentication, scheduling rules and selected routes, with database queries and external services mocked.',
    description:
      'I built this prototype to explore more flexible GP appointment booking, with city-wide search, rule-based scheduling suggestions, administrator-approved appointment swaps and Google Calendar integration.',
    technologies: [
      'JavaScript',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'Jest / Supertest',
    ],
    image: healthcareImage,
    imageAlt: 'Preview of the Healthcare Booking System interface',
    path: '/projects/healthcare-booking-system',
  },
  {
    number: '02',
    title: 'Rowmora',
    type: 'Front-End Web Application',
    context: 'Personal Project',
    role: 'I designed and built the React and TypeScript application, from CSV/Excel import and column mapping to record comparison, issue review and downloadable results.',
    quality: 'I added checks for missing and duplicate matching keys, side-by-side field differences and Excel/CSV exports. The interface includes keyboard-operable controls and visible focus indicators.',
    qualityLabel: 'Data validation and accessibility',
    description: 'A responsive spreadsheet comparison tool that helps users match records, spot differences and investigate data that needs a closer look.',
    technologies: ['React', 'TypeScript', 'CSS Modules', 'PapaParse', 'Excel / CSV'],
    image: rowmoraImage,
    imageAlt: 'Rowmora showing column mapping, comparison summaries, records needing review and export options',
    liveUrl: 'https://rowmora-csv-compare.vercel.app/',
    sourceUrl: 'https://github.com/quhtrang-cloud/rowmora-data-reconciliation',
  },
  {
    number: '03',
    title: 'IP Address Tracker',
    type: 'Front-End Web Application',
    context: 'Personal Project',
    role: 'I built the React and TypeScript interface, integrated Leaflet maps and a server-side geolocation lookup, and implemented recent searches, theme persistence and request cancellation.',
    quality: 'I added 12 Playwright scenarios across Chromium, Firefox and WebKit covering lookups, validation, error feedback, saved history and request cancellation. API responses are mocked; GitHub Actions runs the checks and tests.',
    qualityLabel: 'Testing and workflow',
    description: 'A responsive IP address and domain lookup app showing approximate geolocation and network details on an interactive map, with recent searches and a public IP lookup option.',
    technologies: ['React', 'TypeScript', 'Leaflet', 'Vercel Functions', 'Playwright', 'GitHub Actions'],
    image: ipTrackerImage,
    imageAlt: 'IP Address Tracker showing search results and an interactive location map',
    liveUrl: 'https://ip-address-trac-lovat.vercel.app/',
    sourceUrl: 'https://github.com/quhtrang-cloud/ip-address-tracker',
  },
  {
    number: '04',
    title: 'Pompey Furniture Company',
    type: 'Full-Stack Web Application',
    context: 'Team Project',
    role: 'I coordinated project tasks, designed the database, wrote SQL reports and helped integrate application workflows.',
    quality:
      'I validated SQL queries and HTML/CSS, then independently strengthened access controls and payment data validation.',
    qualityLabel: 'Validation and security',
    description:
      'Our team built this prototype to manage customer orders, showroom stock, returns and delivery information, with role-based workflows for staff.',
    technologies: [
      'JavaScript',
      'Node.js',
      'Express.js',
      'PostgreSQL',
    ],
    image: pompeyImage,
    imageAlt: 'Preview of the Pompey Furniture Company website',
    path: '/projects/furniture-retail-management-system',
  },
  {
    number: '05',
    title: 'React Developer Portfolio',
    type: 'Front-End Web Application',
    context: 'Personal Project',
    role: 'I designed and built responsive React interfaces with reusable components, client-side routing and light/dark themes, then deployed the site to Vercel.',
    quality:
      'I added 12 Playwright tests on Chromium covering navigation, clipboard feedback and theme persistence. Type checks run during the build; interactions include keyboard navigation, visible focus states and reduced-motion support.',
    qualityLabel: 'Testing and accessibility',
    description:
      'I built this portfolio to present my web development, software testing and UX/UI projects through interactive previews and detailed case studies.',
    technologies: [
      'React',
      'JavaScript',
      'TypeScript',
      'Vite',
      'React Router',
      'CSS',
      'Playwright',
    ],
    image: portfolioImage,
    imageAlt:
      'Homepage of Quynh Trang Nguyen’s React developer portfolio in dark mode',
    sourceUrl: 'https://github.com/quhtrang-cloud/my-portfolio',
  },
  {
    number: '06',
    title: 'Hampshire Festival App',
    type: 'UX/UI Design',
    context: 'Team Project',
    role: 'I contributed to user analysis and task modelling, then independently created the high-fidelity prototype in Figma.',
    quality:
      'I contributed to heuristic evaluation to identify usability issues in the proposed user journeys.',
    description:
      'Our team explored how a mobile app could help visitors discover festivals and plan their visit, while supporting event management.',
    technologies: [
      'Figma',
      'User Analysis',
      'High-Fidelity Prototype',
      'Heuristic Evaluation',
    ],
    image: hampshireImage,
    imageAlt:
      'High-fidelity screens from the Hampshire Festival App prototype',
    path: '/projects/hampshire-festival-app',
  },
]

// Featured side previews on the opening slide. Navigation stays sequential.
const featuredLeftIndex = 1 // Rowmora
const featuredRightIndex = 2 // IP Address Tracker

function ProjectPreview({ project }) {
  const content = (
    <>
      <div className="work-browser-bar" aria-hidden="true">
        <span />
        <span />
        <span />
        <p>{project.liveUrl ? 'Open live demo' : project.sourceUrl ? 'View source' : 'View case study'}</p>
        {project.sourceUrl || project.liveUrl ? (
          <FaArrowUpRightFromSquare />
        ) : (
          <FaArrowRight />
        )}
      </div>

      <div className="work-image-canvas">
        <img
          src={project.image}
          alt={project.imageAlt}
          decoding="async"
        />
      </div>
    </>
  )

  if (project.liveUrl || project.sourceUrl) {
    const previewUrl = project.liveUrl || project.sourceUrl
    const previewLabel = project.liveUrl
      ? `Open ${project.title} live demo (opens in a new tab)`
      : `View ${project.title} source on GitHub (opens in a new tab)`

    return (
      <a
        href={previewUrl}
        className="work-active-image"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={previewLabel}
      >
        {content}
      </a>
    )
  }

  return (
    <Link
      to={project.path}
      className="work-active-image"
      aria-label={`View ${project.title} case study`}
    >
      {content}
    </Link>
  )
}

function ProjectAction({ project }) {
  if (project.sourceUrl) {
    return (
      <a
        href={project.sourceUrl}
        className="work-case-link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${project.title} source on GitHub (opens in a new tab)`}
      >
        View source
        <FaArrowUpRightFromSquare aria-hidden="true" />
      </a>
    )
  }

  return (
    <Link to={project.path} className="work-case-link">
      View case study
      <FaArrowRight aria-hidden="true" />
    </Link>
  )
}

function Projects() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeProject = projects[activeIndex]

  const qualityLabel =
    activeProject.qualityLabel ||
    (activeProject.type === 'UX/UI Design'
      ? 'How I reviewed it'
      : 'How I tested it')

  // On the opening slide, the side images highlight two strong projects.
  // Arrow navigation always follows the numbered order and wraps at the ends.
  const previousIndex = (activeIndex - 1 + projects.length) % projects.length
  const nextIndex = (activeIndex + 1) % projects.length
  const leftPreviewIndex = activeIndex === 0 ? featuredLeftIndex : previousIndex
  const rightPreviewIndex = activeIndex === 0 ? featuredRightIndex : nextIndex

  const changeProject = (direction) => {
    setActiveIndex((current) =>
      (current + direction + projects.length) % projects.length,
    )
  }

  const handleGalleryKeyDown = (event) => {
    if (event.target.closest('a, button, input, textarea, select')) return
    if (
      event.altKey ||
      event.ctrlKey ||
      event.metaKey ||
      event.shiftKey
    ) {
      return
    }

    if (
      event.key === 'ArrowLeft' ||
      event.key === 'ArrowRight'
    ) {
      event.preventDefault()
      changeProject(event.key === 'ArrowRight' ? 1 : -1)
    }
  }

  return (
    <section
      className="projects section-container section-divider work-gallery"
      id="projects"
      aria-labelledby="selected-work-title"
    >
      <div className="work-gallery-heading">
        <div className="section-heading projects-heading">
          <p className="section-label">Selected projects</p>
          <h2 id="selected-work-title">
            From ideas to interfaces.
          </h2>
          <p className="section-description">
            A few projects I’ve worked on, from building web
            applications to exploring user experience.
          </p>
        </div>

        <span className="work-gallery-count">
          {projects.length} projects
        </span>
      </div>

      <div
        className="work-gallery-viewer"
        role="region"
        aria-roledescription="carousel"
        aria-label="Selected projects"
        aria-description="Side images are clickable project shortcuts. Previous and Next move through the numbered projects in a loop."
        onKeyDown={handleGalleryKeyDown}
      >
        <div className="work-gallery-stage">
          {projects.map((project, index) => {
            const isActive = index === activeIndex
            const isPrevious = index === leftPreviewIndex
            const isNext = index === rightPreviewIndex

            if (!isActive && !isPrevious && !isNext) {
              return null
            }

            const position = isActive
              ? 'center'
              : isPrevious
                ? 'left'
                : 'right'

            return (
              <div
                key={project.number}
                className={`work-slide work-slide-${position}`}
              >
                {isActive ? (
                  <ProjectPreview project={project} />
                ) : (
                  <button
                    type="button"
                    className={`work-preview work-preview-${position}`}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Show project ${project.number}: ${project.title}`}
                  >
                    <img
                      src={project.image}
                      alt=""
                      decoding="async"
                    />
                  </button>
                )}
              </div>
            )
          })}
        </div>

        <div className="work-gallery-controls">
          <button
            type="button"
            className="work-arrow"
            onClick={() => changeProject(-1)}
            aria-label={`Previous project: ${projects[previousIndex].title}`}
          >
            <FaChevronLeft aria-hidden="true" />
          </button>

          <p className="work-position">
            <span>{activeProject.number}</span>
            {' / '}
            {String(projects.length).padStart(2, '0')}
          </p>

          <button
            type="button"
            className="work-arrow"
            onClick={() => changeProject(1)}
            aria-label={`Next project: ${projects[nextIndex].title}`}
          >
            <FaChevronRight aria-hidden="true" />
          </button>
        </div>

        <p
          className="work-screen-reader"
          aria-live="polite"
          aria-atomic="true"
        >
          Selected project {activeProject.number} of {String(projects.length).padStart(2, '0')}: {' '}
          {activeProject.title}
        </p>

        <div className="work-project-layout">
          <div
            className="work-project-selector"
            role="group"
            aria-label="Choose a project"
          >
            {projects.map((project, index) => (
              <button
                type="button"
                key={project.number}
                className={
                  activeIndex === index ? 'is-active' : ''
                }
                aria-pressed={activeIndex === index}
                aria-controls="project-summary"
                onClick={() => setActiveIndex(index)}
              >
                <span>{project.number}</span>
                {project.title}
              </button>
            ))}
          </div>

          <div
            className="work-project-details"
            id="project-summary"
          >
            <div
              className="work-details-content"
              key={activeProject.number}
            >
              <p className="work-project-type">
                {activeProject.type}
                <span aria-hidden="true"> / </span>
                {activeProject.context}
              </p>

              <h3>{activeProject.title}</h3>

              <p className="work-project-description">
                {activeProject.description}
              </p>

              <div className="work-project-evidence">
                <p className="work-project-role">
                  <strong>What I worked on</strong>
                  {activeProject.role}
                </p>

                <p className="work-project-proof">
                  <strong>{qualityLabel}</strong>
                  {activeProject.quality}
                </p>
              </div>

              <ul
                className="work-project-technologies"
                aria-label="Technologies and methods"
              >
                {activeProject.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </div>

            <ProjectAction project={activeProject} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects