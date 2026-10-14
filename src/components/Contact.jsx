import { useRef, useState } from 'react'
import {
  FaArrowRight,
  FaArrowUpRightFromSquare,
  FaCopy,
  FaCheck,
  FaEnvelope,
  FaPaperPlane,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa6'

const email = 'quhtrang@gmail.com'

function Contact() {
  const [copyStatus, setCopyStatus] = useState('idle')
  const copying = useRef(false)

  const copyEmail = async () => {
    if (copying.current) return
    copying.current = true
    setCopyStatus('copying')
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable')
      await navigator.clipboard.writeText(email)
      setCopyStatus('copied')
    } catch {
      setCopyStatus('failed')
    } finally {
      copying.current = false
    }
  }

  const statusMessage = copyStatus === 'copied'
    ? 'Email address copied.'
    : copyStatus === 'failed'
      ? 'Could not copy. Please select and copy the email address above.'
      : ''

  return (
    <section
      className="contact section-container contact-with-copy"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="contact-layout">
        <div className="contact-intro">
          <p className="section-label">Contact</p>
          <h2 id="contact-title">Let&apos;s build something great together.</h2>
        </div>
        <div className="contact-content">
          <p className="contact-description">
            Thank you for exploring my work! I&apos;m currently looking for
            opportunities as a Junior Web Developer or QA Engineer. If
            you&apos;re building or expanding a team, I&apos;d love to connect
            and see how I can contribute.
          </p>
          <a className="contact-cta" href={`mailto:${email}`}>
            Get in touch <FaArrowRight aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="contact-links">
        <div className="contact-email-row">
          <span className="contact-link-left">
            <FaEnvelope aria-hidden="true" />
            <span>Email</span>
          </span>
          <div className="contact-email-actions">
            <a className="contact-email-address contact-link-value" href={`mailto:${email}`}>
              {email}
            </a>
            <button
              type="button"
              className="contact-copy-button"
              onClick={copyEmail}
              disabled={copyStatus === 'copying'}
              aria-label="Copy email address"
            >
              {copyStatus === 'copied' ? <FaCheck aria-hidden="true" /> : <FaCopy aria-hidden="true" />}
              <span>{copyStatus === 'copied' ? 'Copied' : copyStatus === 'copying' ? 'Copying…' : 'Copy email'}</span>
            </button>
          </div>
          <a className="contact-send-link" href={`mailto:${email}`} aria-label="Send email to Quynh Trang Nguyen">
            <FaPaperPlane className="contact-link-arrow" aria-hidden="true" />
          </a>
        </div>

        <a
          href="https://www.linkedin.com/in/quynh-trang-nguyen-21a559334/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View my LinkedIn profile in a new tab"
        >
          <span className="contact-link-left">
            <FaLinkedin aria-hidden="true" />
            <span>LinkedIn</span>
          </span>
          <span className="contact-link-value">Let&apos;s connect on LinkedIn</span>
          <FaArrowUpRightFromSquare className="contact-link-arrow" aria-hidden="true" />
        </a>

        <a
          href="https://github.com/quhtrang-cloud"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Explore my code on GitHub in a new tab"
        >
          <span className="contact-link-left">
            <FaGithub aria-hidden="true" />
            <span>GitHub</span>
          </span>
          <span className="contact-link-value">View my code</span>
          <FaArrowUpRightFromSquare className="contact-link-arrow" aria-hidden="true" />
        </a>
      </div>

      <p className="contact-copy-status" role="status" aria-live="polite" aria-atomic="true">
        {statusMessage}
      </p>
    </section>
  )
}

export default Contact
