import { timeline } from '../data/experience.js'
import Section from './Section.jsx'
import ActivityHeatmap from './ActivityHeatmap.jsx'
import './Experience.css'

export default function Experience() {
  return (
    <Section id="experience" command="git log --oneline" subtitle="Experience, education and how I've been building">
      <div className="timeline">
        {timeline.map((entry) => (
          <div className={entry.current ? 'tl current' : 'tl'} key={entry.title}>
            <div className="when">{entry.when}</div>
            <div>
              <h3>{entry.title}</h3>
              <div className="where">{entry.where}</div>
              <p>{entry.text}</p>
            </div>
          </div>
        ))}
      </div>
      <ActivityHeatmap />
    </Section>
  )
}
