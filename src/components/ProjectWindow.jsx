import { Fragment, useState } from 'react'
import { usePortfolio } from '../context/portfolio.js'
import { asset } from '../lib/browser.js'
import TitleBar from './TitleBar.jsx'
import JobPortalDiagram from './JobPortalDiagram.jsx'
import './ProjectWindow.css'

export default function ProjectWindow({ project }) {
  const { flashId, openLightbox } = usePortfolio()
  const [viewIndex, setViewIndex] = useState(0)
  const domId = `p-${project.id}`
  const titleId = `t-${project.id}`
  const views = project.views
  const view = views[viewIndex]

  // Arrow keys move between tabs, as in a native tab list.
  const onTabKeyDown = (e, i) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return
    e.preventDefault()
    const next = (i + (e.key === 'ArrowRight' ? 1 : views.length - 1)) % views.length
    setViewIndex(next)
    e.currentTarget.parentElement.children[next]?.focus()
  }

  const enlarge = () =>
    openLightbox({
      src: asset(view.src),
      alt: view.alt,
      caption: `~/projects/${project.id}/${view.file}`,
    })

  return (
    <article className={flashId === domId ? 'win flash' : 'win'} id={domId} aria-labelledby={titleId}>
      <TitleBar>
        <span className="path">
          ~/projects/<b>{project.id}</b>
        </span>
        <div className="tabs" role="tablist" aria-label={`${project.name} views`}>
          {project.diagram ? (
            <button className="tab" type="button" role="tab" aria-selected="true">
              architecture.txt
            </button>
          ) : (
            views.map((v, i) => (
              <button
                key={v.file}
                className="tab"
                type="button"
                role="tab"
                aria-selected={i === viewIndex}
                tabIndex={i === viewIndex ? 0 : -1}
                onClick={() => setViewIndex(i)}
                onKeyDown={(e) => onTabKeyDown(e, i)}
              >
                {v.file}
              </button>
            ))
          )}
        </div>
      </TitleBar>

      <div className="win-body">
        <div className="info">
          <span className={project.live ? 'status live' : 'status'}>{project.live ? 'live' : 'source'}</span>
          <h3 id={titleId}>{project.name}</h3>
          <p className="one">{project.tagline}</p>
          <p className="built">{project.built}</p>
          <p className="desc">{project.description}</p>
          <ul className="tags">
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          <div className="flow">
            {project.flow.map((part, i) => (i % 2 ? <i key={i}>{part}</i> : <span key={i}>{part}</span>))}
          </div>
          {project.readme && (
            <details className="feat">
              <summary>README.md</summary>
              {project.readme.map((block) => (
                <Fragment key={block.title}>
                  <h4>{block.title}</h4>
                  {block.text ? (
                    <p>{block.text}</p>
                  ) : (
                    <ul className={block.tone}>
                      {block.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </Fragment>
              ))}
            </details>
          )}
          <div className="links">
            {project.links.map((link) => (
              <Fragment key={link.label}>
                <a href={link.href}>{link.label}</a>
                {link.note && <span className="note">{link.note}</span>}
              </Fragment>
            ))}
          </div>
        </div>

        <figure className="stage">
          {project.diagram ? (
            <JobPortalDiagram />
          ) : (
            <button
              className={view.fit === 'contain' ? 'shot contain' : 'shot'}
              type="button"
              aria-label="Enlarge image"
              onClick={enlarge}
            >
              <img
                key={view.src}
                className="fade"
                src={asset(view.src)}
                width={view.width}
                height={view.height}
                alt={view.alt}
                loading={project.eager ? undefined : 'lazy'}
              />
              <span className="zoom" aria-hidden="true">
                ⤢ enlarge
              </span>
            </button>
          )}
        </figure>
      </div>
    </article>
  )
}
