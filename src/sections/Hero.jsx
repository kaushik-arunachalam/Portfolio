import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { profile } from '../data/profile'
import Button from '../components/Button'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section
      id="top"
      className="flex min-h-screen flex-col justify-center px-6 pt-24 sm:px-8 lg:px-10"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto w-full max-w-5xl"
      >
        <motion.p variants={item} className="section-label mb-5">
          {profile.location}
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display text-4xl font-semibold leading-tight text-text sm:text-6xl"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-4 max-w-prose text-lg text-text-muted sm:text-xl"
        >
          {profile.role}
        </motion.p>

        <motion.p variants={item} className="mt-6 max-w-prose text-text-muted">
          {profile.tagline}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
          <Button href="#projects" variant="primary">
            View projects
          </Button>
          <Button href="#contact" variant="ghost">
            Get in touch
          </Button>
        </motion.div>
      </motion.div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="mx-auto mt-16 text-text-faint transition-colors hover:text-accent"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  )
}
