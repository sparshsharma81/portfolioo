import { alsoShipped, cloc, coreStack } from '../data/stack.js'
import Section from './Section.jsx'
import TitleBar from './TitleBar.jsx'
import './Stack.css'

const fmt = new Intl.NumberFormat('en-US')

export default function Stack() {
  const max = Math.max(...cloc.rows.map((r) => r.lines))
  const totalFiles = cloc.rows.reduce((sum, r) => sum + r.files, 0)
  const totalLines = cloc.rows.reduce((sum, r) => sum + r.lines, 0)

  return (
    <Section id="stack" command="cat stack.txt" subtitle="What I've actually shipped with, and where">
      <div className="stack-grid">
        <div>
          <table className="core">
            <thead>
              <tr>
                <th scope="col">skill</th>
                <th scope="col">used in</th>
                <th scope="col">since</th>
              </tr>
            </thead>
            <tbody>
              {coreStack.map((row) => (
                <tr key={row.skill}>
                  <td>{row.skill}</td>
                  <td>{row.usedIn}</td>
                  <td>{row.since}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="also">
            {alsoShipped.map((group) => (
              <div key={group.area}>
                <span>{group.area}</span>
                {group.items}
              </div>
            ))}
          </div>
        </div>

        <div className="cloc">
          <TitleBar title="~/projects" />
          <div className="cloc-body">
            <div className="cloc-cmd">
              $ <b>cloc</b> {cloc.repos}
            </div>
            <div className="cl head">
              <span>language</span>
              <span className="n">files</span>
              <span className="n">lines</span>
              <span />
            </div>
            {cloc.rows.map((row) => (
              <div className="cl" key={row.language}>
                <span>{row.language}</span>
                <span className="n">{row.files}</span>
                <span className="n">{fmt.format(row.lines)}</span>
                <span className="bar-h" style={{ width: `${Math.max(1, (row.lines / max) * 100)}%` }} />
              </div>
            ))}
            <div className="cl sum">
              <span>SUM</span>
              <span className="n">{totalFiles}</span>
              <span className="n">{fmt.format(totalLines)}</span>
              <span />
            </div>
            <p className="cloc-note">
              Non-blank lines in my five main repos. Dependencies, build output and generated UI components are excluded.
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
