import { useEffect, useRef, useState } from 'react'

const words = ['improving.', 'building.', 'exploring.']

export default function SkillsTagline() {
  const ref = useRef<HTMLParagraphElement>(null)
  const [paused, setPaused] = useState(false)
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


  return (
    <div className="skills-tagline-row" data-paused={paused || !visible || !pageVisible || reduced}>
    <p className="skills-tagline-original" ref={ref}>
      <span className="skills-tagline-accessible">Always learning. Always improving.</span>
      <span className="skills-tagline-visual" aria-hidden="true">
        Always learning. Always{' '}
        <span className="skills-tagline-word">
          <span className="skills-tagline-measure">improving.</span>
          <span className="skills-tagline-current" key={reduced ? 'static' : step}
            onAnimationEnd={(event) => {
              if (event.target === event.currentTarget && !reduced) {
                setStep(value => (value + 1) % words.length)
              }
            }}>{reduced ? words[0] : words[step]}</span>
        </span>
      </span>
    </p>
    {!reduced && (
      <button type="button" className="skills-tagline-toggle"
        aria-label={paused ? 'Resume changing words' : 'Pause changing words'}
        onClick={() => setPaused(value => !value)}>
        <span aria-hidden="true">{paused ? '▶' : 'Ⅱ'}</span>
      </button>
    )}
    </div>
  )
}
