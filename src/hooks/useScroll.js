import { useCallback, useEffect, useState } from 'react'

// Recomputes a value from the page's scroll position at most once per frame.
// Only the component that calls the hook re-renders, and only when the value changes.
function useScrollValue(compute) {
  const [value, setValue] = useState(compute)

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      setValue(compute())
    }
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      cancelAnimationFrame(frame)
    }
  }, [compute])

  return value
}

function pageProgress() {
  const el = document.documentElement
  const max = el.scrollHeight - el.clientHeight
  return max > 0 ? Math.round((el.scrollTop / max) * 1000) / 10 : 0
}

/** Percentage of the page scrolled, rounded to 0.1. */
export function useScrollProgress() {
  return useScrollValue(pageProgress)
}

/** True once the page has scrolled past `y` pixels. */
export function useScrolledPast(y) {
  const compute = useCallback(() => window.scrollY > y, [y])
  return useScrollValue(compute)
}

/** Id of the last section whose top has passed `offset` pixels from the top of the viewport. */
export function useActiveSection(ids, offset = 160) {
  const compute = useCallback(() => {
    let active = null
    for (const id of ids) {
      const el = document.getElementById(id)
      if (el && el.getBoundingClientRect().top < offset) active = id
    }
    return active
  }, [ids, offset])
  return useScrollValue(compute)
}
