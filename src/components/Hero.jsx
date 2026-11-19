import { profile, proof } from '../data/profile.js'
import Terminal from './Terminal.jsx'
import './Hero.css'

export default function Hero() {
  const { badge } = profile
  return (
    <div className="wrap">
      <header className="hero">
        <div>
          <div className="now-badge">
            <span>
              <span className="long">{badge.long}</span>
              <span className="short">{badge.short}</span> at {badge.org}
            </span>
          </div>
          <h1 className="name">
            {profile.first}
            <span>{profile.last}</span>
          </h1>
          <p className="lede">{profile.lede}</p>
          <p className="lede-sub">{profile.sub}</p>
          <div className="cta">
            <a className="btn primary" href="#work">
              See my work
            </a>
            <a className="btn" href="#contact">
              Contact me
            </a>
            <div className="socials">
              <a href={profile.github.url}>GitHub</a>
              <a href={profile.linkedin.url}>LinkedIn</a>
              <a href={`mailto:${profile.email}`}>Email</a>
            </div>
          </div>
          <div className="proof">
            {proof.map((item) => (
              <a key={item.label} href={item.href}>
                <b>{item.value}</b>
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </div>
        <Terminal />
      </header>
    </div>
  )
}
