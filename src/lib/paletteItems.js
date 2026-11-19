import { profile } from '../data/profile.js'
import { projects } from '../data/projects.js'
import { copyText, openExternal } from './browser.js'

/** Everything the command palette (Ctrl/⌘ K) can do, grouped for display. */
export function buildPaletteItems({ jumpTo, focusProject, setTheme }) {
  const items = [
    { group: 'Go to', label: 'Projects', hint: 'section', keywords: 'work', run: () => jumpTo('work') },
    { group: 'Go to', label: 'All projects table', hint: 'archive', keywords: 'archive list year', run: () => jumpTo('archive') },
    { group: 'Go to', label: 'About', hint: 'section', keywords: 'whoami bio', run: () => jumpTo('about') },
    { group: 'Go to', label: 'Experience', hint: 'internship, education', keywords: 'job bajaj chitkara', run: () => jumpTo('experience') },
    { group: 'Go to', label: 'Commit activity', hint: 'heatmap', keywords: 'git log github', run: () => jumpTo('activity') },
    { group: 'Go to', label: 'Stack', hint: 'skills, lines of code', keywords: 'skills tech cloc', run: () => jumpTo('stack') },
    { group: 'Go to', label: 'Contact', hint: 'section', keywords: 'email hire', run: () => jumpTo('contact') },

    ...projects.map((p) => ({
      group: 'Projects',
      label: p.name,
      hint: p.tagline,
      keywords: p.keywords,
      run: () => focusProject(`p-${p.id}`),
    })),

    ...projects
      .filter((p) => p.demo)
      .map((p) => ({
        group: 'Live demos',
        label: `Open ${p.name}`,
        hint: p.demo.replace('https://', ''),
        keywords: 'demo live',
        run: () => openExternal(p.demo),
      })),

    { group: 'Links', label: 'GitHub', hint: `github.com/${profile.github.handle}`, keywords: 'code repos', run: () => openExternal(profile.github.url) },
    { group: 'Links', label: 'LinkedIn', hint: profile.linkedin.handle, keywords: 'profile', run: () => openExternal(profile.linkedin.url) },
    { group: 'Links', label: 'Email Sparsh', hint: profile.email, keywords: 'mail contact', run: () => { window.location.href = `mailto:${profile.email}` } },
    { group: 'Links', label: 'Copy email address', hint: 'to clipboard', keywords: 'copy mail', run: () => copyText(profile.email) },

    { group: 'Theme', label: 'Amber phosphor', hint: 'default', keywords: 'theme color dark', run: () => setTheme('amber') },
    { group: 'Theme', label: 'Green phosphor', hint: 'classic terminal', keywords: 'theme color dark matrix', run: () => setTheme('green') },
    { group: 'Theme', label: 'Paper', hint: 'light theme', keywords: 'theme color light white', run: () => setTheme('paper') },
  ]
  return items.map((item, i) => ({ ...item, id: i }))
}
