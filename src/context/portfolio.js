import { createContext, useContext } from 'react'

// Shared actions and state: theme, navigation helpers, palette and lightbox.
export const PortfolioContext = createContext(null)

export function usePortfolio() {
  const ctx = useContext(PortfolioContext)
  if (!ctx) throw new Error('usePortfolio must be used inside <PortfolioContext.Provider>')
  return ctx
}
