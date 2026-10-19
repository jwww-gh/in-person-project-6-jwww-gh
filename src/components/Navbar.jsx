import { useState } from 'react'

// State plan: Navbar owns whether the mobile menu is open.
function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  function handleNavClick(event, sectionId) {
    event.preventDefault()
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setIsMobileMenuOpen(false)
  }


  return (
    <nav id="navbar" aria-label="Main navigation">
      <div className="nav-brand"><span>Jingyi Wang</span></div>
      <ul id="nav-menu" className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <li><a href="#home" className="nav-link" onClick={(event) => handleNavClick(event, 'home')}>Home</a></li>
        <li><a href="#about" className="nav-link" onClick={(event) => handleNavClick(event, 'about')}>About</a></li>
        <li><a href="#skills" className="nav-link" onClick={(event) => handleNavClick(event, 'skills')}>Skills</a></li>
        <li><a href="#projects" className="nav-link" onClick={(event) => handleNavClick(event, 'projects')}>Projects</a></li>
        <li><a href="#contact" className="nav-link" onClick={(event) => handleNavClick(event, 'contact')}>Contact</a></li>
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
