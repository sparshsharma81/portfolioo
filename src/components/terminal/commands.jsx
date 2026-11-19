import { A, C, M, R, V } from './spans.jsx'
import { profile } from '../../data/profile.js'
import { THEMES } from '../../hooks/useTheme.js'

const OPENABLE = ['aura', 'wow', 'educonnect', 'chat', 'job-portal']

const HELP = [
  ['whoami', '', 'who I am'],
  ['projects', '', 'what I have built'],
  ['open', '<name>', 'jump to a project'],
  ['git log', '', 'how consistently I build'],
  ['skills', '', 'my stack'],
  ['cloc', '', 'lines of code'],
  ['theme', '<name>', 'amber, green or paper'],
  ['contact', '', 'how to reach me'],
  ['clear', '', 'clear the screen'],
]

const PROJECT_LIST = [
  ['aura/', 'Instagram-style social app', true],
  ['wow/', 'Jira-style workspace', true],
  ['educonnect/', 'student–mentor platform', true],
  ['chat/', 'private messenger + AI', true],
  ['job-portal/', 'Spring Boot hiring app', false],
]

const CLOC = [
  ['JavaScript', '161', '15,343'],
  ['TypeScript', '143', '8,093'],
  ['CSS + HTML', '25', '1,921'],
  ['Java', '14', '503'],
  ['Prisma', '1', '114'],
]

const clocRow = ([lang, files, lines]) => `${lang.padEnd(12)}${files.padStart(6)}${lines.padStart(9)}`

/**
 * Builds the terminal's commands. Each command takes its arguments and
 * returns the lines to print (strings or React nodes).
 */
export function createCommands({ theme, setTheme, focusProject, jumpTo, isMac }) {
  const live = (
    <A>
      ●<span className="lw"> live</span>
    </A>
  )

  const commands = {
    help: () => [
      <A>commands</A>,
      ...HELP.map(([name, arg, desc]) => (
        <>
          {'  '}
          <C>{name}</C>
          {arg && <> <M>{arg}</M></>}
          {' '.repeat(Math.max(1, 15 - name.length - (arg ? arg.length + 1 : 0)))}
          {desc}
        </>
      )),
      <>
        <M>tip: press</M> <A>{isMac ? '⌘K' : 'Ctrl K'}</A> <M>anywhere to jump around</M>
      </>,
    ],

    whoami: () => [
      <A>{`${profile.first} ${profile.last}`}</A>,
      `Full-stack engineer, SDE intern at ${profile.badge.org}`,
      <M>CSE at Chitkara University, class of 2027</M>,
    ],

    projects: () => [
      ...PROJECT_LIST.map(([dir, desc, isLive]) => (
        <>
          <C>{dir.padEnd(13)}</C>
          {isLive ? desc.padEnd(28) : desc}
          {isLive && live}
        </>
      )),
      <>
        <M>type</M> <C>open aura</C> <M>to jump to one</M>
      </>,
    ],

    git: (args) =>
      (args[0] || '').toLowerCase() === 'log'
        ? [
            <>
              <A>535 commits</A> across <A>8</A> solo repos
            </>,
            <>
              Jul 2024 → May 2026, <A>23 months</A> in a row
            </>,
            <M>busiest month: Jun 2025 (EduConnect, 86 commits)</M>,
            <>
              <M>see the heatmap:</M> <C>open activity</C>
            </>,
          ]
        : [
            <>
              <M>usage:</M> <C>git log</C>
            </>,
          ],

    experience: () => [
      <>
        <A>now </A>  SDE Intern, Bajaj Finserv Health
      </>,
      <>
        <A>2027</A>  B.E. CSE, Chitkara University
      </>,
    ],

    skills: () => [
      <>
        <V>lang </V>  JavaScript TypeScript Java Python C++
      </>,
      <>
        <V>front</V>  React Next.js Redux Zustand Tailwind
      </>,
      <>
        <V>back </V>  Node Express Hono Spring Boot Socket.IO
      </>,
      <>
        <V>data </V>  MongoDB PostgreSQL MySQL Prisma
      </>,
    ],

    cloc: () => [
      <M>{clocRow(['language', 'files', 'lines'])}</M>,
      ...CLOC.map(clocRow),
      <A>{clocRow(['SUM', '344', '25,974'])}</A>,
    ],

    theme: (args) => {
      const name = (args[0] || '').toLowerCase()
      if (setTheme(name)) {
        return [
          <>
            theme set to <A>{name}</A>
          </>,
        ]
      }
      return [
        <>
          <M>current theme:</M> <A>{theme}</A>
        </>,
        <>
          <M>try:</M>{' '}
          {Object.keys(THEMES).map((t, i) => (
            <span key={t}>
              {i > 0 && ', '}
              <C>theme {t}</C>
            </span>
          ))}
        </>,
      ]
    },

    contact: () => [
      <>
        email{'     '}
        <A>{profile.email}</A>
      </>,
      <>
        linkedin{'  '}
        <a className="a" href={profile.linkedin.url}>
          {profile.linkedin.handle}
        </a>
      </>,
      <>
        github{'    '}
        <a className="a" href={profile.github.url}>
          {profile.github.handle}
        </a>
      </>,
    ],

    motto: () => [<A>{profile.motto}</A>],

    dsa: () => [
      <>
        <R>♥</R> DSA, most days on LeetCode and HackerRank
      </>,
    ],

    resume: () => [
      <>
        <M>Resume available on request:</M> <A>{profile.email}</A>
      </>,
    ],

    sudo: (args) =>
      args.join(' ').includes('hire')
        ? [
            <M>[sudo] password for recruiter: ********</M>,
            <>
              <A>Access granted.</A> Sparsh has been added to your shortlist.
            </>,
            <>
              <M>next step:</M> <C>contact</C>
            </>,
          ]
        : [
            <>
              <R>sudo: permission denied</R> <M>(try sudo hire sparsh)</M>
            </>,
          ],

    open: (args) => {
      const name = (args[0] || '').toLowerCase().replace(/\/$/, '').replace('aura++', 'aura')
      if (name === 'activity') {
        setTimeout(() => jumpTo('activity'), 250)
        return [
          <>
            opening <C>activity</C>…
          </>,
        ]
      }
      if (OPENABLE.includes(name)) {
        setTimeout(() => focusProject(`p-${name}`), 250)
        return [
          <>
            opening <C>{name}/</C>…
          </>,
        ]
      }
      return [
        <R>open: no project named &quot;{name}&quot;</R>,
        <>
          <M>try:</M>{' '}
          {OPENABLE.map((p, i) => (
            <span key={p}>
              {i > 0 && ' '}
              <C>{p}</C>
            </span>
          ))}
        </>,
      ]
    },
  }

  commands.ls = commands.projects
  return commands
}

/** Runs one line of input against the command table. */
export function runCommand(raw, commands) {
  const input = raw.trim()
  if (!input) return { clear: false, lines: [] }
  const [name, ...args] = input.split(/\s+/)
  const key = name.toLowerCase()
  if (key === 'clear') return { clear: true, lines: [] }
  const command = Object.hasOwn(commands, key) ? commands[key] : null
  if (command) return { clear: false, lines: command(args) }
  return {
    clear: false,
    lines: [
      <R>command not found: {name}</R>,
      <>
        <M>type</M> <C>help</C> <M>for a list</M>
      </>,
    ],
  }
}
