import { Link } from 'react-router-dom'
import { FaArrowRight, FaArrowUpRightFromSquare, FaJs, FaLaptopCode, FaWordpress, FaGraduationCap } from 'react-icons/fa6'

const roles = [
  {
    title: 'Planning Officer',
    organisation: 'Ministry of Health',
    location: 'Hanoi, Vietnam',
    period: '2020 – 2023',
    points: [
      'Contributed to the master plan, annual work plans and implementation schedules for an ADB-funded healthcare programme delivered across 16 provinces.',
      'Coordinated with provincial programme teams and health authorities to support implementation, monitoring and evaluation, and prepare progress reports.',
      'Helped coordinate training workshops and conferences, and designed the official programme logo used across materials and communications.',
    ],
  },
  {
    title: 'Web Design Intern',
    organisation: 'Prolife Investment Joint Stock Company',
    location: 'Hanoi, Vietnam',
    period: '2019',
    points: [
      'Maintained and updated WordPress content, applying stakeholder feedback to improve page layouts, visual design and user experience.',
      'Designed website banners and promotional assets for online campaigns, working with the social media team to maintain consistent branding.',
      'Supported customer service, sales transactions and stocktaking within the company’s retail operations.',
    ],
  },
]

const education = [
  {
    degree: 'MSc Information Systems',
    university: 'University of Portsmouth',
    location: 'Portsmouth, United Kingdom',
    period: '2024 – 2025',
    result: 'Distinction',
    thesis: {
      label: 'Dissertation',
      title: 'Web-Based Healthcare Booking System with Enhanced Usability',
      path: '/projects/healthcare-booking-system',
    },
    coursework: 'Web Product Development and Management, User Experience Design, Managing Information Systems, and Cyber Security for Information Systems.',
  },
  {
    degree: 'BSc Management Information Systems',
    university: 'Thuongmai University',
    location: 'Hanoi, Vietnam',
    period: '2015 – 2019',
    thesis: {
      label: 'Graduation thesis',
      title: 'Analysis and Design of a Human Resource Management Information System for Prolife Investment Joint Stock Company',
      grade: 'A',
    },
    coursework: 'Databases, data structures and algorithms, software technology, information systems analysis and design, and e-commerce.',
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
                  <h3>
                    <FaGraduationCap
                      className="education-degree-icon"
                      aria-hidden="true"
                    />
                    {item.degree}
                  </h3>
                  {item.result && <span className="education-result">{item.result}</span>}
                </div>
                <p>{item.university}</p>
                <span>{item.location}</span>
                {item.thesis && (
                  <p className="education-dissertation education-study-note">
                    <span>{item.thesis.label}:</span>{' '}
                    {item.thesis.path ? (
                      <Link to={item.thesis.path}>
                        {item.thesis.title}
                        <FaArrowRight aria-hidden="true" />
                      </Link>
                    ) : (
                      <>
                        {item.thesis.title}.
                        {item.thesis.grade && (<> <strong className="education-thesis-grade">Grade: {item.thesis.grade}</strong>.</>)}
                      </>
                    )}
                  </p>
                )}
                {item.coursework && (
                  <p className="education-coursework education-study-note">
                    <span>Relevant coursework:</span>{' '}
                    {item.coursework}
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
