import { useEffect, useId, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import {
  FaWordpress, FaCircleInfo, FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaGithub,
  FaFigma, FaCode, FaPenRuler, FaTableColumns, FaUsers,
  FaArrowsRotate, FaImage, FaBoxOpen, FaBootstrap, FaDatabase,
  FaFlask, FaPalette, FaLaptopCode, FaUniversalAccess,
} from 'react-icons/fa6'
import {
  SiJavascript, SiTypescript, SiExpress, SiPostgresql,
  SiVercel, SiJest, SiVite,
} from 'react-icons/si'

type Skill = {
  name: string
  icon: ReactNode
}

type SkillGroup = {
  number: string
  title: string
  context: string
  skills: Skill[]
}

const skillGroups: SkillGroup[] = [
  {
    number: '01',
    title: 'Front-End',
    context: 'I build responsive interfaces with React, JavaScript and CSS, with TypeScript in selected portfolio components. My projects include keyboard navigation, visible focus states and responsive layouts.',
    skills: [
      { name: 'React', icon: <FaReact /> },
      { name: 'JavaScript ES6+', icon: <SiJavascript /> },
      { name: 'TypeScript', icon: <SiTypescript /> },
      { name: 'HTML5', icon: <FaHtml5 /> },
      { name: 'CSS3', icon: <FaCss3Alt /> },
      { name: 'Bootstrap', icon: <FaBootstrap /> },
      { name: 'Responsive Web Design', icon: <FaLaptopCode /> },
      { name: 'Web Accessibility', icon: <FaUniversalAccess /> },
    ],
  },
  {
    number: '02',
    title: 'Back-End & Database',
    context: 'I used Node.js, Express and PostgreSQL in my healthcare booking and furniture retail projects.',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Express.js', icon: <SiExpress /> },
      { name: 'REST APIs', icon: <FaCode /> },
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
      { name: 'SQL', icon: <FaDatabase /> },
      { name: 'Relational Database Design', icon: <FaDatabase /> },
    ],
  },
  {
    number: '03',
    title: 'Design & UX',
    context: 'I applied user analysis, wireframing and Figma prototyping in the Hampshire Festival project. My web design internship also involved refining page layouts and creating digital campaign assets.',
    skills: [
      { name: 'Figma', icon: <FaFigma /> },
      { name: 'Adobe Photoshop', icon: <FaImage /> },
      { name: 'Canva', icon: <FaPalette /> },
      { name: 'Wireframing', icon: <FaTableColumns /> },
      { name: 'Prototyping', icon: <FaPenRuler /> },
      { name: 'User-Centred Design', icon: <FaUsers /> },
    ],
  },
  {
    number: '04',
    title: 'Tools & Workflow',
    context: 'I use Git and GitHub for version control, Vite for portfolio builds and Vercel for deployment. I added tests with Jest and Supertest, practised Scrum in team projects and maintained WordPress content during my internship.',
    skills: [
      { name: 'Git', icon: <FaGitAlt /> },
      { name: 'GitHub', icon: <FaGithub /> },
      { name: 'Jest', icon: <SiJest /> },
      { name: 'Supertest', icon: <FaFlask /> },
      { name: 'Testing & Debugging', icon: <FaCode /> },
      { name: 'Agile / Scrum', icon: <FaArrowsRotate /> },
      { name: 'Vite', icon: <SiVite /> },
      { name: 'Vercel', icon: <SiVercel /> },
      { name: 'WordPress', icon: <FaWordpress /> },
      { name: 'VS Code', icon: <FaCode /> },
      { name: 'npm', icon: <FaBoxOpen /> },
    ],
  },
]

function SkillInfo({ title, children }: { title: string; children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const id = useId()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const dismiss = (event: PointerEvent) => {
      if (event.target instanceof Node && !ref.current?.contains(event.target)) setOpen(false)
    }
    const escape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('pointerdown', dismiss)
    document.addEventListener('keydown', escape)
    return () => {
      document.removeEventListener('pointerdown', dismiss)
      document.removeEventListener('keydown', escape)
    }
  }, [open])

  return (
    <div className="skill-info" ref={ref}
      onPointerEnter={(event) => { if (event.pointerType === 'mouse') setOpen(true) }}
      onPointerLeave={() => { if (!ref.current?.contains(document.activeElement)) setOpen(false) }}
      onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false) }}>
      <button type="button" className="skill-info-button"
        aria-label={`How I use ${title} skills`} aria-expanded={open} aria-controls={id}
        onFocus={(event) => { if (event.currentTarget.matches(':focus-visible')) setOpen(true) }}
        onClick={() => setOpen(true)}>
        <FaCircleInfo aria-hidden="true" />
      </button>
      <div id={id} className="skill-info-tooltip" hidden={!open}>
        <strong>In practice</strong>
        <p>{children}</p>
      </div>
    </div>
  )
}

function Skills() {
  return (
    <section
      className="skills section-container section-divider"
      id="skills"
      aria-labelledby="skills-title"
    >
      <div className="section-heading">
        <p className="section-label">Skills</p>
        <h2 id="skills-title">Technologies and tools I work with.</h2>
        <p className="skills-tagline-original">
          Always learning. Always <span>improving.</span>
        </p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-card" key={group.number}>
            <div className="skill-card-heading">
              <span className="skill-number" aria-hidden="true">{group.number}</span>
              <h3>{group.title}</h3>
              <SkillInfo title={group.title}>{group.context}</SkillInfo>
            </div>
            <div className="skill-list">
              {group.skills.map((skill) => (
                <div className="skill-item" key={skill.name}>
                  <span className="skill-icon" aria-hidden="true">{skill.icon}</span>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Skills
