const experiences = [
  {
    number: '01',
    role: 'Web Design Intern',
    organisation: 'Profile Investment Joint Stock Company',
    location: 'Vietnam',
    period: '2019',
    description:
      'Maintained and updated website content using WordPress, improved visual design and UX based on stakeholder feedback, and created digital assets for online campaigns.',
    focus: [
      'WordPress',
      'Web Design',
      'UX',
      'Visual Design',
    ],
  },

  {
    number: '02',
    role: 'Planning Officer',
    organisation: 'Ministry of Health',
    location: 'Vietnam',
    period: '2020 — 2023',
    description:
      'Supported the delivery of a nationwide healthcare programme across 16 provinces through planning, stakeholder coordination, monitoring and reporting. Also designed the programme’s official logo for use across its communications.',
    focus: [
      'Programme Planning',
      'Stakeholder Coordination',
      'Monitoring & Evaluation',
    ],
  },
]

const education = [
  {
    degree: 'MSc Information Systems',
    university: 'University of Portsmouth',
    location: 'United Kingdom',
    period: '2024 — 2025',
    result: 'Distinction',
  },

  {
    degree: 'BSc Management Information Systems',
    university: 'Thuongmai University',
    location: 'Vietnam',
    period: '2015 — 2019',
  },
]

function Experience() {
  return (
    <section
      className="experience section-container section-divider"
      id="experience"
    >
      {/* =========================
          EXPERIENCE
      ========================== */}

      <div className="section-heading">
        <p className="section-label">Experience</p>

        <h2>Professional experience.</h2>
      </div>

      <div className="experience-list">
        {experiences.map((item) => (
          <article
            className="experience-item"
            key={`${item.role}-${item.organisation}`}
          >
            <div className="experience-number">
              {item.number}
            </div>

            <div className="experience-main">
              <h3>{item.role}</h3>

              <p className="experience-organisation">
                {item.organisation}
              </p>

              <p className="experience-location">
                {item.location}
              </p>

              <p className="experience-description">
                {item.description}
              </p>

              <div className="experience-focus">
                {item.focus.map((skill) => (
                  <span key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="experience-period">
              {item.period}
            </div>
          </article>
        ))}
      </div>

      {/* =========================
          EDUCATION
      ========================== */}

      <div className="education-block">
        <div className="education-heading">
          <p className="section-label">
            Education
          </p>

          <h2>Academic background.</h2>
        </div>

        <div className="education-list">
          {education.map((item) => (
            <article
              className="education-item"
              key={`${item.degree}-${item.university}`}
            >
              <div className="education-period">
                {item.period}
              </div>

              <div className="education-content">
                <h3>{item.degree}</h3>

                <p>{item.university}</p>

                <span>
                  {item.location}
                </span>
              </div>

              {item.result && (
                <div className="education-result">
                  {item.result}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience