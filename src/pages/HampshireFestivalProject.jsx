import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  FaArrowLeft,
  FaArrowRight,
  FaMagnifyingGlassPlus,
  FaXmark,
} from 'react-icons/fa6'

import ProjectSectionNav from '../components/ProjectSectionNav'
import BackToTop from '../components/BackToTop'

import authenticationImage from '../assets/projects/hampshire/hampshire-authentication.png'
import discoveryImage from '../assets/projects/hampshire/hampshire-discovery.png'
import eventDetailsTopImage from '../assets/projects/hampshire/hampshire-event-details-top.png'
import eventDetailsBottomImage from '../assets/projects/hampshire/hampshire-event-details-bottom.png'
import eventManagementImage from '../assets/projects/hampshire/hampshire-event-management.png'
import planningImage from '../assets/projects/hampshire/hampshire-planning.png'
import supportImage from '../assets/projects/hampshire/hampshire-support.png'
import useCaseImage from '../assets/projects/hampshire/hampshire-use-case.png'
import visitorPersona from '../assets/projects/hampshire/hampshire-persona-visitor.png'
import exhibitorPersona from '../assets/projects/hampshire/hampshire-persona-exhibitor.png'
import visitorHta from '../assets/projects/hampshire/hampshire-hta-visitor.png'
import staffExhibitorHta from '../assets/projects/hampshire/hampshire-hta-staff-exhibitor.png'
import adminHta from '../assets/projects/hampshire/hampshire-hta-admin.png'
import visitorLowFi from '../assets/projects/hampshire/hampshire-lowfi-visitor.png'
import eventEditingLowFi from '../assets/projects/hampshire/hampshire-lowfi-event-editing.png'
import adminLowFi from '../assets/projects/hampshire/hampshire-lowfi-admin.png'

const sectionNavItems = [
  { id: 'overview', label: 'Overview' },
  { id: 'research', label: 'Research' },
  { id: 'process', label: 'Design Process' },
  { id: 'prototype', label: 'Final Prototype' },
  { id: 'outcome', label: 'Outcome' },
]

const findings = [
  ['01', 'Navigation and consistency', 'The review highlighted inconsistent layouts and the need for clearer active states.'],
  ['02', 'Error prevention', 'Important actions required confirmation, cancellation and clearer recovery options.'],
  ['03', 'Recognition over recall', 'Key information, labels and guidance needed to remain visible at the point of use.'],
  ['04', 'Help and guidance', 'Error messages and contextual support needed to be easier to find and understand.'],
]

function VisualCard({ src, alt, label, eyebrow, onOpen, featured = false }) {
  return (
    <figure className={`hampshire-visual-card ${featured ? 'is-featured' : ''}`}>
      <button
        type="button"
        className="hampshire-image-button"
        onClick={() => onOpen(src, alt)}
        aria-label={`Enlarge ${label.toLowerCase()}`}
      >
        <img src={src} alt={alt} />
        <span className="hampshire-zoom-icon">
          <FaMagnifyingGlassPlus aria-hidden="true" />
        </span>
      </button>
      <figcaption>
        <span>{eyebrow}</span>
        <strong>{label}</strong>
      </figcaption>
    </figure>
  )
}

