import { ArrowUpRight } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { certificationGroups } from '../data/timeline'

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <SectionHeading
        index="06"
        title="Certifications"
        description="Grouped by skill area."
      />

      <div className="space-y-10">
        {certificationGroups.map((group) => (
          <div key={group.category}>
            <h3 className="font-display text-sm font-semibold text-accent">
              {group.category}
            </h3>
            <ul className="mt-3 divide-y divide-line border-y border-line">
              {group.items.map((cert) => (
                <li
                  key={cert.name}
                  className="flex items-center justify-between gap-4 py-4"
                >
                  <div>
                    <p className="font-medium text-text">{cert.name}</p>
                    <p className="text-sm text-text-muted">
                      {cert.issuer} · {cert.year}
                    </p>
                  </div>
                  {cert.link ? (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-text-muted hover:text-accent"
                      aria-label={`View ${cert.name} credential`}
                    >
                      <ArrowUpRight size={18} />
                    </a>
                  ) : (
                    <span className="font-mono text-xs text-text-faint">
                      proof pending
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
