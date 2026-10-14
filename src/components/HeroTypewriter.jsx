import { useEffect, useRef, useState } from 'react'

const phrases = ['Front-end focused', 'UX-aware', 'Quality-minded']

function HeroTypewriter() {
  const [typing, setTyping] = useState({ phrase: 0, length: phrases[0].length, deleting: false })
  const [finished, setFinished] = useState(false)
  const [reduced, setReduced] = useState(false)
  const [visible, setVisible] = useState(false)
  const [pageVisible, setPageVisible] = useState(true)
  const ref = useRef(null)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduced(media.matches)
    update()
    media.addEventListener('change', update)
    const observer = typeof IntersectionObserver === 'undefined' ? null : new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting))
    if (observer && ref.current) observer.observe(ref.current)
    else setVisible(true)
    const handleVisibility = () => setPageVisible(!document.hidden)
    handleVisibility()
    document.addEventListener('visibilitychange', handleVisibility)
    return () => {
      observer?.disconnect()
      media.removeEventListener('change', update)
      document.removeEventListener('visibilitychange', handleVisibility)
    }
  }, [])

  useEffect(() => {
    if (finished || reduced || !visible || !pageVisible) return
    const full = typing.length === phrases[typing.phrase].length
    const delay = !typing.deleting && full ? 2500 : typing.deleting ? 65 : 100
    const timer = window.setTimeout(() => {
      if (!typing.deleting && full && typing.phrase === phrases.length - 1) {
        setFinished(true)
        return
      }
      setTyping((current) => {
        if (!current.deleting && current.length === phrases[current.phrase].length) return { ...current, deleting: true }
        if (current.deleting && current.length === 0) return { phrase: (current.phrase + 1) % phrases.length, length: 0, deleting: false }
        return { ...current, length: current.length + (current.deleting ? -1 : 1) }
      })
    }, delay)
    return () => window.clearTimeout(timer)
  }, [typing, finished, reduced, visible, pageVisible])

  return (
    <div className="portfolio-typewriter" ref={ref}>
      <p className="portfolio-eyebrow" aria-label="Front-end focused, UX-aware and quality-minded">
        <span className="portfolio-typed-text" aria-hidden="true">{reduced || finished ? phrases[0] : phrases[typing.phrase].slice(0, typing.length)}{!reduced && !finished && <span className="portfolio-type-cursor">|</span>}</span>
      </p>
    </div>
  )
}

export default HeroTypewriter
