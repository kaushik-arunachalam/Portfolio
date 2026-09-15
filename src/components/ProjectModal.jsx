import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Github, ArrowUpRight } from 'lucide-react'

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return

    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/80 p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-lg border border-line bg-surface p-6 shadow-glow-purple sm:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <h3
                id="project-modal-title"
                className="font-display text-xl font-semibold text-text sm:text-2xl"
              >
                {project.title}
              </h3>
              <button
                onClick={onClose}
                aria-label="Close"
                className="shrink-0 rounded-md p-1 text-text-faint transition-colors hover:text-accent"
              >
                <X size={20} />
              </button>
            </div>

            {project.problem && (
              <div className="mt-5">
                <p className="section-label mb-2 text-xs">The problem</p>
                <p className="text-text-muted">{project.problem}</p>
              </div>
            )}

            {project.features?.length > 0 && (
              <div className="mt-5">
                <p className="section-label mb-2 text-xs">What it does</p>
                <ul className="space-y-2">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-2 text-sm text-text-muted"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.note && (
              <p className="mt-5 border-l-2 border-accent/30 pl-3 text-sm italic text-text-faint">
                {project.note}
              </p>
            )}

            {project.tags?.length > 0 && (
              <ul className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded border border-accent/20 bg-accent/5 px-2 py-1 font-mono text-xs text-text-muted"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-6 flex flex-wrap gap-4">
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-accent"
                >
                  <Github size={16} />
                  View source
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-accent"
                >
                  <ArrowUpRight size={16} />
                  Live site
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
