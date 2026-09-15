import { motion } from 'framer-motion'
import { Briefcase, ChevronRight, Github } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { experience } from '../data/timeline'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}

const item = {
  hidden: { opacity: 0, x: -16 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Experience() {
  return (
    <section id="experience" className="section">
      <SectionHeading index="04" title="Experience" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="relative space-y-10"
      >
        {experience.length > 1 && (
          <div
            aria-hidden="true"
            className="absolute inset-y-2 left-5 w-px bg-line"
          />
        )}

        {experience.map((role) => (
          <motion.div
            key={`${role.org}-${role.period}`}
            variants={item}
            whileHover={{ x: 4 }}
            className="group relative flex gap-5"
          >
            <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-ink shadow-glow-sm">
              <Briefcase size={18} />
            </div>

            <div className="-mt-1 flex-1 rounded-lg border border-line bg-surface p-5 transition-all duration-300 group-hover:border-accent/50 group-hover:bg-surface-2 group-hover:shadow-glow-sm">
              <p className="font-mono text-xs text-text-faint">
                {role.period}
              </p>
              <h3 className="mt-1 font-display text-lg font-semibold text-text">
                {role.role}
              </h3>
              <p className="text-sm text-text-muted">{role.org}</p>

              {role.tagline && (
                <p className="mt-3 max-w-prose text-text-muted">
                  {role.tagline}
                </p>
              )}

              {role.highlights?.length > 0 && (
                <ul className="mt-4 space-y-2">
                  {role.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-2 text-sm text-text-muted"
                    >
                      <ChevronRight
                        size={16}
                        className="mt-0.5 shrink-0 text-accent"
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}

              {role.stack?.length > 0 && (
                <ul className="mt-5 flex flex-wrap gap-2">
                  {role.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded border border-accent/20 bg-accent/5 px-2 py-1 font-mono text-xs text-text-muted"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              )}

              {role.repo && (
                <a
                  href={role.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-accent"
                >
                  <Github size={16} />
                  View source
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
