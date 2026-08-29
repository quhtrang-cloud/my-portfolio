import { useEffect, useState } from 'react'


function ProjectSectionNav({ items }) {
  const [activeSection, setActiveSection] = useState(items[0]?.id ?? '')


  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter(Boolean)

    if (!sections.length) {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-30% 0px -60% 0px',
        threshold: 0,
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [items])


  return (
    <nav className="project-section-nav" aria-label="Project sections">
      <div className="project-section-nav-inner">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={activeSection === item.id ? 'active' : ''}
            aria-current={activeSection === item.id ? 'location' : undefined}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  )
}


export default ProjectSectionNav
