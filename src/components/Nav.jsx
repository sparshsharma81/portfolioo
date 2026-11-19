import { useState } from 'react'
import { navLinks } from '../data/profile.js'
import { usePortfolio } from '../context/portfolio.js'
import { useActiveSection } from '../hooks/useScroll.js'
import './Nav.css'

const SECTION_IDS = navLinks.map((link) => link.id)

export default function Nav() {
  const { openPalette, isMac } = usePortfolio()
  const active = useActiveSection(SECTION_IDS)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="nav" aria-label="Main">
      <div className="wrap">
        <a href="#top" className="logo">
          sparsh<span>@dev:~$</span>
        </a>
        <ul className={menuOpen ? 'nav-links open' : 'nav-links'} id="nav-links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={active === link.id ? 'active' : undefined}
                aria-current={active === link.id ? 'location' : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button className="pal-btn" type="button" onClick={openPalette} aria-haspopup="dialog" aria-label="Open command palette">
          <span className="lbl">search</span>
          <kbd>{isMac ? '⌘K' : 'Ctrl K'}</kbd>
        </button>
        <button
          className="menu-btn"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="nav-links"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? 'close' : 'menu'}
        </button>
      </div>
    </nav>
  )
}
