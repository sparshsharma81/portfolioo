// The window chrome used by the terminal, project windows, code and data panels.
export default function TitleBar({ title, colored = false, dots = true, children }) {
  return (
    <div className="bar">
      {dots && (
        <span className={colored ? 'dots dots-color' : 'dots'} aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
      )}
      {title && <span className="title">{title}</span>}
      {children}
    </div>
  )
}
