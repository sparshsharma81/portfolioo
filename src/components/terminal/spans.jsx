// Coloured text for terminal output. Class names map to theme colours in Terminal.css.

export function A({ children }) {
  return <span className="a">{children}</span>
}

export function C({ children }) {
  return <span className="c">{children}</span>
}

export function M({ children }) {
  return <span className="m">{children}</span>
}

export function R({ children }) {
  return <span className="r">{children}</span>
}

export function V({ children }) {
  return <span className="v">{children}</span>
}

export function Prompt() {
  return (
    <span className="p">
      <b>sparsh</b>@portfolio:~$
    </span>
  )
}
