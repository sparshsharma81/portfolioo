import { archive } from '../data/projects.js'
import './Archive.css'

export default function Archive() {
  return (
    <div className="archive" id="archive">
      <table>
        <caption>
          <b>ls -la ~/projects</b> · every project, newest first
        </caption>
        <thead>
          <tr>
            <th scope="col">year</th>
            <th scope="col">project</th>
            <th scope="col" className="bw">
              built with
            </th>
            <th scope="col" className="cm">
              commits
            </th>
            <th scope="col" className="lk">
              links
            </th>
          </tr>
        </thead>
        <tbody>
          {archive.map((row) => (
            <tr key={row.name}>
              <td className="yr">{row.year}</td>
              <td className="pj">{row.name}</td>
              <td className="bw">{row.stack.join(' · ')}</td>
              <td className="cm">{row.commits}</td>
              <td className="lk">
                {row.live && <a href={row.live}>live</a>}
                <a href={row.code}>code</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
