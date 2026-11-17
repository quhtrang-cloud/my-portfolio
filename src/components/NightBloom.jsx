import './NightBloom.css'

// Decorative SVG: the site's existing data-theme attribute controls the bloom.
const outerPetals = [-78, -52, -26, 0, 26, 52, 78]
const innerPetals = [-54, -27, 0, 27, 54]

function NightBloom() {
  return (
    <div className="night-bloom" aria-hidden="true">
      <svg className="night-bloom-svg" viewBox="0 0 200 230" fill="none" focusable="false">
        <defs>
          <linearGradient id="night-bloom-petal" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#fffdf3" />
            <stop offset="0.7" stopColor="#f1eee0" />
            <stop offset="1" stopColor="#b7cbb9" />
          </linearGradient>
          <linearGradient id="night-bloom-leaf" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#7ca99a" />
            <stop offset="1" stopColor="#315c55" />
          </linearGradient>
        </defs>
        <path className="night-bloom-stem" d="M100 116 C86 141 119 157 103 181 S88 207 94 225" stroke="#719c8b" strokeWidth="4" strokeLinecap="round" />
        <path d="M103 181 C84 155 61 158 49 170 C65 190 86 194 103 181Z" fill="url(#night-bloom-leaf)" />
        <path d="M98 195 C119 172 141 174 150 188 C134 205 114 207 98 195Z" fill="url(#night-bloom-leaf)" />
        <g className="night-bloom-flower">
          {outerPetals.map((angle) => (
            <g className="night-bloom-petal night-bloom-petal-outer" key={`outer-${angle}`} style={{ '--open-angle': `${angle}deg`, '--closed-angle': `${angle * 0.09}deg` }}>
              <path d="M100 116 C76 93 76 44 100 17 C124 44 124 93 100 116Z" fill="url(#night-bloom-petal)" stroke="#e5e9da" strokeWidth="1" />
            </g>
          ))}
          {innerPetals.map((angle) => (
            <g className="night-bloom-petal night-bloom-petal-inner" key={`inner-${angle}`} style={{ '--open-angle': `${angle}deg`, '--closed-angle': `${angle * 0.07}deg` }}>
              <path d="M100 116 C86 96 85 64 100 42 C115 64 114 96 100 116Z" fill="#fffdf4" stroke="#e7e5d8" strokeWidth="0.8" />
            </g>
          ))}
          <path d="M89 114 Q100 123 111 114 L106 127 Q100 132 94 127Z" fill="#6b9b81" />
          <g className="night-bloom-stamens" stroke="#e7bd72" strokeWidth="1.4" strokeLinecap="round">
            <path d="M100 111 L93 80" /><path d="M100 111 L100 76" /><path d="M100 111 L107 80" />
            <circle cx="93" cy="80" r="2" fill="#f5d18a" stroke="none" />
            <circle cx="100" cy="76" r="2" fill="#f5d18a" stroke="none" />
            <circle cx="107" cy="80" r="2" fill="#f5d18a" stroke="none" />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default NightBloom
