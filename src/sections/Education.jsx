import { motion } from 'framer-motion'
import { GraduationCap, School } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { education } from '../data/timeline'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}

const item = {
  hidden: { opacity: 0, x: -16 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Education() {
  return (
    <section id="education" className="section">
      <SectionHeading index="05" title="Education" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="relative space-y-10"
      >
        <div
          aria-hidden="true"
          className="absolute inset-y-2 left-5 w-px bg-line"
        />

        {education.map((entry) => {
          const inProgress = entry.detail?.includes('in progress')
          const detail = entry.detail?.replace(/\s*\(in progress\)/, '')
          const Icon = entry.degree.startsWith('B.Tech') ? GraduationCap : School

          return (
            <motion.div
              key={`${entry.school}-${entry.period}`}
              variants={item}
              whileHover={{ x: 4 }}
              className="group relative flex gap-5"
            >
              <div
                className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                  inProgress
                    ? 'bg-accent text-ink shadow-glow-sm'
                    : 'border border-line bg-surface text-text-faint group-hover:border-accent/60 group-hover:text-accent'
                }`}
              >
                <Icon size={18} />
              </div>

              <div className="-mt-1 flex-1 rounded-lg border border-transparent p-4 transition-all duration-300 group-hover:border-line group-hover:bg-surface">
                <div className="flex flex-wrap items-center gap-3">
                  <p className="font-mono text-xs text-text-faint">
                    {entry.period}
                  </p>
                  {inProgress && (
                    <span className="rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 font-mono text-[11px] text-accent">
                      In progress
                    </span>
                  )}
                </div>
                <h3 className="mt-1 font-display text-lg font-semibold text-text">
                  {entry.degree}
                </h3>
                <p className="text-sm text-text-muted">{entry.school}</p>
                {detail && <p className="mt-2 text-text-muted">{detail}</p>}
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}
