import { profile } from '../data/profile.js'
import Section from './Section.jsx'
import TitleBar from './TitleBar.jsx'
import './About.css'

export default function About() {
  return (
    <Section id="about" command="whoami" subtitle="About me">
      <div className="about">
        <div className="about-text">
          <p>
            I&apos;m a Computer Science and Engineering student at <strong>Chitkara University</strong>, graduating in
            2027, and a software development intern at <strong>Bajaj Finserv Health</strong>, where I work on a
            healthcare portal built with React and TypeScript.
          </p>
          <p>
            Most of what I build is real-time: chat over WebSockets, a social feed with live notifications, a mentoring
            platform with one-click video calls. I like the moment when the database, the API and the UI all have to
            agree within milliseconds.
          </p>
          <p>
            I also like to draw a system before it gets big. My larger repos ship with architecture, sequence and
            data-model diagrams, so anyone joining can follow how they work.
          </p>
          <p className="dsa">
            <b>I love DSA.</b> I solve problems on LeetCode and HackerRank most days, and I keep an open Java guide on
            GitHub for anyone preparing for interviews.
          </p>
          <p className="motto">{profile.motto}</p>
        </div>

        <div className="code">
          <TitleBar title="SPARSH.java" />
          <pre>
            <span className="k">public class</span> <span className="t">SPARSH</span> {'{\n'}
            {'  '}<span className="k">String</span> name       = <span className="s">&quot;Sparsh Sharma&quot;</span>;{'\n'}
            {'  '}<span className="k">String</span> university = <span className="s">&quot;Chitkara University&quot;</span>;{'\n'}
            {'  '}<span className="k">String</span> major      = <span className="s">&quot;Computer Science&quot;</span>;{'\n'}
            {'  '}<span className="k">int</span>    gradYear   = <span className="t">2027</span>;{'\n'}
            {'  '}<span className="k">String</span> role       = <span className="s">&quot;SDE Intern @ Bajaj Finserv Health&quot;</span>;{'\n'}
            {'\n'}
            {'  '}<span className="k">List</span>&lt;<span className="k">String</span>&gt; recentProjects() {'{\n'}
            {'    '}<span className="k">return</span> List.of(<span className="s">&quot;Aura++&quot;</span>, <span className="s">&quot;WOW&quot;</span>, <span className="s">&quot;EduConnect&quot;</span>);{'\n'}
            {'  }\n'}
            {'\n'}
            {'  '}<span className="cm">{'// superpower'}</span>{'\n'}
            {'  '}<span className="k">String</span> superpower() {'{\n'}
            {'    '}<span className="k">return</span> <span className="s">&quot;Real-world problems -&gt; working projects&quot;</span>;{'\n'}
            {'  }\n'}
            {'}'}
          </pre>
        </div>
      </div>
    </Section>
  )
}
