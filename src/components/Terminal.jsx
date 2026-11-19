import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { usePortfolio } from '../context/portfolio.js'
import { createCommands, runCommand } from './terminal/commands.jsx'
import { M, Prompt } from './terminal/spans.jsx'
import TitleBar from './TitleBar.jsx'
import './Terminal.css'

const CHIPS = ['help', 'git log', 'theme green', 'contact', 'sudo hire sparsh']

export default function Terminal() {
  const actions = usePortfolio()
  const { reduceMotion } = actions

  const commands = useMemo(() => createCommands(actions), [actions])
  const commandsRef = useRef(commands)
  useEffect(() => {
    commandsRef.current = commands
  }, [commands])

  const [lines, setLines] = useState([])
  const [typing, setTyping] = useState(null)
  const [ready, setReady] = useState(false)
  const [value, setValue] = useState('')

  const bodyRef = useRef(null)
  const inputRef = useRef(null)
  const nextId = useRef(0)
  const queue = useRef(Promise.resolve())
  const mounted = useRef(false)
  const history = useRef({ items: [], index: 0 })

  const append = useCallback((items) => {
    setLines((prev) => [...prev, ...items.map((item) => ({ ...item, id: nextId.current++ }))])
  }, [])

  const execute = useCallback(
    (raw) => {
      const result = runCommand(raw, commandsRef.current)
      if (result.clear) setLines([])
      else if (result.lines.length) append(result.lines.map((content) => ({ content })))
    },
    [append],
  )

  const sleep = useCallback(
    (ms) => new Promise((resolve) => setTimeout(resolve, reduceMotion ? 0 : ms)),
    [reduceMotion],
  )

  // Types a command character by character, then runs it.
  const typeOut = useCallback(
    async (text, speed, isAlive) => {
      for (let i = 1; i <= text.length; i++) {
        if (!isAlive()) return
        setTyping(text.slice(0, i))
        await sleep(speed + Math.random() * speed * 0.8)
      }
      await sleep(160)
      if (!isAlive()) return
      setTyping(null)
      append([{ prompt: true, text }])
      execute(text)
    },
    [append, execute, sleep],
  )

  // Intro: types `whoami` and `projects`, then hands over to the visitor.
  useEffect(() => {
    mounted.current = true
    let cancelled = false
    const alive = () => !cancelled

    setLines([])
    setTyping(null)
    setReady(false)
    append([{ content: <M>Last login: {new Date().toDateString()} on ttys001</M> }])

    queue.current = (async () => {
      await sleep(450)
      if (!alive()) return
      await typeOut('whoami', 60, alive)
      await sleep(550)
      if (!alive()) return
      await typeOut('projects', 60, alive)
      if (!alive()) return
      append([{ content: '' }, { content: <M>your turn: type a command or tap one below</M> }])
      setReady(true)
    })()

    return () => {
      cancelled = true
      mounted.current = false
    }
  }, [append, sleep, typeOut])

  // Keep the newest output in view.
  useEffect(() => {
    const body = bodyRef.current
    if (body) body.scrollTop = body.scrollHeight
  }, [lines, typing, ready])

  const enqueue = useCallback(
    (text) => {
      queue.current = queue.current.then(async () => {
        setReady(false)
        await typeOut(text, 30, () => mounted.current)
        setReady(true)
      })
    },
    [typeOut],
  )

  const onKeyDown = (e) => {
    const h = history.current
    if (e.key === 'Enter') {
      const input = value
      setValue('')
      if (input.trim()) {
        h.items.push(input)
        h.index = h.items.length
      }
      append([{ prompt: true, text: input }])
      execute(input)
    } else if (e.key === 'ArrowUp' && h.index > 0) {
      e.preventDefault()
      h.index -= 1
      setValue(h.items[h.index])
    } else if (e.key === 'ArrowDown') {
      h.index = Math.min(h.items.length, h.index + 1)
      setValue(h.items[h.index] ?? '')
    }
  }

  const focusInput = (e) => {
    if (ready && !e.target.closest('a')) inputRef.current?.focus({ preventScroll: true })
  }

  return (
    <div>
      <div className="term" role="region" aria-label="Interactive terminal">
        <TitleBar title="sparsh@portfolio: ~" colored />
        <div className="term-body" ref={bodyRef} onClick={focusInput}>
          <div aria-live="polite">
            {lines.map((line) => (
              <div className="ln" key={line.id}>
                {line.prompt ? (
                  <>
                    <Prompt /> <span className="o">{line.text}</span>
                  </>
                ) : (
                  line.content
                )}
              </div>
            ))}
          </div>
          {typing !== null && (
            <div className="ln">
              <Prompt /> <span className="o">{typing}</span>
              <span className="cursor" />
            </div>
          )}
          {ready && (
            <div className="input-row">
              <Prompt />
              <input
                ref={inputRef}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={onKeyDown}
                autoComplete="off"
                autoCapitalize="off"
                spellCheck={false}
                aria-label="Type a terminal command"
              />
            </div>
          )}
        </div>
      </div>
      <div className="chips">
        <span>run:</span>
        {CHIPS.map((chip) => (
          <button key={chip} type="button" onClick={() => enqueue(chip)}>
            {chip}
          </button>
        ))}
      </div>
    </div>
  )
}
