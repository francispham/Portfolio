import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'gatsby'
import Seo from './seo'
import { LINKS } from '../data/constant'
import '../css/portfolio.css'

const Layout = ({ children, title, description, path = '/' }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleRef = useRef(null)
  const rootRef = useRef(null)
  useEffect(() => {
    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !window.IntersectionObserver
    )
      return
    const elements = rootRef.current.querySelectorAll(
      '.project-card, .approach-grid article, .work-row, .experience-item, .expertise-card'
    )
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('reveal-pending')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08 }
    )
    elements.forEach((element) => {
      if (element.getBoundingClientRect().top > window.innerHeight) {
        element.classList.add('reveal-pending')
        observer.observe(element)
      }
    })
    return () => {
      observer.disconnect()
      elements.forEach((element) => element.classList.remove('reveal-pending'))
    }
  }, [])
  const closeMenu = () => {
    setMenuOpen(false)
    toggleRef.current?.focus()
  }
  return (
    <div className="portfolio" ref={rootRef}>
      <Seo title={title} description={description} path={path} />
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="site-header">
        <div className="site-header-inner">
          <Link className="wordmark" to="/" aria-label="Francis Pham home">
            francis pham<span aria-hidden="true">.</span>
          </Link>
          <button
            className="menu-toggle"
            type="button"
            ref={toggleRef}
            aria-controls="site-navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            onKeyDown={(event) => {
              if (event.key === 'Escape' && menuOpen) closeMenu()
            }}
          >
            {menuOpen ? 'Close' : 'Menu'}
            <span aria-hidden="true">{menuOpen ? '−' : '+'}</span>
          </button>
          <nav
            id="site-navigation"
            className={`site-nav${menuOpen ? ' is-open' : ''}`}
            aria-label="Main navigation"
          >
            {LINKS.map(({ link, title: label }) => (
              <Link
                key={link}
                to={link}
                activeClassName="is-active"
                className={link === '/resume' ? 'nav-resume' : undefined}
                onClick={() => setMenuOpen(false)}
                onKeyDown={(event) => {
                  if (event.key === 'Escape' && menuOpen) closeMenu()
                }}
              >
                {label}
                {link === '/resume' && <span aria-hidden="true"> ↗</span>}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main id="main-content" className="page-content" tabIndex="-1">
        {children}
      </main>
      <footer className="site-footer">
        <div className="footer-top">
          <div>
            <p className="eyebrow">Have something in mind?</p>
            <h2>
              Let’s build something
              <br />
              that matters.
            </h2>
          </div>
          <a className="contact-link" href="mailto:hello@francispham.ca">
            hello@francispham.ca <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="footer-bottom">
          <p>Francis Pham · Vancouver, BC</p>
          <div className="social-links">
            <a
              href="https://github.com/francispham23"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>
            <a
              href="https://www.linkedin.com/in/francisphamca/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
            <Link to="/resume">
              Résumé <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
export default Layout
