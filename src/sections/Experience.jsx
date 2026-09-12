import SectionHeading from '../components/SectionHeading'
import { experience } from '../data/timeline'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <SectionHeading index="04" title="Experience" />

      <ol className="space-y-10 border-l border-line pl-8">
        {experience.map((role) => (
          <li key={`${role.org}-${role.period}`} className="relative">
            <span className="absolute -left-[calc(2rem+4px)] top-1.5 h-2 w-2 rounded-full bg-accent" />
            <p className="font-mono text-xs text-text-faint">{role.period}</p>
            <h3 className="mt-1 font-display text-lg font-semibold text-text">
              {role.role}
            </h3>
            <p className="text-sm text-text-muted">{role.org}</p>
            <p className="mt-2 max-w-prose text-text-muted">{role.summary}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
