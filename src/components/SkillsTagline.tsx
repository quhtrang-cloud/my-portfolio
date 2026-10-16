import { useEffect, useRef, useState } from 'react'

const words = ['improving.', 'building.', 'exploring.', 'improving.']

export default function SkillsTagline() {
  const ref = useRef<HTMLParagraphElement>(null)
  const [step, setStep] = useState(0)
  const [visible, setVisible] = useState(false)
  const [reduced, setReduced] = useState(true)
  const [pageVisible, setPageVisible] = useState(true)

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduced(preference.matches)
    const visibility = () => setPageVisible(!document.hidden)
    update()
    visibility()
    preference.addEventListener('change', update)
    document.addEventListener('visibilitychange', visibility)
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.5 })
    if (ref.current) observer.observe(ref.current)
    return () => {
      observer.disconnect()
      preference.removeEventListener('change', update)
      document.removeEventListener('visibilitychange', visibility)
    }
  }, [])

  useEffect(() => {
    if (reduced || !visible || !pageVisible || step === words.length - 1) return
    const timer = window.setTimeout(() => setStep(value => value + 1), 1500)
    return () => window.clearTimeout(timer)
  }, [step, reduced, visible, pageVisible])

  return (
    <p className="skills-tagline-original" ref={ref}>
      <span className="skills-tagline-accessible">Always learning. Always improving.</span>
      <span className="skills-tagline-visual" aria-hidden="true">
        Always learning. Always{' '}
        <span className="skills-tagline-word">
          <span className="skills-tagline-measure">improving.</span>
          <span className="skills-tagline-current" key={reduced ? 'static' : step}>{reduced ? words[0] : words[step]}</span>
        </span>
      </span>
    </p>
  )
}
