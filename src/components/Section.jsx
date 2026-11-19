// A page section headed by a shell command, e.g. "$ ls ./projects".
export default function Section({ id, command, subtitle, children }) {
  const headingId = `h-${id}`
  return (
    <section className="sec" id={id} aria-labelledby={headingId}>
      <div className="wrap">
        <div className="sec-head">
          <h2 id={headingId}>{command}</h2>
          {subtitle && <p>{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  )
}