function PrototypeFeature({ number, title, text, tags, image, alt, onOpen, reverse = false }) {
  return (
    <article className={`hampshire-prototype-feature ${reverse ? 'is-reversed' : ''}`}>
      <div className="hampshire-prototype-copy">
        <span>{number}</span>
        <h3>{title}</h3>
        <p>{text}</p>
        <div className="solution-tags">
          {tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
      </div>
      <button
        type="button"
        className="hampshire-prototype-image"
        onClick={() => onOpen(image, alt)}
        aria-label={`Enlarge ${title.toLowerCase()} screens`}
      >
        <img src={image} alt={alt} />
        <span className="hampshire-zoom-icon">
          <FaMagnifyingGlassPlus aria-hidden="true" />
        </span>
      </button>
    </article>
  )
}

function HampshireFestivalProject() {
  const [zoomedImage, setZoomedImage] = useState(null)
  const openImage = (src, alt) => setZoomedImage({ src, alt })
  const closeImage = () => setZoomedImage(null)

  useEffect(() => {
    if (!zoomedImage) return undefined
    const handleKeyDown = (event) => event.key === 'Escape' && closeImage()
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [zoomedImage])

  return (
    <main className="project-page hampshire-project">
      <section className="case-hero section-container">
        <Link to="/" state={{ scrollTo: 'projects' }} className="case-back-link">
          <FaArrowLeft aria-hidden="true" /> Back to projects
        </Link>

        <div className="case-hero-header">
          <p className="case-eyebrow">03 / UX/UI DESIGN</p>
          <h1>Hampshire Festival App</h1>
          <p className="case-tagline">
            Designing a unified mobile experience for festival discovery,
            planning and event management.
          </p>
          <p className="case-intro">
            A mobile design project exploring how visitors and event teams
            could complete key festival tasks through one interface.
          </p>
        </div>

        <div className="case-meta">
          <div><span>Role</span><p>UX/UI Designer</p></div>
          <div><span>Project type</span><p>Team Project</p></div>
          <div><span>Year</span><p>2025</p></div>
          <div><span>Deliverable</span><p>High-Fidelity Prototype</p></div>
          <div className="case-meta-stack">
            <span>Tools &amp; methods</span>
            <p>
              Figma · Miro · draw.io · Personas · Use Case Modelling · Hierarchical Task
              Analysis · Low- and High-Fidelity Prototyping · Heuristic Evaluation
            </p>
          </div>
        </div>

        <div className="case-hero-image hampshire-hero-image">
          <button
            type="button"
            className="solution-image-button"
            onClick={() => openImage(discoveryImage, 'Hampshire Festival discovery screens')}
            aria-label="Enlarge Hampshire Festival discovery screens"
          >
            <img src={discoveryImage} alt="Hampshire Festival home, filter and search screens" />
            <span className="solution-image-zoom"><FaMagnifyingGlassPlus aria-hidden="true" /></span>
          </button>
        </div>
      </section>

      <ProjectSectionNav items={sectionNavItems} />

      <section id="overview" className="case-overview section-container hampshire-section">
        <div className="case-overview-layout">
          <div className="case-overview-heading">
            <p className="case-section-label">Overview</p>
            <h2>Connecting visitor journeys with festival operations.</h2>
          </div>
          <div className="case-overview-content">
            <p className="case-overview-lead">
              The concept combines event discovery and planning with tools for
              staff, exhibitors and administrators in one role-based mobile prototype.
            </p>
            <p>
              The interface organises functions around each user group&apos;s
              responsibilities, while shared navigation and feedback patterns
              support consistency across visitor and operational workflows.
            </p>
          </div>
        </div>

        <div className="hampshire-contribution">
          <p className="hampshire-block-label">My contribution</p>
          <p>
            I contributed to user analysis, personas, use-case modelling,
            Hierarchical Task Analysis, low-fidelity design and heuristic evaluation.
            I independently designed the high-fidelity prototype in Figma,
            translating the team&apos;s research into coherent screen sequences
            and clearly defined task flows.
          </p>
        </div>

        <div className="case-highlights hampshire-highlights">
          <article className="case-highlight">
            <span>01</span>
            <h3>Four user groups</h3>
            <p>
              Visitors, event staff, exhibitors and administrators were considered
              within the same system.
            </p>
          </article>

          <article className="case-highlight">
            <span>02</span>
            <h3>Research-informed workflows</h3>
            <p>
              Use cases and task analysis informed navigation, system states and
              role-specific journeys.
            </p>
          </article>

          <article className="case-highlight">
            <span>03</span>
            <h3>High-fidelity prototype</h3>
            <p>
              Screen sequences illustrate key journeys across discovery,
              planning, event management and support.
            </p>
          </article>
        </div>
      </section>

      <section id="research" className="section-container hampshire-section">
        <div className="case-section-layout">
          <div className="case-section-heading">
            <p className="case-section-label">Research</p>
            <h2>Understanding needs across the festival ecosystem.</h2>
          </div>
          <div>
            <p className="case-section-lead">
              User analysis identified distinct goals, access needs and levels of
              responsibility across visitor and operational roles.
            </p>
            <p className="case-section-text">
              Visitors needed accessible discovery and planning support. Staff and
              exhibitors required tools to manage event information and report issues,
              while administrators monitored kiosks, user accounts and server status.
            </p>
          </div>
        </div>

        <div
          className="hampshire-user-index"
          aria-label="Four primary user groups"
        >
          <div className="hampshire-user-count">
            <strong>4</strong>
            <span>Primary user groups</span>
          </div>

          <div className="hampshire-user-list">
            <p>Visitors</p>
            <p>Event staff</p>
            <p>Exhibitors</p>
            <p>Administrators</p>
          </div>
        </div>

        <div className="hampshire-subsection-heading">
          <p className="hampshire-block-label">Primary personas</p>
          <h3>Translating priority user needs into representative scenarios.</h3>
          <p>
            Two primary personas represented visitor and exhibitor perspectives,
            while staff and administrator requirements were examined through
            use-case modelling and task analysis.
          </p>
        </div>
        <div className="hampshire-persona-grid">
          <VisualCard src={visitorPersona} alt="Visitor persona for a family festival attendee" label="Family festival attendee" eyebrow="Visitor persona" onOpen={openImage} />
          <VisualCard src={exhibitorPersona} alt="Exhibitor persona for a festival event organiser" label="Festival event organiser" eyebrow="Exhibitor persona" onOpen={openImage} />
        </div>
      </section>

      <section id="process" className="section-container hampshire-section">
        <div className="case-section-layout">
          <div className="case-section-heading">
            <p className="case-section-label">Design Process</p>
            <h2>Moving from system scope to interface decisions.</h2>
          </div>
          <div>
            <p className="case-section-lead">
              Use-case modelling defined how each role interacted with the system,
              while task analysis clarified the steps behind key user goals.
            </p>
            <p className="case-section-text">
              Together, these models shaped navigation, content hierarchy and
              system states, providing a structured foundation for low-fidelity
              exploration while keeping early screen decisions aligned with each
              role&apos;s tasks.
            </p>
          </div>
        </div>

        <div className="hampshire-process-block hampshire-process-feature is-image-left hampshire-usecase-block">
          <div className="hampshire-subsection-heading">
            <p className="hampshire-block-label">01 / Defining the system</p>
            <h3>Mapping shared and role-specific functionality.</h3>
            <p>
              The use-case model clarified which interactions were shared and
              which depended on each role&apos;s responsibilities.
            </p>
          </div>
          <VisualCard src={useCaseImage} alt="Use case diagram showing four user roles and system interactions" label="Core interactions across four user roles" eyebrow="Use case model" onOpen={openImage} featured />
        </div>

        <div className="hampshire-process-block hampshire-hta-block">
          <div className="hampshire-process-feature is-image-right hampshire-hta-primary">
            <div className="hampshire-subsection-heading">
              <p className="hampshire-block-label">02 / Structuring key tasks</p>
              <h3>Breaking complex journeys into clear task paths.</h3>
              <p>
                Hierarchical Task Analysis broke key user goals into sequences,
                decision points and role-specific actions, helping define clearer
                navigation and system states.
              </p>
            </div>
            <VisualCard src={visitorHta} alt="Visitor Hierarchical Task Analysis" label="Visitor task flow" eyebrow="Primary journey" onOpen={openImage} featured />
          </div>
          <div className="hampshire-hta-supporting">
            <VisualCard src={staffExhibitorHta} alt="Staff and exhibitor Hierarchical Task Analysis" label="Staff and exhibitor task flow" eyebrow="Supporting journey" onOpen={openImage} />
            <VisualCard src={adminHta} alt="Administrator Hierarchical Task Analysis" label="Administrator task flow" eyebrow="Supporting journey" onOpen={openImage} />
          </div>
        </div>

        <div className="hampshire-process-block hampshire-lowfi-block">
          <div className="hampshire-process-feature is-image-left hampshire-lowfi-primary">
            <div className="hampshire-subsection-heading">
              <p className="hampshire-block-label">03 / Low-fidelity design</p>
              <h3>Exploring hierarchy and navigation before visual polish.</h3>
              <p>
                Early sketches mapped screen hierarchy, navigation relationships
                and workflow states before high-fidelity design.
              </p>
            </div>
            <VisualCard src={visitorLowFi} alt="Low-fidelity visitor workflow" label="Visitor experience" eyebrow="Primary workflow" onOpen={openImage} featured />
          </div>
          <div className="hampshire-lowfi-supporting">
            <VisualCard src={eventEditingLowFi} alt="Low-fidelity event-editing workflow" label="Event editing" eyebrow="Supporting workflow" onOpen={openImage} />
            <VisualCard src={adminLowFi} alt="Low-fidelity administrative workflow" label="Administrative operations" eyebrow="Supporting workflow" onOpen={openImage} />
          </div>
        </div>

        <div className="hampshire-process-block hampshire-process-feature is-image-right hampshire-evaluation-block">
          <div className="hampshire-subsection-heading">
            <p className="hampshire-block-label">04 / Evaluation and iteration</p>
            <h3>Identifying opportunities to improve usability.</h3>
            <p>
              The low-fidelity prototype was evaluated against Nielsen&apos;s
              usability heuristics. The review identified priorities for improving
              consistency, error prevention, information visibility and user guidance.
            </p>
          </div>
          <div className="hampshire-findings-grid">
            {findings.map(([number, title, text]) => (
              <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section id="prototype" className="section-container hampshire-section">
        <div className="case-section-layout">
          <div className="case-section-heading">
            <p className="case-section-label">Final Prototype</p>
            <h2>Key journeys in the final interface.</h2>
          </div>
          <div>
            <p className="case-section-lead">
              The high-fidelity prototype presents the core screens for discovering
              events, reviewing details, organising plans and managing event listings.
            </p>
            <p className="case-section-text">
              Selected flows are shown below, with enlarged views available for
              inspecting detailed screens and longer content.
            </p>
          </div>
        </div>

        <div className="hampshire-prototype-list">
          <PrototypeFeature number="01 / Discovery" title="Explore and filter nearby events" text="A map-led home screen supports location-based discovery, while category, date, age-group and price filters help visitors narrow the results." tags={['Map discovery', 'Search', 'Advanced filters']} image={discoveryImage} alt="Home, filter and event search screens" onOpen={openImage} />

          <article className="hampshire-event-detail-feature is-reversed">
            <div className="hampshire-event-detail-copy">
              <span>02 / Event details</span>
              <h3>Review essential information in one place</h3>
              <p>A single scrolling view brings together the event description, organiser details, ratings, reviews, location, recommendations and ticket actions.</p>
              <p className="hampshire-detail-note">
                One continuous screen, shown in two sections for readability.
              </p>
            </div>
            <div className="hampshire-event-detail-gallery" aria-label="Event details screen shown in two sections">
              <figure className="hampshire-event-detail-panel">
                <button type="button" onClick={() => openImage(eventDetailsTopImage, 'Upper section of the event details screen')} aria-label="Enlarge the event overview section">
                  <img src={eventDetailsTopImage} alt="Event overview with description and organiser information" />
                  <span className="hampshire-zoom-icon"><FaMagnifyingGlassPlus aria-hidden="true" /></span>
                </button>
                <figcaption>
                  <span>Overview</span>
                  <strong>Event information</strong>
                </figcaption>
              </figure>

              <figure className="hampshire-event-detail-panel">
                <button type="button" onClick={() => openImage(eventDetailsBottomImage, 'Lower section of the event details screen')} aria-label="Enlarge the location and ticketing section">
                  <img src={eventDetailsBottomImage} alt="Reviews, location, recommendations and ticket action" />
                  <span className="hampshire-zoom-icon"><FaMagnifyingGlassPlus aria-hidden="true" /></span>
                </button>
                <figcaption>
                  <span>Details</span>
                  <strong>Location and ticketing</strong>
                </figcaption>
              </figure>
            </div>
          </article>

          <PrototypeFeature
            number="03 / Personal planning"
            title="Organise saved events and tickets"
            text="Favourites and ticket views help visitors save events, review upcoming bookings and access previous tickets."
            tags={['Favourites', 'Tickets', 'Event recommendations']}
            image={planningImage}
            alt="Favourites and My Tickets screens"
            onOpen={openImage}
          />
          <PrototypeFeature
            number="04 / Event operations"
            title="Create and manage event listings"
            text="Staff and exhibitors can review and edit existing listings, enter event details and receive confirmation when a new event is created."
            tags={['Event listings', 'Event creation', 'Confirmation']}
            image={eventManagementImage}
            alt="Event listing, event creation and confirmation screens"
            onOpen={openImage}
            reverse
          />
        </div>

        <div className="hampshire-subsection-heading">
          <p className="hampshire-block-label">Supporting screens</p>
          <h3>Account access, preferences and issue reporting.</h3>
        </div>
        <div className="hampshire-supporting-grid">
          <VisualCard src={authenticationImage} alt="Login and registration screens" label="Login and registration" eyebrow="Access" onOpen={openImage} />
          <VisualCard src={supportImage} alt="Settings and issue-reporting screens" label="Preferences and issue reporting" eyebrow="Support" onOpen={openImage} />
        </div>
      </section>

      <section id="outcome" className="case-reflection section-container hampshire-section">
        <div className="case-section-layout">
          <div className="case-section-heading">
            <p className="case-section-label">Outcome</p>
            <h2>What I learned from the project.</h2>
          </div>
          <div className="case-reflection-intro">
            <p className="case-section-lead">
              The project strengthened my ability to translate research findings
              and task models into structured interface decisions.
            </p>
            <p className="case-section-text">
              It also showed that a visually complete prototype is not necessarily
              a validated one; usability claims must reflect the evaluation methods used.
            </p>
          </div>
        </div>

        <div className="hampshire-reflection-grid">
          <article>
            <p className="hampshire-block-label">Design reflection</p>
            <p>
              Designing shared patterns across distinct workflows required careful
              prioritisation, consistent navigation and clear system feedback. This
              helped create a coherent experience without obscuring role-specific tasks.
            </p>
          </article>
          <article>
            <p className="hampshire-block-label">Prototype limitations</p>
            <p>
              The outcome was a high-fidelity design prototype rather than a
              production application. It was reviewed through heuristic evaluation
              but not tested with participants. Further work requires usability and
              accessibility testing before technical implementation.
            </p>
          </article>
        </div>
      </section>

      <section className="case-final-cta section-container">
        <p className="case-section-label">Continue exploring</p>
        <h2>Explore my web development projects.</h2>
        <Link to="/" state={{ scrollTo: 'projects' }} className="case-github-link">
          View all projects <FaArrowRight aria-hidden="true" />
        </Link>
      </section>

      <BackToTop />

      {zoomedImage && (
        <div className="image-lightbox" role="dialog" aria-modal="true" aria-label="Expanded project image" onClick={closeImage}>
          <button type="button" className="image-lightbox-close" onClick={closeImage} aria-label="Close expanded image"><FaXmark aria-hidden="true" /></button>
          <img src={zoomedImage.src} alt={zoomedImage.alt} onClick={(event) => event.stopPropagation()} />
        </div>
      )}
    </main>
  )
}

export default HampshireFestivalProject
