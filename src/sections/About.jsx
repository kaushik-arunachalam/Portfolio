import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Music, Gamepad2, Sparkles, Quote, Wand2, Rocket } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const tabs = [
  { id: 'story', label: 'The Story' },
  { id: 'approach', label: 'How I Work' },
]

const interests = [
  { icon: Music, label: 'Music' },
  { icon: Gamepad2, label: 'Gaming' },
  { icon: Sparkles, label: 'Always learning something new' },
]

export default function About() {
  const [active, setActive] = useState('story')

  return (
    <section id="about" className="section">
      <SectionHeading index="01" title="About" />

      <div className="flex gap-6 border-b border-line">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`relative pb-3 font-mono text-sm transition-colors ${
              active === tab.id
                ? 'text-accent'
                : 'text-text-faint hover:text-text-muted'
            }`}
          >
            {tab.label}
            {active === tab.id && (
              <motion.span
                layoutId="about-tab-underline"
                className="absolute inset-x-0 -bottom-px h-px bg-accent"
              />
            )}
          </button>
        ))}
      </div>

      <div className="mt-8 max-w-prose">
        <AnimatePresence mode="wait">
          {active === 'story' && (
            <motion.div
              key="story"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="space-y-6 text-text-muted"
            >
              <div className="flex gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line bg-ink text-accent">
                  <Wand2 size={16} />
                </div>
                <p className="pt-1.5">
                  Data science, AI, and machine learning have held my
                  attention since childhood — they felt less like a field of
                  study and more like something out of science fiction. That
                  sense of wonder is what pulled me toward Computer Science,
                  and it's still what keeps me here.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line bg-ink text-accent">
                  <Rocket size={16} />
                </div>
                <p className="pt-1.5">
                  What excites me now is closing that gap: taking AI out of
                  the lab and making it something people can actually reach,
                  use, and trust in everyday life.
                </p>
              </div>
            </motion.div>
          )}

          {active === 'approach' && (
            <motion.div
              key="approach"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <div className="relative rounded-lg border border-line bg-surface p-5">
                <Quote
                  size={16}
                  className="absolute -left-3 -top-3 rounded-full border border-line bg-ink p-1.5 text-accent"
                />
                <p className="text-text-muted">
                  Break the problem down, prioritize what actually matters,
                  then execute — working smarter first, and harder when it
                  counts.
                </p>
              </div>

              <div>
                <p className="mb-3 font-mono text-xs text-text-faint">
                  Beyond the screen
                </p>
                <ul className="flex flex-wrap gap-3">
                  {interests.map(({ icon: Icon, label }) => (
                    <motion.li
                      key={label}
                      whileHover={{ scale: 1.06, y: -2 }}
                      className="flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-3 py-1.5 text-sm text-text-muted transition-colors duration-200 hover:border-accent/50 hover:bg-accent/10 hover:text-accent"
                    >
                      <Icon size={14} className="text-accent" />
                      {label}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
