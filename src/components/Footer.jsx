import { FaArrowUp } from 'react-icons/fa6'

function Footer() {
  return (
    <footer className="footer section-container">
      <div className="footer-content">
        <p className="footer-copyright">
          © 2026 Quynh Trang Nguyen
        </p>

        <p className="footer-built">
          Built with React
        </p>

        <a
          href="#home"
          className="back-to-top"
        >
          Back to top
          <FaArrowUp aria-hidden="true" />
        </a>
      </div>
    </footer>
  )
}

export default Footer