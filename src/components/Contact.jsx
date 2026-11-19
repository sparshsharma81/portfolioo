import { useEffect, useState } from 'react'
import { profile } from '../data/profile.js'
import { useLocalTime } from '../hooks/useLocalTime.js'
import { copyText } from '../lib/browser.js'
import './Contact.css'

export default function Contact() {
  const time = useLocalTime(profile.timeZone)
  const [copyLabel, setCopyLabel] = useState('copy')

  useEffect(() => {
    if (copyLabel === 'copy') return
    const id = setTimeout(() => setCopyLabel('copy'), 1800)
    return () => clearTimeout(id)
  }, [copyLabel])

  const copyEmail = async () => setCopyLabel((await copyText(profile.email)) ? 'copied' : 'copy failed')

  return (
    <section className="sec" id="contact" aria-labelledby="h-contact">
      <div className="wrap contact">
        <div>
          <h2 className="big" id="h-contact">
            Let&apos;s build
            <br />
            something <em>real</em>.
          </h2>
          <p className="sub">{profile.availability}</p>
          <div className="cta">
            <a className="btn primary" href={`mailto:${profile.email}`}>
              Email me
            </a>
            <a className="btn" href={profile.linkedin.url}>
              Connect on LinkedIn
            </a>
          </div>
        </div>
        <ul className="clist">
          <li>
            <span className="k">email</span>
            <span>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <button className="copy" type="button" onClick={copyEmail}>
                {copyLabel}
              </button>
            </span>
          </li>
          <li>
            <span className="k">linkedin</span>
            <a href={profile.linkedin.url}>{profile.linkedin.handle}</a>
          </li>
          <li>
            <span className="k">github</span>
            <a href={profile.github.url}>{profile.github.handle}</a>
          </li>
          <li>
            <span className="k">location</span>
            <span>{profile.location}</span>
          </li>
          <li>
            <span className="k">local time</span>
            <span>{time}</span>
          </li>
        </ul>
      </div>
    </section>
  )
}
