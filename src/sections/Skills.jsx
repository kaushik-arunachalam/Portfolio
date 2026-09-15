import { motion } from 'framer-motion'
import { Code2, Database, BarChart3, Globe, Users } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { skillGroups } from '../data/skills'

const icons = {
  Languages: Code2,
  'Data & Databases': Database,
  'Data Analytics': BarChart3,
  'Web Development': Globe,
  'Soft Skills': Users,
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const card = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const pillContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04, delayChildren: 0.1 } },
}

const pill = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
}

export default function Skills() {
  return (
    <section id="skills" className="section">
      <SectionHeading index="02" title="Skills" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="grid gap-6 sm:grid-cols-2"
      >
        {skillGroups.map((group, index) => {
          const Icon = icons[group.category] ?? Code2
          const isOrphan =
            skillGroups.length % 2 !== 0 && index === skillGroups.length - 1

          return (
            <motion.div
              key={group.category}
              variants={card}
              whileHover={{ y: -3 }}
              className={`group rounded-lg border border-line bg-surface p-5 transition-all duration-300 hover:border-accent/40 hover:bg-surface-2 hover:shadow-glow-sm ${
                isOrphan ? 'sm:col-span-2' : ''
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line bg-ink text-accent transition-colors duration-300 group-hover:border-accent/50">
                  <Icon size={16} />
                </div>
                <h3 className="font-display text-sm font-semibold text-text">
                  {group.category}
                </h3>
              </div>

              <motion.ul
                variants={pillContainer}
                className="mt-4 flex flex-wrap gap-2"
              >
                {group.items.map((skill) => (
                  <motion.li
                    key={skill}
                    variants={pill}
                    whileHover={{ scale: 1.06, y: -2 }}
                    className="rounded border border-accent/20 bg-accent/5 px-3 py-1.5 font-mono text-xs text-text-muted transition-colors duration-200 hover:border-accent/50 hover:bg-accent/10 hover:text-accent"
                  >
                    {skill}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}
