import { Fragment, useEffect, useMemo, useRef, useState } from 'react'
import { usePortfolio } from '../context/portfolio.js'
import { buildPaletteItems } from '../lib/paletteItems.js'
import './CommandPalette.css'

// Ctrl/⌘ K menu: type to filter, arrows to move, Enter to run, Esc to close.
export default function CommandPalette({ open, onClose }) {
  const actions = usePortfolio()
  const dialogRef = useRef(null)
  const inputRef = useRef(null)
  const listRef = useRef(null)
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(0)

  const items = useMemo(() => buildPaletteItems(actions), [actions])
  // Name matches rank above matches in hints and keywords, so "edu" finds EduConnect first.
  const shown = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return items
    const score = (it) => {
      const label = it.label.toLowerCase()
      if (label.startsWith(q)) return 0
      if (label.includes(q)) return 1
      return `${it.hint} ${it.keywords} ${it.group}`.toLowerCase().includes(q) ? 2 : -1
    }
    return items
      .map((it) => [score(it), it])
      .filter(([s]) => s >= 0)
      .sort((a, b) => a[0] - b[0] || a[1].id - b[1].id)
      .map(([, it]) => it)
  }, [items, query])
  const current = Math.min(active, Math.max(shown.length - 1, 0))

  useEffect(() => {
    const dialog = dialogRef.current
    if (open && !dialog.open) {
      setQuery('')
      setActive(0)
      dialog.showModal()
      inputRef.current?.focus()
    }
    if (!open && dialog.open) dialog.close()
  }, [open])

  useEffect(() => {
    const dialog = dialogRef.current
    dialog.addEventListener('close', onClose)
    return () => dialog.removeEventListener('close', onClose)
  }, [onClose])

  useEffect(() => {
    listRef.current?.querySelector('[aria-selected="true"]')?.scrollIntoView({ block: 'nearest' })
  }, [current, shown])

  const run = (index) => {
    const item = shown[index]
    if (!item) return
    dialogRef.current.close()
    item.run()
  }

  const move = (step) => {
    if (!shown.length) return
    setActive((current + step + shown.length) % shown.length)
  }

  const onKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      move(1)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      move(-1)
    } else if (e.key === 'Enter') {
      e.preventDefault()
      run(current)
    }
  }

  const closeOnBackdrop = (e) => {
    if (e.target === dialogRef.current) dialogRef.current.close()
  }

  let lastGroup = null

  return (
    <dialog className="pal" ref={dialogRef} aria-label="Command palette" onClick={closeOnBackdrop}>
      <div className="pal-in">
        <span aria-hidden="true">&gt;</span>
        <input
          ref={inputRef}
          type="text"
          role="combobox"
          aria-expanded="true"
          aria-controls="pal-list"
          aria-autocomplete="list"
          aria-activedescendant={shown.length ? `pal-o${current}` : undefined}
          autoComplete="off"
          spellCheck={false}
          placeholder="Jump to a project, section, link or theme"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setActive(0)
          }}
          onKeyDown={onKeyDown}
        />
      </div>
      <ul className="pal-list" id="pal-list" role="listbox" aria-label="Commands" ref={listRef}>
        {shown.length === 0 && (
          <li className="pal-empty" role="presentation">
            No match. Try &quot;aura&quot;, &quot;theme&quot; or &quot;email&quot;.
          </li>
        )}
        {shown.map((item, i) => {
          const header = item.group !== lastGroup ? item.group : null
          lastGroup = item.group
          return (
            <Fragment key={item.id}>
              {header && (
                <li className="pal-g" role="presentation">
                  {header}
                </li>
              )}
              <li
                className="pal-i"
                role="option"
                id={`pal-o${i}`}
                aria-selected={i === current}
                onMouseMove={() => {
                  if (i !== current) setActive(i)
                }}
                onClick={() => run(i)}
              >
                <span>{item.label}</span>
                <small>{item.hint}</small>
              </li>
            </Fragment>
          )
        })}
      </ul>
      <div className="pal-foot">
        <span>
          <kbd>↑</kbd> <kbd>↓</kbd> move
        </span>
        <span>
          <kbd>Enter</kbd> open
        </span>
        <span>
          <kbd>Esc</kbd> close
        </span>
      </div>
    </dialog>
  )
}
