import { useEffect, useId, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import SkillsTagline from './SkillsTagline'
import { VscVscode } from 'react-icons/vsc'
import {
  FaWordpress,
  FaCircleInfo,
  FaCircleCheck,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaCode,
  FaPenRuler,
  FaTableColumns,
  FaUsers,
  FaArrowsRotate,
  FaImage,
  FaBoxOpen,
  FaBootstrap,
  FaDatabase,
  FaFlask,
  FaPalette,
  FaLaptopCode,
  FaUniversalAccess,
  FaRoute,
  FaLock,
  FaSitemap,
  FaUserGroup,
  FaClipboardCheck,
  FaGlobe,
  FaMapLocationDot,
  FaCloud,
  FaGears,
} from 'react-icons/fa6'
import {
  SiJavascript,
  SiTypescript,
  SiExpress,
  SiPostgresql,
  SiVercel,
  SiJest,
  SiVite,
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

type SkillInfoProps = {
  title: string
  children: ReactNode
}

const skillGroups: SkillGroup[] = [
  {
    number: '01',
    title: 'Front-End',
    context:
      'I build responsive interfaces using React, JavaScript and TypeScript. My IP Address Tracker integrates Leaflet maps, API-driven results, recent searches and request cancellation. My projects also include keyboard navigation and visible focus states.',
    skills: [
      { name: 'React', icon: <FaReact /> },
      { name: 'React Router', icon: <FaRoute /> },
      { name: 'JavaScript ES6+', icon: <SiJavascript /> },
      { name: 'TypeScript', icon: <SiTypescript /> },
      { name: 'HTML5', icon: <FaHtml5 /> },
      { name: 'CSS3', icon: <FaCss3Alt /> },
      { name: 'Bootstrap', icon: <FaBootstrap /> },
      { name: 'Leaflet', icon: <FaMapLocationDot /> },
      { name: 'Responsive Web Design', icon: <FaLaptopCode /> },
      { name: 'Web Accessibility', icon: <FaUniversalAccess /> },
    ],
  },
  {
    number: '02',
    title: 'Back-End & Database',
    context:
      'I used Node.js, Express and PostgreSQL in my healthcare and furniture projects, implementing authentication, role-based access controls and relational database operations. For IP Address Tracker, I used a Vercel Function to handle geolocation requests with a server-side API key.',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Express.js', icon: <SiExpress /> },
      { name: 'REST APIs', icon: <FaCode /> },
      { name: 'Vercel Functions', icon: <FaCloud /> },
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
      { name: 'SQL', icon: <FaDatabase /> },
      { name: 'Relational Database Design', icon: <FaTableColumns /> },
      { name: 'Authentication & Authorisation', icon: <FaLock /> },
    ],
  },
  {
    number: '03',
    title: 'Design & UX',
    context:
      'I applied user analysis, personas, user flows, information architecture, wireframing, Figma prototyping and heuristic evaluation in my academic UX projects. My web design internship also involved refining page layouts and creating digital campaign assets.',
    skills: [
      { name: 'Figma', icon: <FaFigma /> },
      { name: 'Adobe Photoshop', icon: <FaImage /> },
      { name: 'Canva', icon: <FaPalette /> },
      { name: 'Wireframing', icon: <FaTableColumns /> },
      { name: 'Prototyping', icon: <FaPenRuler /> },
      { name: 'User-Centred Design', icon: <FaUsers /> },
      { name: 'Information Architecture', icon: <FaSitemap /> },
      { name: 'User Flows', icon: <FaRoute /> },
      { name: 'Personas', icon: <FaUserGroup /> },
      { name: 'Heuristic Evaluation', icon: <FaClipboardCheck /> },
    ],
  },
  {
    number: '04',
    title: 'Tools & Workflow',
    context:
      'I use Git and GitHub for version control, Vite for builds and Vercel for deployment. My projects include Jest and Supertest tests, plus Playwright tests across Chromium, Firefox and WebKit. I configured GitHub Actions to run checks and browser tests for IP Address Tracker. I have also performed manual testing, used Scrum in team projects and maintained WordPress content during my internship.',
    skills: [
      { name: 'Git', icon: <FaGitAlt /> },
      { name: 'GitHub', icon: <FaGithub /> },
      { name: 'GitHub Actions', icon: <FaGears /> },
      { name: 'Jest', icon: <SiJest /> },
      { name: 'Supertest', icon: <FaFlask /> },
      { name: 'Playwright', icon: <FaCircleCheck /> },
      { name: 'Manual Testing', icon: <FaClipboardCheck /> },
      { name: 'Cross-Browser Testing', icon: <FaGlobe /> },
      { name: 'Agile / Scrum', icon: <FaArrowsRotate /> },
      { name: 'Vite', icon: <SiVite /> },
      { name: 'Vercel', icon: <SiVercel /> },
      { name: 'WordPress', icon: <FaWordpress /> },
      { name: 'VS Code', icon: <VscVscode /> },
      { name: 'npm', icon: <FaBoxOpen /> },
    ],
  },
]

function SkillInfo({ title, children }: SkillInfoProps) {
  const [open, setOpen] = useState(false)
  const id = useId()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return

    const dismiss = (event: PointerEvent) => {
      if (
        event.target instanceof Node &&
        !ref.current?.contains(event.target)
      ) {
        setOpen(false)
      }
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
    <div
      className="skill-info"
      ref={ref}
      onPointerEnter={(event) => {
        if (event.pointerType === 'mouse') setOpen(true)
      }}
      onPointerLeave={() => {
        if (!ref.current?.contains(document.activeElement)) {
          setOpen(false)
        }
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setOpen(false)
        }
      }}
    >
      <button
        type="button"
        className="skill-info-button"
        aria-label={`How I use ${title} skills`}
        aria-expanded={open}
        aria-controls={id}
        onFocus={(event) => {
          if (event.currentTarget.matches(':focus-visible')) {
            setOpen(true)
          }
        }}
        onClick={() => setOpen((previous) => !previous)}
      >
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
        <SkillsTagline />
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-card" key={group.number}>
            <div className="skill-card-heading">
              <span className="skill-number" aria-hidden="true">
                {group.number}
              </span>
              <h3>{group.title}</h3>
              <SkillInfo title={group.title}>{group.context}</SkillInfo>
            </div>

            <div className="skill-list">
              {group.skills.map((skill) => (
                <div className="skill-item" key={skill.name}>
                  <span className="skill-icon" aria-hidden="true">
                    {skill.icon}
                  </span>
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