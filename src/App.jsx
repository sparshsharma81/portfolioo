import { useCallback, useEffect, useMemo, useState } from 'react'
import { PortfolioContext } from './context/portfolio.js'
import { useTheme } from './hooks/useTheme.js'
import { useReducedMotion } from './hooks/useReducedMotion.js'
import { isMac } from './lib/browser.js'
import { BackToTop, ScrollProgress } from './components/ScrollChrome.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Capabilities from './components/Capabilities.jsx'
import Projects from './components/Projects.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Stack from './components/Stack.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import CommandPalette from './components/CommandPalette.jsx'
import Lightbox from './components/Lightbox.jsx'

export default function App() {
  const [theme, setTheme] = useTheme()
  const reduceMotion = useReducedMotion()
  const [paletteOpen, setPaletteOpen] = useState(false)
  const [lightboxImage, setLightboxImage] = useState(null)
  const [flashId, setFlashId] = useState(null)

  const jumpTo = useCallback(
    (id) => {
      document.getElementById(id)?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' })
    },
    [reduceMotion],
  )

  // Scroll to a project window and briefly highlight it.
  const focusProject = useCallback(
    (id) => {
      jumpTo(id)
      setFlashId(id)
    },
    [jumpTo],
  )

  useEffect(() => {
    if (!flashId) return
    const id = setTimeout(() => setFlashId(null), 1600)
    return () => clearTimeout(id)
  }, [flashId])

  // Ctrl/⌘ K toggles the command palette from anywhere on the page.
  useEffect(() => {
    const onKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setPaletteOpen((open) => !open)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const openPalette = useCallback(() => setPaletteOpen(true), [])
  const closePalette = useCallback(() => setPaletteOpen(false), [])
  const closeLightbox = useCallback(() => setLightboxImage(null), [])

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      jumpTo,
      focusProject,
      flashId,
      isMac,
      reduceMotion,
      openPalette,
      openLightbox: setLightboxImage,
    }),
    [theme, setTheme, jumpTo, focusProject, flashId, reduceMotion, openPalette],
  )

  return (
    <PortfolioContext.Provider value={value}>
      <a className="skip" href="#work">
        Skip to projects
      </a>
      <ScrollProgress />
      <Nav />
      <main id="top">
        <Hero />
        <Capabilities />
        <Projects />
        <About />
        <Experience />
        <Stack />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <CommandPalette open={paletteOpen} onClose={closePalette} />
      <Lightbox image={lightboxImage} onClose={closeLightbox} />
    </PortfolioContext.Provider>
  )
}
