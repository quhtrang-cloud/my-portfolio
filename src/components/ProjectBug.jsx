import { useEffect, useRef } from 'react'
import './ProjectBug.css'

/** Continuous, unobtrusive motion in the empty space beneath the project list. */
function ProjectBug() {
  const areaRef = useRef(null)
  const bugRef = useRef(null)

  useEffect(() => {
    const area = areaRef.current
    const bug = bugRef.current
    const selector = area?.closest('.work-project-selector')
    const details = area?.closest('.work-project-layout')?.querySelector('.work-project-details')
    if (!area || !bug || !selector) return undefined

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let frameId = 0
    let last = 0
    let x = 18
    let y = 22
    let heading = -0.25
    let targetHeading = 0.3
    let turnAt = 0
    let speed = 27
    let width = 0
    let height = 0

    const measure = () => {
      const bounds = area.getBoundingClientRect()
      const detailBounds = details?.getBoundingClientRect()
      const desiredHeight = detailBounds
        ? Math.max(115, detailBounds.bottom - bounds.top)
        : 160
      // The bug can explore down to the bottom of the project-details component.
      area.style.height = `${Math.min(900, desiredHeight)}px`
      width = Math.max(1, area.clientWidth - 28)
      height = Math.max(1, area.clientHeight - 28)
      x = Math.min(Math.max(x, 0), width)
      y = Math.min(Math.max(y, 0), height)
      draw()
    }

    const draw = () => {
      bug.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${heading + Math.PI / 2}rad)`
    }

    const step = (now) => {
      const dt = Math.min((now - (last || now)) / 1000, 0.05)
      last = now
      if (now > turnAt) {
        // Gentle directional changes, never a sudden reversal or a pause.
        targetHeading = heading + (Math.random() - 0.5) * 1.2
        speed = 21 + Math.random() * 15
        turnAt = now + 900 + Math.random() * 1800
      }
      const margin = 24
      const tx = x < margin ? 0 : x > width - margin ? Math.PI : null
      const ty = y < margin ? Math.PI / 2 : y > height - margin ? -Math.PI / 2 : null
      if (tx !== null || ty !== null) {
        const dx = (tx === null ? Math.cos(heading) : Math.cos(tx))
        const dy = (ty === null ? Math.sin(heading) : Math.sin(ty))
        targetHeading = Math.atan2(dy, dx)
      }
      const difference = Math.atan2(Math.sin(targetHeading - heading), Math.cos(targetHeading - heading))
      heading += Math.max(-1.7 * dt, Math.min(1.7 * dt, difference))
      x = Math.max(0, Math.min(width, x + Math.cos(heading) * speed * dt))
      y = Math.max(0, Math.min(height, y + Math.sin(heading) * speed * dt))
      draw()
      frameId = window.requestAnimationFrame(step)
    }

    const syncMotion = () => {
      window.cancelAnimationFrame(frameId)
      frameId = 0
      last = 0
      if (!reduceMotion.matches) frameId = window.requestAnimationFrame(step)
    }

    const observer = new ResizeObserver(measure)
    observer.observe(selector)
    if (details) observer.observe(details)
    measure()
    syncMotion()
    reduceMotion.addEventListener?.('change', syncMotion)
    return () => {
      window.cancelAnimationFrame(frameId)
      observer.disconnect()
      reduceMotion.removeEventListener?.('change', syncMotion)
    }
  }, [])

  return (
    <div className="project-bug-area" ref={areaRef} aria-hidden="true">
      <span className="project-bug" ref={bugRef}>
        <svg viewBox="0 0 48 48" width="28" height="28" fill="none" focusable="false">
          <g stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 13 15 8M29 13 33 8M15 21 8 17M15 27H7M16 33 9 38M33 21 40 17M33 27h8M32 33 39 38" />
            <ellipse cx="24" cy="26" rx="10" ry="14" />
            <path d="M24 12v28M16 19q8-4 16 0" />
            <circle cx="20" cy="16" r="1" fill="currentColor" stroke="none" />
            <circle cx="28" cy="16" r="1" fill="currentColor" stroke="none" />
          </g>
        </svg>
      </span>
    </div>
  )
}

export default ProjectBug
