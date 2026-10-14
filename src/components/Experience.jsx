import { Link } from 'react-router-dom'
import { FaArrowRight, FaArrowUpRightFromSquare, FaJs, FaLaptopCode, FaWordpress } from 'react-icons/fa6'

const roles = [
  {
    title: 'Planning Officer',
    organisation: 'Ministry of Health',
    location: 'Hanoi, Vietnam',
    period: '2020–2023',
    points: [
      'Supported planning, progress reporting and stakeholder coordination for an ADB-funded healthcare programme delivered across 16 provinces.',
      'Helped coordinate training workshops and conferences, and designed the programme’s official logo.',
    ],
  },
  {
    title: 'Web Design Intern',
    organisation: 'Profile Investment Joint Stock Company',
    location: 'Hanoi, Vietnam',
    period: '2019',
    points: [
      'Maintained WordPress content and refined page layouts using stakeholder feedback.',
      'Created website banners and campaign assets, working with the social media team to keep branding consistent.',
    ],
  },
]

const education = [
  {
    degree: 'MSc Information Systems',
    university: 'University of Portsmouth',
    location: 'Portsmouth, United Kingdom',
    period: '2024–2025',
    result: 'Distinction',
  },
  {
    degree: 'BSc Management Information Systems',
    university: 'Thuongmai University',
    location: 'Hanoi, Vietnam',
    period: '2015–2019',
  },
]

const certifications = [
  {
    title: 'JavaScript Certification',
    icon: FaJs,
    focus: 'Coursework covering JavaScript programming, DOM manipulation, events, accessibility, form validation and asynchronous programming. Further topics included local storage, object-oriented and functional programming, data structures and algorithms.',
    issuer: 'freeCodeCamp',
    date: 'June 2026',
    dateTime: '2026-06',
    url: 'https://www.freecodecamp.org/certification/quynhtrangnguyen/javascript-v9',
  },
  {
    title: 'Responsive Web Design Certification',
    icon: FaLaptopCode,
    focus: 'Coursework covering semantic HTML, forms, tables, accessible media, ARIA and HTML’s role in SEO. CSS topics included responsive layouts, Flexbox and Grid, supported by practical web projects.',
    issuer: 'freeCodeCamp',
    date: 'March 2026',
    dateTime: '2026-03',
    url: 'https://www.freecodecamp.org/certification/quynhtrangnguyen/responsive-web-design-v9',
  },
  {
    title: 'Webmaster Certification (WordPress)',
    icon: FaWordpress,
    focus: 'Practical training in building and customising WordPress websites using themes, plugins and HTML/CSS. Covered content management, Adobe Photoshop, SEO fundamentals, website security and deployment to web hosting.',
    issuer: 'Viet Tam Duc Programming Center',
    date: 'April 2024',
    dateTime: '2024-04',
  },
]

function Experience() {
  return (
    <section
      className="experience section-container section-divider experience-timeline-section"
      id="experience"
      aria-labelledby="experience-title"
    >
      <div className="section-heading">
        <p className="section-label">Experience</p>
        <h2 id="experience-title">Experience I bring to my work.</h2>
      </div>

      <ol className="career-timeline" aria-label="Professional experience, most recent first">
        {roles.map((role) => (
          <li className="career-timeline-entry" key={role.title}>
            <article className="experience-item career-role">
              <div className="career-role-heading">
                <h3>{role.title}</h3>
                <p className="career-period">{role.period}</p>
              </div>
              <p className="career-organisation">{role.organisation}</p>
              <p className="career-location">{role.location}</p>
              <ul className="career-points">
                {role.points.map((point) => <li key={point}>{point}</li>)}
              </ul>
            </article>
          </li>
        ))}
      </ol>

      <div className="education-block" aria-labelledby="education-title">
        <div className="education-heading">
          <p className="section-label">Education</p>
          <h2 id="education-title">Where I built my foundations.</h2>
        </div>
        <div className="education-list">
          {education.map((item) => (
            <article className="education-item education-refined-item" key={item.degree}>
              <div className="education-content">
                <div className="education-degree-line">
                  <h3>{item.degree}</h3>
                  {item.result && <span className="education-result">{item.result}</span>}
                </div>
                <p>{item.university}</p>
                <span>{item.location}</span>
                {item.result && (
                  <p className="education-dissertation">
                    <span>Dissertation:</span>{' '}
                    <Link to="/projects/healthcare-booking-system">
                      Healthcare Booking System with Enhanced Usability
                      <FaArrowRight aria-hidden="true" />
                    </Link>
                  </p>
                )}
              </div>
              <p className="education-period">{item.period}</p>
            </article>
          ))}
        </div>
      </div>

      <section className="certifications-block" aria-labelledby="certifications-title">
        <div className="certifications-heading">
          <p className="section-label">Certifications</p>
          <h2 id="certifications-title">Continuing to learn.</h2>
        </div>
        <ul className="certifications-list">
          {certifications.map((certificate) => {
            const Icon = certificate.icon
            return (
              <li className="certification-card" key={certificate.title}>
                <div className="certification-card-top">
                  <Icon className="certification-icon" aria-hidden="true" />
                  <time className="certification-year" dateTime={certificate.dateTime}>{certificate.date}</time>
                </div>
                <h3>{certificate.title}</h3>
                <p className="certification-issuer">{certificate.issuer}</p>
                <p className="certification-focus">{certificate.focus}</p>
                {certificate.url && (
                  <a
                    className="certification-link"
                    href={certificate.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${certificate.title} certificate (opens in a new tab)`}
                  >
                    View certificate
                    <FaArrowUpRightFromSquare aria-hidden="true" />
                  </a>
                )}
              </li>
            )
          })}
        </ul>
      </section>
    </section>
  )
}

export default Experience
