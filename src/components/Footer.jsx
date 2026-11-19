import { usePortfolio } from '../context/portfolio.js'

export default function Footer() {
  const { isMac } = usePortfolio()
  return (
    <footer className="footer">
      <div className="wrap">
        <span>© 2026 Sparsh Sharma</span>
        <span>
          Press <kbd>{isMac ? '⌘K' : 'Ctrl K'}</kbd> to jump anywhere
        </span>
      </div>
    </footer>
  )
}
