import { Fragment } from 'react'
import { capabilities } from '../data/capabilities.js'
import Section from './Section.jsx'
import './Capabilities.css'

export default function Capabilities() {
  return (
    <Section id="capabilities" command="man sparsh" subtitle="What I bring to a team">
      <div className="caps">
        {capabilities.map((cap) => (
          <div className="cap" key={cap.title}>
            <div className="ic" aria-hidden="true">
              {cap.icon}
            </div>
            <h3>{cap.title}</h3>
            <p>{cap.text}</p>
            <div className="ev">
              see{' '}
              {cap.evidence.map((ev, i) => (
                <Fragment key={ev.id}>
                  {i > 0 && ', '}
                  <a href={`#${ev.id}`}>{ev.label}</a>
                </Fragment>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
