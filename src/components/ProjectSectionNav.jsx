import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import {
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa6'

function ProjectSectionNav({ items }) {
  const navigationRef = useRef(null)

  const [activeSection, setActiveSection] = useState(
    items[0]?.id ?? ''
  )
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  const updateScrollButtons = useCallback(() => {
    const navigation = navigationRef.current

    if (!navigation) {
      return
    }

    const maximumScroll =
      navigation.scrollWidth - navigation.clientWidth

    setCanScrollLeft(navigation.scrollLeft > 4)
    setCanScrollRight(
      maximumScroll > 4 &&
        navigation.scrollLeft < maximumScroll - 4
    )
  }, [])

  const scrollNavigation = (direction) => {
    const navigation = navigationRef.current

    if (!navigation) {
      return
    }

    const scrollDistance = Math.min(
      navigation.clientWidth * 0.7,
      280
    )

    navigation.scrollBy({
      left:
        direction === 'right'
          ? scrollDistance
          : -scrollDistance,
      behavior: 'smooth',
    })
  }

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

    return () => observer.disconnect()
  }, [items])

  useEffect(() => {
    const navigation = navigationRef.current

    if (!navigation) {
      return undefined
    }

    const animationFrame = requestAnimationFrame(
      updateScrollButtons
    )

    navigation.addEventListener(
      'scroll',
      updateScrollButtons,
      { passive: true }
    )
    window.addEventListener('resize', updateScrollButtons)

    const resizeObserver =
      typeof ResizeObserver === 'undefined'
        ? null
        : new ResizeObserver(updateScrollButtons)

    resizeObserver?.observe(navigation)

    return () => {
      cancelAnimationFrame(animationFrame)
      navigation.removeEventListener(
        'scroll',
        updateScrollButtons
      )
      window.removeEventListener(
        'resize',
        updateScrollButtons
      )
      resizeObserver?.disconnect()
    }
  }, [items, updateScrollButtons])

  useEffect(() => {
    const navigation = navigationRef.current

    if (!navigation || !activeSection) {
      return
    }

    const activeLink = Array.from(
      navigation.querySelectorAll('a')
    ).find(
      (link) =>
        link.getAttribute('href') === `#${activeSection}`
    )

    if (!activeLink) {
      return
    }

    const targetScroll =
      activeLink.offsetLeft +
      activeLink.offsetWidth / 2 -
      navigation.clientWidth / 2

    navigation.scrollTo({
      left: Math.max(0, targetScroll),
      behavior: 'smooth',
    })
  }, [activeSection])

  const navigationClassName = [
    'project-section-nav',
    canScrollLeft ? 'has-left-arrow' : '',
    canScrollRight ? 'has-right-arrow' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <nav
      className={navigationClassName}
      aria-label="Project sections"
    >
      {canScrollLeft && (
        <button
          type="button"
          className="project-nav-arrow project-nav-arrow-left"
          onClick={() => scrollNavigation('left')}
          aria-label="Show previous project sections"
        >
          <FaChevronLeft aria-hidden="true" />
        </button>
      )}

      <div
        ref={navigationRef}
        className="project-section-nav-inner"
      >
        {items.map((item) => {
          const isActive = activeSection === item.id

          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={isActive ? 'active' : ''}
              aria-current={
                isActive ? 'location' : undefined
              }
            >
              {item.label}
            </a>
          )
        })}
      </div>

      {canScrollRight && (
        <button
          type="button"
          className="project-nav-arrow project-nav-arrow-right"
          onClick={() => scrollNavigation('right')}
          aria-label="Show more project sections"
        >
          <FaChevronRight aria-hidden="true" />
        </button>
      )}
    </nav>
  )
}

export default ProjectSectionNav
