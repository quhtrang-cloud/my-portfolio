import { useEffect, useRef, useState } from 'react'
import { FaBars, FaMoon, FaSun, FaXmark } from 'react-icons/fa6'

const sectionIds = ['home', 'about', 'projects', 'skills', 'experience', 'contact']

function Navbar() {
  const [activeSection, setActiveSection] = useState('')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navbarRef = useRef(null)
  const menuButtonRef = useRef(null)
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('portfolio-theme') === 'light' ? 'light' : 'dark' }
    catch { return 'dark' }
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try { localStorage.setItem('portfolio-theme', theme) } catch { /* Storage may be unavailable. */ }
  }, [theme])

  useEffect(() => {
    const navbar = navbarRef.current
    let scrollOffset = 88
    const handleScroll = () => {
      setScrolled(window.scrollY > 12)
      const sections = sectionIds
        .map((id) => document.getElementById(id))
        .filter(Boolean)
        .sort((a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top)
      let currentSection = 'home'
      sections.forEach((section) => {
        if (section.getBoundingClientRect().top <= scrollOffset + 2) currentSection = section.id
      })
      const pageHeight = document.documentElement.scrollHeight
      if (pageHeight > window.innerHeight + 5 && window.scrollY + window.innerHeight >= pageHeight - 5 && sections.length > 0) {
        currentSection = sections[sections.length - 1].id
      }
      setActiveSection(currentSection)
    }
    const updateOffset = () => {
      scrollOffset = Math.ceil(navbar?.getBoundingClientRect().height || 72) + 16
      document.documentElement.style.setProperty('--nav-scroll-offset', `${scrollOffset}px`)
      handleScroll()
    }
    updateOffset()
    const observer = typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(updateOffset)
    if (navbar) observer?.observe(navbar)
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', updateOffset)
    window.addEventListener('hashchange', handleScroll)
    return () => {
      observer?.disconnect()
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', updateOffset)
      window.removeEventListener('hashchange', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }
    const handleOutsideClick = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) setMenuOpen(false)
    }
    const handleResize = () => {
      if (window.innerWidth > 900) setMenuOpen(false)
    }
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('pointerdown', handleOutsideClick)
    window.addEventListener('resize', handleResize)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('pointerdown', handleOutsideClick)
      window.removeEventListener('resize', handleResize)
    }
  }, [menuOpen])

  return (
    <>
      <a className="portfolio-skip-link" href="#main-content">Skip to content</a>
      <nav className={`navbar portfolio-navbar${scrolled ? ' is-scrolled' : ''}`} ref={navbarRef} aria-label="Main navigation">
        <a href="#home" className="logo" onClick={() => setMenuOpen(false)}>Quynh Trang Nguyen<span className="portfolio-logo-dot" aria-hidden="true">.</span></a>
        <ul id="portfolio-navigation" className={`nav-links${menuOpen ? ' is-open' : ''}`}>
          {sectionIds.map((id) => (
            <li key={id}><a href={`#${id}`} onClick={() => setMenuOpen(false)} className={activeSection === id ? 'active' : ''} aria-current={activeSection === id ? 'location' : undefined}>{id.charAt(0).toUpperCase() + id.slice(1)}</a></li>
          ))}
        </ul>
        <button className="portfolio-theme-toggle" type="button" role="switch" aria-checked={theme === 'dark'} aria-label="Dark mode" title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'} onClick={() => setTheme((current) => current === 'dark' ? 'light' : 'dark')}>
          <span className="portfolio-theme-knob">{theme === 'dark' ? <FaMoon aria-hidden="true" /> : <FaSun aria-hidden="true" />}</span>
        </button>
        <button ref={menuButtonRef} className="portfolio-menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} aria-controls="portfolio-navigation" onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? <FaXmark aria-hidden="true" /> : <FaBars aria-hidden="true" />}
        </button>
      </nav>
    </>
  )
}

export default Navbar
