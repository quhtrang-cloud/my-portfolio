import { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa6'

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY >= 700)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    })
  }

  return (
    <button
      type="button"
      className={`floating-back-to-top${isVisible ? ' is-visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Back to top"
      title="Back to top"
    >
      <FaArrowUp aria-hidden="true" />
    </button>
  )
}

export default BackToTop
