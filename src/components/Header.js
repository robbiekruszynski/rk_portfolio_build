import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Image from '../images/rfk_logo_white.png'

const NAV_ITEMS = [
  { id: 'intro', label: 'Intro' },
  { id: 'build', label: 'Build' },
  { id: 'write', label: 'Write' },
  { id: 'design', label: 'Design' },
  { id: 'contact', label: 'Contact' },
]

const Header = props => {
  const [activeSection, setActiveSection] = useState('intro')

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return undefined
    }

    const sections = NAV_ITEMS.map(item => document.getElementById(item.id)).filter(Boolean)
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-35% 0px -55% 0px',
        threshold: 0,
      }
    )

    sections.forEach(section => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <header id="header" style={props.timeout ? { display: 'none' } : {}}>
      <section className="hero-section" id="top" aria-label="Portfolio introduction">
        <div className="icons hero-logo">
          <img src={Image} alt="RFK logo" />
        </div>
        <div className="content">
          <div className="inner fade-up">
            <h1>Robbie Kruszynski</h1>
            <p className="hero-title">Developer Relations Lead</p>
            <p className="hero-subheading">
              7 years building DevRel across Ethereum: clear documentation, communities worth joining, and onboarding that turns first contact into long-term trust.
            </p>
          </div>
        </div>
      </section>
      <nav className="site-nav" aria-label="Primary navigation">
        <ul>
          {NAV_ITEMS.map(item => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={activeSection === item.id ? 'is-active' : ''}
                aria-current={activeSection === item.id ? 'true' : undefined}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
