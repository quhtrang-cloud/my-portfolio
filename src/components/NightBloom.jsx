import { useEffect, useId, useRef } from 'react'
import './NightBloom.css'

// Each petal has its own organic contour; no radial duplication.
const petals = [
  { d: 'M100 116 C86 107 65 102 45 87 C38 80 32 67 34 58 C48 68 65 75 80 90 Q93 103 100 116Z', angle: -4, layer: 'back' },
  { d: 'M100 116 C83 96 62 78 55 55 Q51 42 55 31 C65 45 77 55 87 75 Q96 97 100 116Z', angle: -2, layer: 'back' },
  { d: 'M100 116 C94 91 82 63 85 38 Q86 26 92 19 C96 38 103 56 104 80 Q106 102 100 116Z', angle: -1, layer: 'back' },
  { d: 'M100 116 C105 92 111 67 124 46 Q134 31 144 27 C138 49 132 70 119 90 Q108 106 100 116Z', angle: 2, layer: 'back' },
  { d: 'M100 116 C116 101 135 91 156 81 Q169 73 174 62 C174 80 166 93 151 103 Q124 115 100 116Z', angle: 4, layer: 'back' },
  { d: 'M100 116 C81 108 63 101 49 94 Q42 87 42 78 C59 83 75 88 88 99 Q96 107 100 116Z', angle: -2, layer: 'front' },
  { d: 'M100 116 C87 98 75 77 75 58 Q77 45 83 39 C86 59 94 76 99 92 Q103 106 100 116Z', angle: -1, layer: 'front' },
  { d: 'M100 116 C95 97 94 74 102 52 Q108 40 115 36 C113 57 116 74 110 94 Q105 108 100 116Z', angle: 1, layer: 'front' },
  { d: 'M100 116 C108 101 123 88 141 79 Q153 75 160 77 C149 91 137 104 119 111 Q108 116 100 116Z', angle: 2, layer: 'front' },
]

// Catmull-Rom interpolation gives the flight a continuous, gently curved path.
function smoothPoint(points, progress) {
  const segment = Math.min(points.length - 2, Math.floor(progress * (points.length - 1)))
  const t = progress * (points.length - 1) - segment
  const p0 = points[Math.max(0, segment - 1)]
  const p1 = points[segment]
  const p2 = points[segment + 1]
  const p3 = points[Math.min(points.length - 1, segment + 2)]
  const axis = (key) => 0.5 * ((2 * p1[key]) + (-p0[key] + p2[key]) * t +
    (2 * p0[key] - 5 * p1[key] + 4 * p2[key] - p3[key]) * t * t +
    (-p0[key] + 3 * p1[key] - 3 * p2[key] + p3[key]) * t * t * t)
  return { x: axis('x'), y: axis('y') }
}

