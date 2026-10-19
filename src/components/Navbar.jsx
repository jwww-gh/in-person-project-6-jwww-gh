import { useState } from 'react'

// State plan: Navbar owns whether the mobile menu is open.
function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  function handleNavClick(event, sectionId) {
    event.preventDefault()
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setIsMobileMenuOpen(false)
  }

  const links = [
    { label: 'Home', sectionId: 'home' },
    { label: 'About', sectionId: 'about' },
    { label: 'Skills', sectionId: 'skills' },
    { label: 'Projects', sectionId: 'projects' },
    { label: 'Contact', sectionId: 'contact' },
  ]

  return (
    <nav id="navbar" aria-label="Main navigation">
      <div className="nav-brand"><span>Jingyi Wang</span></div>
      <ul id="nav-menu" className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        {links.map(({ label, sectionId }) => (
          <li key={sectionId}>
            <a href={`#${sectionId}`} className="nav-link" onClick={(event) => handleNavClick(event, sectionId)}>
              {label}
            </a>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className={`nav-toggle ${isMobileMenuOpen ? 'active' : ''}`}
        aria-label="Toggle navigation menu"
        aria-controls="nav-menu"
        aria-expanded={isMobileMenuOpen}
        onClick={() => setIsMobileMenuOpen((open) => !open)}
      >
        <span></span><span></span><span></span>
      </button>
    </nav>
  )
}

export default Navbar
