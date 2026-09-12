import SectionHeading from '../components/SectionHeading'
import { skillGroups } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <SectionHeading index="02" title="Skills" />

      <div className="grid gap-8 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.category}>
            <h3 className="font-display text-sm font-semibold text-text">
              {group.category}
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <li
                  key={skill}
                  className="rounded border border-line px-3 py-1.5 font-mono text-xs text-text-muted"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
