import { useId, useState } from 'react'
import './LiteraryNote.css'

function LiteraryNote() {
  const [isOpen, setIsOpen] = useState(false)
  const noteId = useId()

  return (
    <figure className={`literary-note${isOpen ? ' literary-note--open' : ''}`}>
      <button
        className="literary-note__fold"
        type="button"
        aria-label={isOpen ? 'Fold the note' : 'Unfold the note'}
        aria-expanded={isOpen}
        aria-controls={noteId}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span aria-hidden="true">{isOpen ? '−' : '+'}</span>
      </button>

      <span className="literary-note__eyebrow">IN THE MARGINS</span>

      <blockquote className="literary-note__quote">
        <p>
          “What do we live for, if it is not to make
          life less difficult to each other?”
        </p>
      </blockquote>

      <figcaption className="literary-note__source">
        George Eliot · <cite>Middlemarch</cite>
      </figcaption>

      <div className="literary-note__reveal" id={noteId} hidden={!isOpen}>
        <span className="literary-note__reveal-label">JUST A THOUGHT</span>
        <p>Perhaps the best details are the ones that make someone feel understood.</p>
      </div>
    </figure>
  )
}

export default LiteraryNote
