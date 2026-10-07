import { useEffect, useRef, useState } from 'react'

const sectionIds = [
  'about',
  'skills',
  'projects',
  'experience',
  'contact',
]

function Navbar() {
  const [activeSection, setActiveSection] = useState('')
  const navbarRef = useRef(null)

  useEffect(() => {
    const navbar = navbarRef.current
    let scrollOffset = 88

    const handleScroll = () => {
      const sections = sectionIds
        .map((id) => document.getElementById(id))
        .filter(Boolean)

      let currentSection = ''

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top

        if (sectionTop <= scrollOffset + 2) {
          currentSection = section.id
        }
      })

      const pageHeight = document.documentElement.scrollHeight
      const isAtBottom =
        pageHeight > window.innerHeight + 5 &&
        window.scrollY + window.innerHeight >= pageHeight - 5

      if (isAtBottom && sections.length > 0) {
        currentSection = sections[sections.length - 1].id
      }

      setActiveSection(currentSection)
    }

    const updateOffset = () => {
      const navbarHeight =
        navbar?.getBoundingClientRect().height || 72

      scrollOffset = Math.ceil(navbarHeight) + 16

      document.documentElement.style.setProperty(
        '--nav-scroll-offset',
        `${scrollOffset}px`
      )

      handleScroll()
    }

    updateOffset()

    const observer = new ResizeObserver(updateOffset)

    if (navbar) {
      observer.observe(navbar)
    }

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })
    window.addEventListener('resize', updateOffset)
    window.addEventListener('hashchange', handleScroll)

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', updateOffset)
      window.removeEventListener('hashchange', handleScroll)
    }
  }, [])

  return (
    <nav
      className="navbar"
      ref={navbarRef}
      aria-label="Main navigation"
    >
      <a href="#home" className="logo">
        Quynh Trang Nguyen
      </a>
      <ul className="nav-links">
        {sectionIds.map((id) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={activeSection === id ? 'active' : ''}
              aria-current={
                activeSection === id ? 'location' : undefined
              }
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar