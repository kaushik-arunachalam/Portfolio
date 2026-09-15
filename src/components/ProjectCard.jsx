import { ArrowUpRight, Github, ScanSearch } from 'lucide-react'

export default function ProjectCard({
  title,
  description,
  tags,
  link,
  repo,
  onOpen,
}) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onOpen}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onOpen?.()
        }
      }}
      className="group cursor-pointer rounded-lg border border-line bg-surface p-6 transition-all duration-200 hover:border-accent/50 hover:shadow-glow-sm hover:bg-surface-2"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-display text-lg font-semibold text-text">
          {title}
        </h3>
        <div className="flex shrink-0 gap-3 text-text-muted">
          {repo && (
            <a
              href={repo}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              aria-label={`${title} source code`}
              className="hover:text-accent transition-colors"
            >
              <Github size={18} />
            </a>
          )}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              aria-label={`${title} live link`}
              className="hover:text-accent transition-colors"
            >
              <ArrowUpRight size={18} />
            </a>
          )}
        </div>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-text-muted">
        {description}
      </p>

      {tags?.length > 0 && (
        <ul className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li
              key={tag}
              className="rounded border border-accent/20 bg-accent/5 px-2 py-1 font-mono text-xs text-text-muted"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}

      <p className="mt-5 inline-flex items-center gap-2 text-sm text-text-faint transition-colors group-hover:text-accent">
        <ScanSearch size={14} />
        View details
      </p>
    </div>
  )
}
