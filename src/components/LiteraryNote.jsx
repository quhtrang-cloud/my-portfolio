import './LiteraryNote.css'

function LiteraryNote() {
  return (
    <figure className="literary-note">
      <span className="literary-note__eyebrow">
        IN THE MARGINS
      </span>

      <blockquote className="literary-note__quote">
        <p>
          What do we live for, if it is not to make
          life less difficult to each other?
        </p>
      </blockquote>

      <figcaption className="literary-note__source">
        George Eliot · <cite>Middlemarch</cite>
      </figcaption>
    </figure>
  )
}

export default LiteraryNote
