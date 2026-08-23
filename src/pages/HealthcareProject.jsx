import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import {
  FaArrowLeft,
  FaArrowUpRightFromSquare,
  FaMagnifyingGlassPlus,
  FaXmark,
} from 'react-icons/fa6'

import healthcareImage from '../assets/projects/healthcare-responsive.png'

import discoveryImage from '../assets/projects/healthcare-discovery.png'
import swapImage from '../assets/projects/healthcare-swap.png'
import calendarImage from '../assets/projects/healthcare-calendar.png'
import chatbotImage from '../assets/projects/healthcare-chatbot.png'
import lighthouseImage from '../assets/projects/healthcare-lighthouse.png'


function HealthcareProject() {
  const [zoomedImage, setZoomedImage] = useState(null)


  const openImage = (src, alt) => {
    setZoomedImage({ src, alt })
  }


  const closeImage = () => {
    setZoomedImage(null)
  }


  useEffect(() => {
    if (!zoomedImage) {
      return undefined
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeImage()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [zoomedImage])


  return (
    <main className="project-page">

      {/* ===================================
          PROJECT HERO
      =================================== */}

      <section className="case-hero section-container">

        <Link
          to="/"
          state={{ scrollTo: 'projects' }}
          className="case-back-link"
        >
          <FaArrowLeft aria-hidden="true" />
          Back to projects
        </Link>


        <div className="case-hero-header">

          <p className="case-eyebrow">
            01 / Featured Project
          </p>

          <h1>
            Healthcare Booking System
          </h1>

          <p className="case-tagline">
            Designing a more flexible and accessible way
            to manage GP appointments.
          </p>

          <p className="case-intro">
            A full-stack web application exploring
            city-wide appointment discovery, scheduling
            flexibility and inclusive healthcare booking.
          </p>

          <a
            href="https://github.com/quhtrang-cloud/gpconnect-healthcare-booking-system"
            className="case-github-link"
            target="_blank"
            rel="noreferrer"
          >
            View GitHub

            <FaArrowUpRightFromSquare
              aria-hidden="true"
            />
          </a>

        </div>


        {/* Project metadata */}

        <div className="case-meta">

          <div>
            <span>Role</span>

            <p>
              Full-Stack Development & UX Design
            </p>
          </div>

          <div>
            <span>Project type</span>

            <p>
              MSc Dissertation Project
            </p>
          </div>

          <div>
            <span>Year</span>

            <p>
              2025
            </p>
          </div>

          <div>
            <span>Duration</span>

            <p>
              4 months
            </p>
          </div>

          <div className="case-meta-stack">

            <span>Tech stack</span>

            <p>
              Node.js · Express.js · PostgreSQL ·
              JavaScript · EJS · Bootstrap ·
              Google Calendar API
            </p>

          </div>

        </div>


        {/* Hero image */}

        <div className="case-hero-image">

          <img
            src={healthcareImage}
            alt="Healthcare Booking System homepage shown on desktop and mobile layouts"
          />

        </div>

      </section>


      {/* ===================================
          OVERVIEW
      =================================== */}

      <section className="case-overview section-container">

        <div className="case-overview-layout">

          <div className="case-overview-heading">

            <p className="case-section-label">
              Overview
            </p>

            <h2>
              A more flexible booking experience.
            </h2>

          </div>


          <div className="case-overview-content">

            <p className="case-overview-lead">
              The Healthcare Booking System is a
              full-stack prototype designed to give
              patients more control over how they find,
              book and manage GP appointments.
            </p>

            <p>
              The prototype combines appointment discovery,
              scheduling support and flexible booking
              management within a responsive and accessible
              patient experience.
            </p>

          </div>

        </div>


        <div className="case-highlights">

          <article className="case-highlight">

            <span>01</span>

            <h3>
              Wider discovery
            </h3>

            <p>
              Look beyond a single practice for suitable
              appointment options.
            </p>

          </article>


          <article className="case-highlight">

            <span>02</span>

            <h3>
              Smarter recommendations
            </h3>

            <p>
              Surface appointments that better match
              patient needs.
            </p>

          </article>


          <article className="case-highlight">

            <span>03</span>

            <h3>
              Flexible management
            </h3>

            <p>
              Give patients more control when plans
              change.
            </p>

          </article>

        </div>

      </section>


      {/* ===================================
          THE PROBLEM
      =================================== */}

      <section className="case-problem section-container">

        <div className="case-section-layout">

          <div className="case-section-heading">

            <p className="case-section-label">
              The Problem
            </p>

            <h2>
              The main gaps in current booking journeys.
            </h2>

          </div>


          <div className="case-problem-content">

            <p className="case-section-lead">
              Research into existing UK healthcare
              booking services highlighted recurring
              gaps in appointment visibility, scheduling
              flexibility and accessibility.
            </p>

            <p className="case-section-text">
              Together, these findings revealed
              opportunities to rethink how patients
              discover suitable appointments, respond
              to changing circumstances and move through
              the booking journey.
            </p>

          </div>

        </div>


        <div className="case-problem-list">

          <article className="case-problem-row">

            <h3>
              Limited visibility
            </h3>

            <p>
              Appointment searches are generally centred
              on a patient's registered GP practice,
              even when a suitable slot may be available
              elsewhere nearby.
            </p>

          </article>


          <article className="case-problem-row">

            <h3>
              Rigid rescheduling
            </h3>

            <p>
              When plans change, patients may need to
              cancel and search again rather than move
              easily to a suitable alternative.
            </p>

          </article>


          <article className="case-problem-row">

            <h3>
              Digital friction
            </h3>

            <p>
              Multi-step interactions, unclear navigation
              and inconsistent accessibility can make
              routine tasks harder for users with
              different digital abilities.
            </p>

          </article>

        </div>

      </section>


      {/* ===================================
          APPROACH
      =================================== */}

      <section className="case-approach section-container">

        <div className="case-section-layout">

          <div className="case-section-heading">

            <p className="case-section-label">
              How I approached it
            </p>

            <h2>
              Turning research into a clear system design.
            </h2>

          </div>


          <div className="case-approach-intro">

            <p className="case-section-lead">
              I used research, platform analysis and
              accessibility guidance to define what the
              system needed to support before moving into
              design and development.
            </p>

            <p className="case-section-text">
              Requirements were prioritised using MoSCoW
              to keep the project focused, then translated
              into user roles, core journeys and interface
              decisions.
            </p>

          </div>

        </div>


        <div className="approach-process">

          <div
            className="approach-process-line"
            aria-hidden="true"
          />


          <article className="approach-process-step">

            <div className="approach-process-marker">
              01
            </div>

            <p className="approach-process-label">
              Research
            </p>

            <h3>
              Understand the context
            </h3>

            <p>
              Reviewed academic research and existing UK
              healthcare booking platforms to identify
              recurring usability, accessibility and
              scheduling challenges.
            </p>

          </article>


          <article className="approach-process-step">

            <div className="approach-process-marker">
              02
            </div>

            <p className="approach-process-label">
              Define
            </p>

            <h3>
              Set the requirements
            </h3>

            <p>
              Converted the findings into functional and
              non-functional requirements, then prioritised
              them using MoSCoW.
            </p>

          </article>


          <article className="approach-process-step">

            <div className="approach-process-marker">
              03
            </div>

            <p className="approach-process-label">
              Design
            </p>

            <h3>
              Shape the user experience
            </h3>

            <p>
              Mapped key user journeys through personas,
              use cases and user flows, then translated
              them into responsive wireframes before
              moving into development.
            </p>

          </article>

        </div>

      </section>


      {/* ===================================
          SOLUTION
      =================================== */}

      <section className="case-solution section-container">

        <div className="case-section-layout">

          <div className="case-section-heading">

            <p className="case-section-label">
              The Solution
            </p>

            <h2>
              Bringing the booking journey together.
            </h2>

          </div>


          <div className="case-solution-intro">

            <p className="case-section-lead">
              The final prototype brings appointment
              discovery, booking management and scheduling
              support into one connected patient journey.
            </p>

            <p className="case-section-text">
              Core features were designed around the
              moments where patients need more choice,
              flexibility and support throughout the
              appointment process.
            </p>

          </div>

        </div>


        <div className="solution-features">

          {/* 01 */}

          <article className="solution-feature">

            <div className="solution-feature-image">

              <button
                type="button"
                className="solution-image-button"
                onClick={() =>
                  openImage(
                    discoveryImage,
                    'Healthcare Booking System city-wide appointment search and intelligent scheduling interface'
                  )
                }
                aria-label="View city-wide appointment discovery interface"
              >

                <img
                  src={discoveryImage}
                  alt="Healthcare Booking System city-wide appointment search and intelligent scheduling interface"
                />

                <span className="solution-image-zoom">
                  <FaMagnifyingGlassPlus aria-hidden="true" />
                </span>

              </button>

            </div>


            <div className="solution-feature-content">

              <div className="solution-feature-meta">
                <span>01</span>
                <p>Discovery</p>
              </div>

              <h3>
                City-wide appointment discovery
              </h3>

              <p>
                Patients can search for available
                appointments across practices within
                the same city rather than being limited
                to one practice. Intelligent Scheduling
                can also help surface suitable options
                when additional guidance is needed.
              </p>

              <div className="solution-tags">
                <span>City-wide search</span>
                <span>Intelligent scheduling</span>
                <span>Personalised results</span>
              </div>

            </div>

          </article>


          {/* 02 */}

          <article className="solution-feature solution-feature-reverse">

            <div className="solution-feature-image">

              <button
                type="button"
                className="solution-image-button"
                onClick={() =>
                  openImage(
                    swapImage,
                    'Appointment swap request and administrative review interface'
                  )
                }
                aria-label="View appointment swapping interface"
              >

                <img
                  src={swapImage}
                  alt="Appointment swap request and administrative review interface"
                />

                <span className="solution-image-zoom">
                  <FaMagnifyingGlassPlus aria-hidden="true" />
                </span>

              </button>

            </div>


            <div className="solution-feature-content">

              <div className="solution-feature-meta">
                <span>02</span>
                <p>Flexibility</p>
              </div>

              <h3>
                Flexible appointment swapping
              </h3>

              <p>
                Patients can request to exchange an
                existing appointment with another booked
                slot. Requests are reviewed by an
                administrator before appointments are
                reassigned, providing a controlled way
                to manage changing plans.
              </p>

              <div className="solution-tags">
                <span>Swap requests</span>
                <span>Admin review</span>
                <span>Notifications</span>
              </div>

            </div>

          </article>


          {/* 03 */}

          <article className="solution-feature">

            <div className="solution-feature-image">

              <button
                type="button"
                className="solution-image-button"
                onClick={() =>
                  openImage(
                    calendarImage,
                    'Google Calendar conflict warning and appointment synchronisation interface'
                  )
                }
                aria-label="View calendar-aware booking interface"
              >

                <img
                  src={calendarImage}
                  alt="Google Calendar conflict warning and appointment synchronisation interface"
                />

                <span className="solution-image-zoom">
                  <FaMagnifyingGlassPlus aria-hidden="true" />
                </span>

              </button>

            </div>


            <div className="solution-feature-content">

              <div className="solution-feature-meta">
                <span>03</span>
                <p>Scheduling</p>
              </div>

              <h3>
                Calendar-aware booking
              </h3>

              <p>
                Patients can check for clashes with their
                Google Calendar before confirming an
                appointment. Conflicting times are clearly
                flagged, while confirmed appointments can
                be added directly to their personal
                calendar.
              </p>

              <div className="solution-tags">
                <span>Conflict alerts</span>
                <span>Calendar sync</span>
                <span>Scheduling support</span>
              </div>

            </div>

          </article>


          {/* SUPPORTING FEATURES */}

          <article className="solution-support">

            <div className="solution-support-content">

              <p className="solution-support-label">
                Supporting features
              </p>

              <h3>
                Support beyond booking
              </h3>

              <p>
                The prototype also supports the wider
                appointment journey with post-appointment
                feedback, booking notifications and
                lightweight chatbot guidance for
                common tasks.
              </p>

              <div className="solution-tags">
                <span>Feedback</span>
                <span>Notifications</span>
                <span>Chatbot guidance</span>
              </div>

            </div>


            <div className="solution-support-image">

              <button
                type="button"
                className="solution-image-button"
                onClick={() =>
                  openImage(
                    chatbotImage,
                    'GP Connect chatbot providing guidance for common booking tasks'
                  )
                }
                aria-label="View chatbot interface"
              >

                <img
                  src={chatbotImage}
                  alt="GP Connect chatbot providing guidance for common booking tasks"
                />

                <span className="solution-image-zoom">
                  <FaMagnifyingGlassPlus aria-hidden="true" />
                </span>

              </button>

            </div>

          </article>

        </div>

      </section>


      {/* ===================================
          TECHNICAL IMPLEMENTATION
      =================================== */}

      <section className="case-implementation section-container">

        <div className="case-section-layout">

          <div className="case-section-heading">

            <p className="case-section-label">
              Technical Implementation
            </p>

            <h2>
              Building the logic behind the experience.
            </h2>

          </div>


          <div className="case-implementation-intro">

            <p className="case-section-lead">
              Behind the interface, the prototype combines
              server-side booking logic, rule-based
              recommendations and external calendar
              integration to support reliable appointment
              management.
            </p>

            <p className="case-section-text">
              I focused on keeping the core workflows
              transparent and maintainable while protecting
              booking operations from conflicts and
              inconsistent data.
            </p>

          </div>

        </div>


        <div className="implementation-list">

          {/* 01 */}

          <article className="implementation-item">

            <div className="implementation-copy">

              <div className="implementation-meta">
                <span>01</span>
                <p>Recommendation logic</p>
              </div>

              <h3>
                Rule-based appointment recommendations
              </h3>

              <p>
                City-wide search first retrieves available
                appointments using location, date and
                optional GP filters. When Intelligent
                Scheduling is enabled, the request continues
                through a rule-based recommendation workflow
                that considers symptom information, urgency,
                preferences and booking history.
              </p>

              <p className="implementation-note">
                The recommendation process is deterministic
                and auditable rather than machine-learning
                based.
              </p>

            </div>


            <div className="implementation-flow">

              <div className="flow-node">
                Search request
              </div>

              <div className="flow-arrow">
                ↓
              </div>

              <div className="flow-node">
                City-wide availability
              </div>

              <div className="flow-arrow">
                ↓
              </div>

              <div className="flow-node">
                Intelligent Scheduling enabled?
              </div>

              <div className="flow-branch flow-branch-paths">

                <div>
                  <span className="flow-path-label">
                    No
                  </span>

                  <div className="flow-node">
                    Return available slots
                  </div>
                </div>

                <div>
                  <span className="flow-path-label">
                    Yes
                  </span>

                  <div className="flow-node">
                    Triage + personalisation
                  </div>
                </div>

              </div>

              <div className="flow-arrow">
                ↓
              </div>

              <div className="flow-node flow-node-final">
                Ranked recommendations
              </div>

            </div>

          </article>


          {/* 02 */}

          <article className="implementation-item">

            <div className="implementation-copy">

              <div className="implementation-meta">
                <span>02</span>
                <p>Booking integrity</p>
              </div>

              <h3>
                Protecting critical booking operations
              </h3>

              <p>
                Booking uses a conditional database update
                that succeeds only while the selected slot
                is still available, preventing concurrent
                requests from claiming the same appointment.
              </p>

              <p className="implementation-note">
                Cancellation updates are also guarded by
                both appointment and user identifiers,
                while approved swaps run inside a PostgreSQL
                transaction so both ownership changes
                succeed or fail together.
              </p>

            </div>


            <div className="implementation-flow implementation-flow-split">

              <div className="flow-group">

                <span className="flow-group-label">
                  Booking
                </span>

                <div className="flow-node">
                  Booking request
                </div>

                <div className="flow-arrow">
                  ↓
                </div>

                <div className="flow-node">
                  Slot still available?
                </div>

                <div className="flow-branch">
                  <span>Yes → update</span>
                  <span>No → reject</span>
                </div>

              </div>


              <div className="flow-group">

                <span className="flow-group-label">
                  Swap approval
                </span>

                <div className="flow-node">
                  Validate request
                </div>

                <div className="flow-arrow">
                  ↓
                </div>

                <div className="flow-node">
                  Begin transaction
                </div>

                <div className="flow-arrow">
                  ↓
                </div>

                <div className="flow-node">
                  Exchange ownership
                </div>

                <div className="flow-arrow">
                  ↓
                </div>

                <div className="flow-node flow-node-final">
                  Commit
                </div>

              </div>

            </div>

          </article>


          {/* 03 */}

          <article className="implementation-item">

            <div className="implementation-copy">

              <div className="implementation-meta">
                <span>03</span>
                <p>External integration</p>
              </div>

              <h3>
                Keeping booking and calendars coordinated
              </h3>

              <p>
                Google Calendar is connected through OAuth
                2.0. Before a booking is written, the
                server can check the linked calendar for
                overlapping events and stop the operation
                when a conflict is detected.
              </p>

              <p className="implementation-note">
                Calendar event creation remains a separate
                sync action, keeping the external service
                outside the core database write path.
              </p>

            </div>


            <div className="implementation-flow">

              <div className="flow-node">
                Booking request
              </div>

              <div className="flow-arrow">
                ↓
              </div>

              <div className="flow-node">
                Google Calendar linked?
              </div>

              <div className="flow-arrow">
                ↓
              </div>

              <div className="flow-node">
                Check overlapping events
              </div>

              <div className="flow-branch">
                <span>Conflict → stop</span>
                <span>Clear → continue</span>
              </div>

              <div className="flow-arrow">
                ↓
              </div>

              <div className="flow-node">
                Book appointment
              </div>

              <div className="flow-arrow">
                ↓
              </div>

              <div className="flow-node flow-node-final">
                Optional calendar sync
              </div>

            </div>

          </article>

        </div>


        {/* IMPLEMENTATION FOUNDATIONS */}

        <div className="implementation-foundations">

          <div className="implementation-foundations-header">

            <p>
              Implementation foundations
            </p>

          </div>


          <div className="implementation-foundations-grid">

            <div>
              <span>Responsive UI</span>

              <p>
                EJS · Bootstrap 5 · Custom CSS
              </p>
            </div>


            <div>
              <span>Backend</span>

              <p>
                Node.js · Express.js
              </p>
            </div>


            <div>
              <span>Database</span>

              <p>
                PostgreSQL · Parameterised SQL ·
                Transactions
              </p>
            </div>


            <div>
              <span>Security & access</span>

              <p>
                JWT · HttpOnly Cookies · bcrypt ·
                Role-Based Access Control
              </p>
            </div>


            <div>
              <span>Integrations</span>

              <p>
                Google Calendar OAuth 2.0 ·
                Brevo Email
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* ===================================
          TESTING & EVALUATION
      =================================== */}

      <section className="case-testing section-container">

        <div className="case-section-layout">

          <div className="case-section-heading">

            <p className="case-section-label">
              Testing & Evaluation
            </p>

            <h2>
              Validating the system beyond implementation.
            </h2>

          </div>


          <div className="case-testing-intro">

            <p className="case-section-lead">
              The final prototype was evaluated through
              functional, non-functional and
              requirements-based testing to verify core
              workflows, usability and technical
              reliability.
            </p>

            <p className="case-section-text">
              Testing combined end-to-end workflow checks
              with local performance, accessibility,
              security and cross-browser validation.
            </p>

          </div>

        </div>


        {/* REQUIREMENTS VALIDATION */}

        <div className="testing-requirements">

          <div className="testing-block-label">

            <p>
              Requirements validation
            </p>

          </div>


          <div className="testing-metrics">

            <div className="testing-metric">
              <strong>16 / 20</strong>
              <span>Fully met</span>
            </div>

            <div className="testing-metric">
              <strong>4 / 20</strong>
              <span>Partially met</span>
            </div>

            <div className="testing-metric">
              <strong>0</strong>
              <span>Unmet</span>
            </div>

          </div>


          <div className="testing-requirements-summary">

            <p>
              Thirteen of fourteen functional requirements
              were fully met, with preference management
              partially implemented. Three of six
              non-functional requirements were fully met,
              while accessibility, performance and
              production-grade security remained partial
              within the prototype scope.
            </p>

          </div>

        </div>


        {/* TESTING EVIDENCE */}

        <div className="testing-evidence-grid">

          <article className="testing-evidence">

            <p className="testing-evidence-label">
              Functional validation
            </p>

            <h3>
              Core workflows behaved as expected.
            </h3>

            <p>
              Component, integration and end-to-end testing
              covered the major appointment, scheduling,
              access and supporting workflows. Validation
              focused on correct system states, ownership
              rules and data consistency across connected
              features.
            </p>

            <div className="testing-tags">
              <span>Authentication</span>
              <span>Appointment management</span>
              <span>Scheduling</span>
              <span>User support</span>
              <span>Role-based workflows</span>
            </div>

          </article>


          <article className="testing-lighthouse">

            <div className="testing-lighthouse-copy">

              <p className="testing-evidence-label">
                Local Lighthouse audit
              </p>

              <h3>
                Strong development-time quality scores.
              </h3>

              <div className="lighthouse-scores">

                <div>
                  <strong>94</strong>
                  <span>Performance</span>
                </div>

                <div>
                  <strong>93</strong>
                  <span>Accessibility</span>
                </div>

                <div>
                  <strong>100</strong>
                  <span>Best Practices</span>
                </div>

                <div>
                  <strong>90</strong>
                  <span>SEO</span>
                </div>

              </div>

              <p className="testing-caption">
                Indicative localhost audit. Results are
                useful as a development benchmark and are
                not representative of production
                performance.
              </p>

            </div>


            <div className="testing-lighthouse-image">

              <button
                type="button"
                className="testing-image-button"
                onClick={() =>
                  openImage(
                    lighthouseImage,
                    'Chrome DevTools Lighthouse audit showing Performance 94, Accessibility 93, Best Practices 100 and SEO 90'
                  )
                }
                aria-label="View Lighthouse audit screenshot"
              >

                <img
                  src={lighthouseImage}
                  alt="Chrome DevTools Lighthouse audit showing Performance 94, Accessibility 93, Best Practices 100 and SEO 90"
                />

                <span className="testing-image-zoom">
                  <FaMagnifyingGlassPlus aria-hidden="true" />
                </span>

              </button>

            </div>

          </article>

        </div>


        {/* COMPATIBILITY */}

        <div className="testing-compatibility">

          <div>

            <p className="testing-evidence-label">
              Compatibility & responsive checks
            </p>

            <h3>
              Tested across browsers and screen sizes.
            </h3>

          </div>


          <div className="testing-compatibility-content">

            <p>
              Responsive rendering and key user journeys
              were manually checked across major browsers
              and device sizes to identify layout or
              interaction inconsistencies.
            </p>

            <div className="testing-tags">
              <span>Chrome</span>
              <span>Edge</span>
              <span>Firefox</span>
              <span>Safari</span>
              <span>Desktop</span>
              <span>Tablet</span>
              <span>Mobile</span>
            </div>

          </div>

        </div>


        {/* LIMITATIONS */}

        <div className="testing-limitations">

          <p className="testing-evidence-label">
            Prototype limitations
          </p>

          <p>
            Full WCAG validation, representative production
            performance benchmarking, HTTPS/TLS deployment
            and broader preference management remain areas
            for further development.
          </p>

        </div>

      </section>


      {/* ===================================
          REFLECTION
      =================================== */}

      <section className="case-reflection section-container">

        <div className="case-section-layout">

          <div className="case-section-heading">

            <p className="case-section-label">
              Reflection
            </p>

            <h2>
              What I learned
            </h2>

          </div>


          <div className="case-reflection-intro">

            <p className="case-section-lead">
              The project demonstrated that greater
              scheduling flexibility can be introduced
              without making the booking journey more
              complex for patients.
            </p>

            <p className="case-section-text">
              More importantly, building the prototype
              exposed the trade-offs between flexibility,
              accessibility, reliability and implementation
              complexity when moving from interface concepts
              to working booking logic and third-party
              integrations.
            </p>

          </div>

        </div>


        <div className="reflection-list">

          <article className="reflection-item">

            <span className="reflection-number">
              01
            </span>

            <div className="reflection-content">

              <h3>
                Flexibility should shape the system,
                not just a feature.
              </h3>

              <p>
                Designing around real scheduling constraints
                changed how I approached the booking journey.
                Wider appointment visibility and controlled
                swapping worked best when flexibility was
                considered across the whole flow rather than
                added as an isolated function.
              </p>

            </div>

          </article>


          <article className="reflection-item">

            <span className="reflection-number">
              02
            </span>

            <div className="reflection-content">

              <h3>
                Modelling workflows early exposed
                important edge cases.
              </h3>

              <p>
                Use cases, flowcharts and database modelling
                helped surface issues such as double-booking,
                appointment ownership and swap consistency
                before they became implementation problems.
                This made the transition from requirements
                to backend logic more deliberate.
              </p>

            </div>

          </article>


          <article className="reflection-item">

            <span className="reflection-number">
              03
            </span>

            <div className="reflection-content">

              <h3>
                The most advanced solution is not always
                the most useful.
              </h3>

              <p>
                For the prototype, transparent rule-based
                scheduling was more appropriate than
                introducing an incomplete machine-learning
                model. It kept recommendations explainable,
                easier to validate and realistic within
                the project's scope.
              </p>

            </div>

          </article>

        </div>


        {/* ===================================
            NEXT STEPS
        =================================== */}

        <div className="case-next-steps">

          <div className="next-steps-heading">

            <p className="case-section-label">
              Next Steps
            </p>

            <h2>
              Moving from prototype toward production.
            </h2>

          </div>


          <div className="next-steps-grid">

            <article className="next-step">

              <span>01</span>

              <h3>
                Production security
              </h3>

              <p>
                Introduce HTTPS/TLS, stronger
                authentication, consent management
                and production-grade monitoring before
                handling real patient data.
              </p>

            </article>


            <article className="next-step">

              <span>02</span>

              <h3>
                Accessibility validation
              </h3>

              <p>
                Complete WCAG 2.2 AA testing with keyboard,
                screen-reader and real-user evaluation,
                particularly with older and digitally
                excluded users.
              </p>

            </article>


            <article className="next-step">

              <span>03</span>

              <h3>
                Performance at scale
              </h3>

              <p>
                Move beyond local testing with automated
                load, stress and end-to-end tests while
                introducing production observability.
              </p>

            </article>


            <article className="next-step">

              <span>04</span>

              <h3>
                Healthcare integration
              </h3>

              <p>
                Explore NHS Login and healthcare-system
                interoperability while refining the rules
                around registered and cross-practice
                booking.
              </p>

            </article>

          </div>

        </div>


        {/* REFLECTION CLOSING */}

        <div className="case-reflection-closing">

          <p>
            This project strengthened my experience across
            the full development lifecycle, from research
            and requirements through interface design,
            backend implementation, integration and
            validation. It also highlighted the gap between
            a working prototype and a production-ready
            healthcare system.
          </p>

        </div>

      </section>


      {/* ===================================
          FINAL CTA
      =================================== */}

      <section className="case-final-cta section-container">

        <p className="case-section-label">
          Explore the project
        </p>

        <h2>
          Want to see how it was built?
        </h2>

        <p>
          Explore the source code and technical
          implementation on GitHub.
        </p>

        <div className="case-final-actions">

          <a
            href="https://github.com/quhtrang-cloud/gpconnect-healthcare-booking-system"
            target="_blank"
            rel="noreferrer"
            className="case-final-primary"
          >
            View GitHub

            <FaArrowUpRightFromSquare
              aria-hidden="true"
            />
          </a>


          <Link
            to="/"
            state={{ scrollTo: 'projects' }}
            className="case-final-secondary"
          >
            <FaArrowLeft aria-hidden="true" />
            Back to projects
          </Link>

        </div>

      </section>


      {/* ===================================
          LIGHTBOX
      =================================== */}

      {zoomedImage && (
        <div
          className="image-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Expanded project screenshot"
          onClick={closeImage}
        >

          <button
            type="button"
            className="image-lightbox-close"
            onClick={closeImage}
            aria-label="Close expanded image"
          >
            <FaXmark aria-hidden="true" />
          </button>


          <img
            src={zoomedImage.src}
            alt={zoomedImage.alt}
            onClick={(event) => event.stopPropagation()}
          />

        </div>
      )}

    </main>
  )
}

export default HealthcareProject