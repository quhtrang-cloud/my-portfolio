import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Content stays visible if IntersectionObserver is unavailable.
function MotionEffects() {
  const { pathname } = useLocation()

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const nodes = [...document.querySelectorAll('main .section-heading, main .skill-card, main .experience-item, main .contact-intro, main .contact-content')]
    let observer
    const reveal = (node) => {
      node.classList.add('motion-visible')
      observer?.unobserve(node)
    }
    const reset = () => {
      observer?.disconnect()
      nodes.forEach((node) => {
        node.classList.remove('motion-reveal', 'motion-visible')
        node.style.removeProperty('--motion-delay')
      })
    }
    const initialise = () => {
      reset()
      if (media.matches || typeof IntersectionObserver === 'undefined') return
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => { if (entry.isIntersecting) reveal(entry.target) })
      }, { threshold: 0.08 })
      nodes.forEach((node, index) => {
        // Do not hide an element already visible or currently focused.
        const box = node.getBoundingClientRect()
        if (box.top < window.innerHeight && box.bottom > 0 || node.contains(document.activeElement)) return
        node.style.setProperty('--motion-delay', `${(index % 3) * 60}ms`)
        node.classList.add('motion-reveal')
        observer.observe(node)
      })
    }
    const handleFocus = (event) => {
      const node = event.target.closest?.('.motion-reveal')
      if (node) reveal(node)
    }
    initialise()
    media.addEventListener('change', initialise)
    document.addEventListener('focusin', handleFocus)
    return () => {
      reset()
      media.removeEventListener('change', initialise)
      document.removeEventListener('focusin', handleFocus)
    }
  }, [pathname])

  return null
}

export default MotionEffects
