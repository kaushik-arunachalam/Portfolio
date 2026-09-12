import SectionHeading from '../components/SectionHeading'
import { education } from '../data/timeline'

export default function Education() {
  return (
    <section id="education" className="section">
      <SectionHeading index="05" title="Education" />

      <div className="space-y-8">
        {education.map((entry) => (
          <div key={entry.school}>
            <p className="font-mono text-xs text-text-faint">
              {entry.period}
            </p>
            <h3 className="mt-1 font-display text-lg font-semibold text-text">
              {entry.degree}
            </h3>
            <p className="text-sm text-text-muted">{entry.school}</p>
            {entry.detail && (
              <p className="mt-2 text-text-muted">{entry.detail}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
