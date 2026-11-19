import { Fragment } from 'react'
import { activityDescription, activityMonths, activityRows, activitySummary } from '../data/activity.js'
import TitleBar from './TitleBar.jsx'
import './ActivityHeatmap.css'

const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function level(count) {
  if (count === 0) return 'cell'
  if (count < 5) return 'cell l1'
  if (count < 15) return 'cell l2'
  if (count < 30) return 'cell l3'
  return 'cell l4'
}

function monthLabel(key, i) {
  const [year, month] = key.split('-').map(Number)
  // Label the first column, then every January and July.
  return i === 0 || month === 1 || month === 7 ? `${MONTH_NAMES[month - 1]} '${String(year).slice(2)}` : ''
}

export default function ActivityHeatmap() {
  return (
    <div className="activity" id="activity">
      <TitleBar title="git log --all --format=%ad | heatmap" />
      <div className="act-body">
        <div className="act-sum">
          {activitySummary.map((s) => (
            <span key={s.label}>
              <b>{s.value}</b>
              {s.label}
            </span>
          ))}
        </div>
        <p className="sr-only">{activityDescription}</p>
        <p className="act-hint" aria-hidden="true">
          swipe the chart to see 2025 and 2026 →
        </p>
        <div className="act-scroll" aria-hidden="true">
          <div className="grid">
            <span className="corner" />
            {activityMonths.map((m, i) => (
              <span className="ax" key={m}>
                {monthLabel(m, i)}
              </span>
            ))}
            <span className="tot ax">total</span>

            {activityRows.map((row) => (
              <Fragment key={row.repo}>
                <span className="rl">{row.repo}</span>
                {row.counts.map((count, i) => {
                  const [year, month] = activityMonths[i].split('-').map(Number)
                  return (
                    <span
                      key={activityMonths[i]}
                      className={level(count)}
                      title={`${row.repo} · ${MONTH_NAMES[month - 1]} ${year} · ${count} commit${count === 1 ? '' : 's'}`}
                    />
                  )
                })}
                <span className="tot">{row.counts.reduce((a, b) => a + b, 0)}</span>
              </Fragment>
            ))}
          </div>
        </div>
        <div className="legend" aria-hidden="true">
          fewer <span className="cell" />
          <span className="cell l1" />
          <span className="cell l2" />
          <span className="cell l3" />
          <span className="cell l4" /> more
        </div>
        <p className="act-note">
          Monthly commits across my public repos, from git history. Each row is one project, oldest at the top.
        </p>
      </div>
    </div>
  )
}