function NightBloom() {
  const flowerRef = useRef(null)
  const butterflyRef = useRef(null)
  const branchRef = useRef(null)
  const gradientId = useId().replace(/:/g, '')

  useEffect(() => {
    const flower = flowerRef.current
    const butterfly = butterflyRef.current
    const branch = branchRef.current
    const artwork = flower?.closest('.hero-intro-artwork')
    const frame = artwork?.querySelector('.hero-intro-frame')
    const availability = artwork?.closest('.hero-intro-portrait')?.querySelector('.hero-intro-availability')
    if (!flower || !butterfly || !artwork || !frame) return undefined

    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')
    let animation = null
    let timer = null
    let started = false
    let landed = false
    let readyFrame = null
    let disposed = false

    const isLight = () => document.documentElement.dataset.theme === 'light'
    // A longer, gently curved stem stays outside the portrait and reaches the lowered bloom.
    const updateBranch = () => {
      if (!branch) return
      const area = artwork.getBoundingClientRect()
      const photo = frame.getBoundingClientRect()
      const bloom = flower.getBoundingClientRect()
      const width = area.width
      const height = area.height
      if (!width || !height) return
      const edgeX = photo.right - area.left
      const caption = availability?.getBoundingClientRect()
      // Anchor the stem's lower end to the vertical centre of the availability line.
      const baseY = caption ? caption.top - area.top + caption.height / 2 : photo.bottom - area.top + 36
      // Use the actual SVG calyx position, including the flower's CSS rotation.
      // A bounding-box fraction would drift and leave a gap in the stem.
      const flowerSvg = flower.querySelector('.night-bloom-svg')
      const matrix = flowerSvg?.getScreenCTM()
      const tip = matrix
        ? new DOMPoint(100, 125).matrixTransform(matrix)
        : { x: bloom.left + bloom.width * 0.51, y: bloom.top + bloom.height * (125 / 230) }
      const tipX = tip.x - area.left
      const tipY = tip.y - area.top
      // Lower end aligns with the availability caption; the stem rises toward the bloom.
      const startX = edgeX + 16
      const startY = baseY + 8
      const dx = tipX - startX
      const dy = tipY - startY
      // The stem leaves its lower endpoint almost horizontally, then gently
      // turns upwards to meet the calyx. One continuous cubic curve.
      const p0 = { x: startX, y: startY }
      const p1 = { x: startX + dx * .38, y: startY - 4 }
      const p2 = { x: tipX - dx * .24, y: tipY + Math.abs(dy) * .38 }
      const p3 = { x: tipX, y: tipY }
      branch.setAttribute('viewBox', `0 0 ${width} ${height}`)
      branch.querySelector('.night-bloom-branch-line')?.setAttribute(
        'd', `M ${p0.x} ${p0.y} C ${p1.x} ${p1.y}, ${p2.x} ${p2.y}, ${p3.x} ${p3.y}`
      )

      // Leaves are attached to the curve and follow its local tangent.
      const sample = (t) => {
        const u = 1 - t
        return {
          x: u*u*u*p0.x + 3*u*u*t*p1.x + 3*u*t*t*p2.x + t*t*t*p3.x,
          y: u*u*u*p0.y + 3*u*u*t*p1.y + 3*u*t*t*p2.y + t*t*t*p3.y,
          tx: 3*u*u*(p1.x-p0.x) + 6*u*t*(p2.x-p1.x) + 3*t*t*(p3.x-p2.x),
          ty: 3*u*u*(p1.y-p0.y) + 6*u*t*(p2.y-p1.y) + 3*t*t*(p3.y-p2.y),
        }
      }
      const leafPath = (t, side, length, breadth) => {
        const p = sample(t)
        const magnitude = Math.hypot(p.tx, p.ty) || 1
        const nx = -p.ty / magnitude * side
        const ny = p.tx / magnitude * side
        const ax = p.x + nx * length
        const ay = p.y + ny * length
        const mx = (p.x + ax) / 2
        const my = (p.y + ay) / 2
        const tx = p.tx / magnitude
        const ty = p.ty / magnitude
        return `M ${p.x} ${p.y} Q ${mx + tx*breadth} ${my + ty*breadth}, ${ax} ${ay} Q ${mx - tx*breadth} ${my - ty*breadth}, ${p.x} ${p.y} Z`
      }
      const leaves = branch.querySelectorAll('.night-bloom-branch-leaf')
      leaves[0]?.setAttribute('d', leafPath(.45, -1, 17, 5))
      leaves[1]?.setAttribute('d', leafPath(.70, 1, 15, 4.5))
    }

    const positions = () => {
      const area = artwork.getBoundingClientRect()
      const bloom = flower.getBoundingClientRect()
      const photo = frame.getBoundingClientRect()
      return {
        startX: bloom.left - area.left + bloom.width * 0.52,
        startY: bloom.top - area.top + bloom.height * (110 / 230),
        outsideX: photo.right - area.left + 34,
        photoTop: photo.top - area.top,
        endX: photo.right - area.left - 12,
        endY: photo.top - area.top + 3,
      }
    }

    const placeAtLanding = () => {
      const { endX, endY } = positions()
      butterfly.style.left = `${endX}px`
      butterfly.style.top = `${endY}px`
      butterfly.style.opacity = isLight() ? '0' : '1'
      butterfly.style.transform = 'translate(-50%, -50%) rotate(-10deg) scale(.88)'
      butterfly.classList.remove('is-flying')
    }

    const stop = () => {
      window.clearTimeout(timer)
      timer = null
      if (animation) {
        animation.onfinish = null
        animation.cancel()
        animation = null
      }
      butterfly.classList.remove('is-flying')
    }

    const fly = () => {
      timer = null
      if (disposed || isLight() || motionPreference.matches) return
      const { startX, startY, outsideX, photoTop, endX, endY } = positions()
      // Depart from the flower, drift to the outside right, arc upward,
      // then return to settle on the portrait's top-right corner.
      // A slow, continuous outward arc from the bloom, then a gentle landing.
      const points = [
        { x: startX, y: startY },
        { x: startX + 16, y: startY - 24 },
        { x: outsideX, y: startY - 44 },
        { x: outsideX + 5, y: photoTop + 125 },
        { x: outsideX - 8, y: photoTop + 62 },
        { x: endX + 11, y: photoTop + 13 },
        { x: endX, y: endY },
      ]
      const steps = 180
      const keyframes = Array.from({ length: steps + 1 }, (_, i) => {
        const progress = i / steps
        // Gentle departure, smooth travel, soft deceleration at landing.
        const t = 1 - Math.pow(1 - progress, 1.55)
        const point = smoothPoint(points, t)
        const sway = Math.sin(t * Math.PI * 2.5) * 1.8 * Math.sin(Math.PI * t)
        const tilt = -9 + 4 * Math.sin(t * Math.PI * 2)
        return {
          left: `${point.x + sway}px`,
          top: `${point.y}px`,
          opacity: 1,
          transform: `translate(-50%, -50%) rotate(${tilt}deg) scale(${0.78 + 0.1 * t})`,
          offset: progress,
        }
      })
      butterfly.classList.add('is-flying')
      animation = butterfly.animate(keyframes, { duration: 7800, easing: 'linear', fill: 'forwards' })
      animation.onfinish = () => {
        if (disposed) return
        landed = true
        animation?.cancel()
        animation = null
        placeAtLanding()
      }
    }

    const syncTheme = () => {
      if (isLight()) {
        stop()
        butterfly.style.opacity = '0'
        // Permit a new flight if the user switches back to dark mode.
        started = false
        landed = false
        return
      }
      if (motionPreference.matches) {
        stop()
        landed = true
        placeAtLanding()
      } else if (!started && !landed) {
        started = true
        butterfly.style.opacity = '0'
        fly()
      }
    }

    const onResize = () => {
      updateBranch()
      if (landed && !isLight()) placeAtLanding()
    }
    const themeObserver = new MutationObserver(syncTheme)
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
    const resizeObserver = new ResizeObserver(onResize)
    resizeObserver.observe(artwork)
    resizeObserver.observe(frame)
    resizeObserver.observe(flower)
    if (availability) resizeObserver.observe(availability)
    window.addEventListener('resize', onResize, { passive: true })
    motionPreference.addEventListener?.('change', syncTheme)
    // Start closed, then open smoothly on dark mode; transitions work in both directions.
    readyFrame = window.requestAnimationFrame(() => {
      if (!disposed) flower.classList.add('is-ready')
    })
    updateBranch()
    syncTheme()

    return () => {
      disposed = true
      window.cancelAnimationFrame(readyFrame)
      stop()
      themeObserver.disconnect()
      resizeObserver.disconnect()
      window.removeEventListener('resize', onResize)
      motionPreference.removeEventListener?.('change', syncTheme)
    }
  }, [])

  return (
    <>
      {/* A slender stem starts at availability-text height and rises to the flower. */}
      <svg ref={branchRef} className="night-bloom-branch" aria-hidden="true" focusable="false">
        <path className="night-bloom-branch-line" />
        <path className="night-bloom-branch-leaf" />
        <path className="night-bloom-branch-leaf" />
      </svg>
      <div className="night-bloom" ref={flowerRef} aria-hidden="true">
        <svg className="night-bloom-svg" viewBox="0 0 200 230" fill="none" focusable="false">
          <defs>
            <linearGradient id={`${gradientId}-petal`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#f9f7ee" stopOpacity=".91" />
              <stop offset=".58" stopColor="#e0ede9" stopOpacity=".75" />
              <stop offset="1" stopColor="#8db9b1" stopOpacity=".40" />
            </linearGradient>
            <linearGradient id={`${gradientId}-leaf`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#83ada0" stopOpacity=".72" />
              <stop offset="1" stopColor="#426e67" stopOpacity=".68" />
            </linearGradient>
          </defs>
          {/* The stalk is drawn behind the portrait frame by the artwork SVG. */}
          <g className="night-bloom-flower">
            {petals.map((petal, index) => (
              <g
                key={index}
                className={`night-bloom-petal night-bloom-petal-${petal.layer}`}
                style={{ '--petal-tilt': `${petal.angle}deg`, '--petal-index': index }}
              >
                <path fill={`url(#${gradientId}-petal)`} d={petal.d} />
              </g>
            ))}
            <path className="night-bloom-calyx" d="M93 115 Q100 120 107 115 Q106 123 100 125 Q95 122 93 115Z" />
            <g className="night-bloom-stamens">
              <path d="M100 112 Q91 97 85 88 M100 112 Q95 92 95 79 M100 112 Q104 92 107 82 M100 112 Q112 98 118 91" />
              <circle cx="85" cy="88" r="1.4" /><circle cx="95" cy="79" r="1.4" /><circle cx="107" cy="82" r="1.4" /><circle cx="118" cy="91" r="1.4" />
            </g>
          </g>
        </svg>
      </div>
      <span className="night-bloom-butterfly" ref={butterflyRef} aria-hidden="true">
        <svg viewBox="0 0 32 26" fill="none" focusable="false">
          <g className="night-bloom-butterfly-left"><path d="M16 13 C9 1 1 3 3 11 C4 15 10 16 16 13Z" /><path d="M16 14 C7 14 6 22 11 23 C14 23 16 19 16 14Z" /></g>
          <g className="night-bloom-butterfly-right"><path d="M16 13 C23 1 31 3 29 11 C28 15 22 16 16 13Z" /><path d="M16 14 C25 14 26 22 21 23 C18 23 16 19 16 14Z" /></g>
          <path className="night-bloom-butterfly-body" d="M16 10V20 M16 11L13 7 M16 11L19 7" />
        </svg>
      </span>
    </>
  )
}

export default NightBloom
