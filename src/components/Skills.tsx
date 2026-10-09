import type { ReactNode } from 'react'
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaLaptopCode,
  FaUniversalAccess,
  FaCode,
  FaPenRuler,
  FaPalette,
  FaTableColumns,
  FaUsers,
  FaArrowsRotate,
  FaImage,
  FaBoxOpen,
  FaBootstrap,
  FaDatabase,
  FaFlask,
} from 'react-icons/fa6'
import {
  SiJavascript,
  SiTypescript,
  SiExpress,
  SiPostgresql,
  SiVercel,
  SiJest,
} from 'react-icons/si'
type Skill = {
  name: string
  icon: ReactNode
}
type SkillGroup = {
  number: string
  title: string
  skills: Skill[]
}
const skillGroups: SkillGroup[] = [
  {
    number: '01',
    title: 'Front-End',
    skills: [
      { name: 'React', icon: <FaReact /> },
      { name: 'JavaScript ES6+', icon: <SiJavascript /> },
      { name: 'TypeScript', icon: <SiTypescript /> },
      { name: 'HTML5', icon: <FaHtml5 /> },
      { name: 'CSS3', icon: <FaCss3Alt /> },
      { name: 'Bootstrap', icon: <FaBootstrap /> },
      { name: 'Responsive Web Design', icon: <FaLaptopCode /> },
      { name: 'Accessibility (WCAG)', icon: <FaUniversalAccess /> },
    ],
  },
  {
    number: '02',
    title: 'Back-End & Database',
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
    skills: [
      { name: 'Git', icon: <FaGitAlt /> },
      { name: 'GitHub', icon: <FaGithub /> },
      { name: 'VS Code', icon: <FaCode /> },
      { name: 'npm', icon: <FaBoxOpen /> },
      { name: 'Vercel', icon: <SiVercel /> },
      { name: 'Jest', icon: <SiJest /> },
      { name: 'Supertest', icon: <FaFlask /> },
      { name: 'Testing & Debugging', icon: <FaCode /> },
      { name: 'Agile / Scrum', icon: <FaArrowsRotate /> },
    ],
  },
]
function Skills() {
  return (
    <section
      className="skills section-container section-divider"
      id="skills"
    >
      <div className="section-heading">
        <p className="section-label">Skills</p>
        <h2>Technologies and tools I work with.</h2>
      </div>
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-card" key={group.title}>
            <div className="skill-card-heading">
              <span className="skill-number">{group.number}</span>
              <h3>{group.title}</h3>
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