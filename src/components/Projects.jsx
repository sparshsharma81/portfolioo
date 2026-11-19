import { projects } from '../data/projects.js'
import Section from './Section.jsx'
import ProjectWindow from './ProjectWindow.jsx'
import Archive from './Archive.jsx'

export default function Projects() {
  return (
    <Section
      id="work"
      command="ls ./projects"
      subtitle="Selected work. Open a tab for screens and system design, or the README for the full story."
    >
      <div className="works">
        {projects.map((project) => (
          <ProjectWindow key={project.id} project={project} />
        ))}
        <Archive />
      </div>
    </Section>
  )
}
