import { useCallback, useEffect, useState } from 'react'

// Theme name → browser UI colour (meta theme-color).
export const THEMES = { amber: '#14110d', green: '#0c110d', paper: '#f4f3ef' }

const STORAGE_KEY = 'sp-theme'

function readTheme() {
  const current = document.documentElement.getAttribute('data-theme')
  return current && current in THEMES ? current : 'amber'
}

export function useTheme() {
  const [theme, setThemeState] = useState(readTheme)

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'amber') root.removeAttribute('data-theme')
    else root.setAttribute('data-theme', theme)
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEMES[theme])
    try {
      localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      // Storage can be unavailable (private mode, sandboxed frames); the theme still applies.
    }
  }, [theme])

  const setTheme = useCallback((next) => {
    if (typeof next !== 'string' || !(next in THEMES)) return false
    setThemeState(next)
    return true
  }, [])

  return [theme, setTheme]
}
