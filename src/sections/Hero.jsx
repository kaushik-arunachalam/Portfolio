import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/profile'
import Button from '../components/Button'

const socialLinks = [
  { label: 'GitHub', href: profile.socials.github, icon: Github },
  { label: 'LinkedIn', href: profile.socials.linkedin, icon: Linkedin },
  { label: 'Email', href: `mailto:${profile.email}`, icon: Mail },
]

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
      className="relative flex min-h-screen flex-col justify-center px-6 pt-24 sm:px-8 lg:px-10 overflow-hidden"
    >
      {/* Amber atmospheric glow rings */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute left-1/2 top-1/4 -translate-x-1/2 h-[300px] w-[300px] rounded-full bg-accent-dim/15 blur-[80px]" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto w-full max-w-5xl"
      >
        <motion.div
          variants={item}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-3 py-1"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <span className="font-mono text-xs text-text-muted">
            Open to internships &amp; new opportunities
          </span>
        </motion.div>

        <motion.p variants={item} className="section-label mb-5">
          {profile.location}
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display text-4xl font-semibold leading-tight sm:text-6xl"
        >
          {/* Gradient name */}
          <span className="bg-gradient-to-r from-accent-glow via-accent to-accent-dim bg-clip-text text-transparent">
            {profile.name}
          </span>
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

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
          <Button href="#projects" variant="primary">
            View projects
          </Button>
          <Button href="#contact" variant="ghost">
            Get in touch
          </Button>

          <div className="ml-1 flex items-center gap-1">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                {...(href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
                aria-label={label}
                className="rounded-md p-2 text-text-faint transition-colors hover:text-accent"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
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
