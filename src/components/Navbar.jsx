import { useEffect, useState } from 'react'

function Navbar() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const sectionIds = [
      'about',
      'skills',
      'projects',
      'experience',
      'contact',
    ]

    const handleScroll = () => {
      const sections = sectionIds
        .map((id) => document.getElementById(id))
        .filter(Boolean)

      if (sections.length === 0) return

      const scrollPosition = window.scrollY + 140

      let currentSection = ''

      sections.forEach((section) => {
        if (scrollPosition >= section.offsetTop) {
          currentSection = section.id
        }
      })

      /*
        Important:
        If we reach the bottom of the page,
        activate the last section that actually exists.
      */
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 5

      if (isAtBottom) {
        currentSection =
          sections[sections.length - 1].id
      }

      setActiveSection(currentSection)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    window.addEventListener('resize', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        Quynh Trang Nguyen
      </a>

      <ul className="nav-links">
        <li>
          <a
            href="#about"
            className={
              activeSection === 'about'
                ? 'active'
                : ''
            }
          >
            About
          </a>
        </li>

        <li>
          <a
            href="#skills"
            className={
              activeSection === 'skills'
                ? 'active'
                : ''
            }
          >
            Skills
          </a>
        </li>

        <li>
          <a
            href="#projects"
            className={
              activeSection === 'projects'
                ? 'active'
                : ''
            }
          >
            Projects
          </a>
        </li>

        <li>
          <a
            href="#experience"
            className={
              activeSection === 'experience'
                ? 'active'
                : ''
            }
          >
            Experience
          </a>
        </li>

        <li>
          <a
            href="#contact"
            className={
              activeSection === 'contact'
                ? 'active'
                : ''
            }
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar