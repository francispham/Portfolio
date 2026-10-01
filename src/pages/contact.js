import React, { useState } from 'react'
import { navigate } from 'gatsby'
import Layout from '../components/layout'

const Contact = () => {
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const handleSubmit = async (event) => {
    event.preventDefault()
    if (submitting) return
    const form = event.currentTarget
    setSubmitting(true)
    setError('')
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(form)).toString(),
      })
      if (!response.ok) throw new Error('Submission failed')
      await navigate('/thankyou/')
    } catch {
      setError(
        'Your message couldn’t be sent. Please try again, or email hello@francispham.ca directly.'
      )
      setSubmitting(false)
    }
  }
  return (
    <Layout
      title="Contact"
      path="/contact"
      description="Get in touch with Francis Pham about engineering roles, web and mobile projects, or collaboration."
    >
      <section className="page-intro">
        <p className="eyebrow">Get in touch</p>
        <h1>
          A conversation is
          <br />
          <em>a good place to start.</em>
        </h1>
        <p>
          Have an engineering opportunity or a project in mind? I’d like to hear
          about it.
        </p>
      </section>
      <div className="contact-grid">
        <section className="contact-details" aria-labelledby="contact-title">
          <h2 id="contact-title">Say hello.</h2>
          <a className="contact-link" href="mailto:hello@francispham.ca">
            hello@francispham.ca <span aria-hidden="true">↗</span>
          </a>
          <p>Based in Vancouver, British Columbia.</p>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/francisphamca/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/francispham23"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        </section>
        <form
          className="contact-form"
          name="contacted"
          method="POST"
          action="/thankyou/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          aria-label="Contact Francis"
          aria-busy={submitting}
        >
          <input type="hidden" name="form-name" value="contacted" />
          <p hidden>
            <label>
              Leave this field empty{' '}
              <input name="bot-field" tabIndex="-1" autoComplete="off" />
            </label>
          </p>
          <div className="form-row">
            <div className="field">
              <label htmlFor="contact-name">Your name</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Alex Chen"
                required
                maxLength={200}
              />
            </div>
            <div className="field">
              <label htmlFor="contact-email">Email address</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                spellCheck={false}
                placeholder="alex@example.com"
                required
                maxLength={254}
              />
            </div>
          </div>
          <div className="field">
            <label htmlFor="contact-message">What do you have in mind?</label>
            <textarea
              id="contact-message"
              name="message"
              placeholder="Tell me a little about the opportunity…"
              required
              maxLength={5000}
            />
          </div>
          <p className="form-status" role="status" aria-live="polite">
            {error}
          </p>
          <button
            className="button-primary"
            type="submit"
            disabled={submitting}
          >
            {submitting ? 'Sending…' : 'Send message'}
            <span aria-hidden="true">↗</span>
          </button>
        </form>
      </div>
    </Layout>
  )
}
export default Contact
