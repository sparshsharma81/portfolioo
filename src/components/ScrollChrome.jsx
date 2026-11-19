import { useScrollProgress, useScrolledPast } from '../hooks/useScroll.js'

// Thin reading-progress bar along the top of the page.
export function ScrollProgress() {
  const progress = useScrollProgress()
  return <div className="progress" style={{ width: `${progress}%` }} aria-hidden="true" />
}

// "Back to top" link that appears after the first screen or so.
export function BackToTop() {
  const show = useScrolledPast(800)
  return (
    <a href="#top" className={show ? 'totop show' : 'totop'} tabIndex={show ? undefined : -1}>
      ↑ top
    </a>
  )
}
