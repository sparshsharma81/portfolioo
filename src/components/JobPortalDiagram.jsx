import { Fragment } from 'react'
import { jobPortalDiagram } from '../data/jobPortalDiagram.js'

export default function JobPortalDiagram() {
  return (
    <pre className="ascii" aria-label="Job portal layered architecture">
      {jobPortalDiagram.map((line, i) => (
        <Fragment key={i}>
          {line.map(([className, text], j) =>
            className ? (
              <span key={j} className={className}>
                {text}
              </span>
            ) : (
              <Fragment key={j}>{text}</Fragment>
            ),
          )}
          {i < jobPortalDiagram.length - 1 && '\n'}
        </Fragment>
      ))}
    </pre>
  )
}
