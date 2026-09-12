import { ArrowUpRight, Github } from 'lucide-react'

export default function ProjectCard({ title, description, tags, link, repo }) {
  return (
    <div className="group rounded-lg border border-line bg-surface p-6 transition-colors duration-150 hover:border-accent/40">
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
              aria-label={`${title} source code`}
              className="hover:text-accent"
            >
              <Github size={18} />
            </a>
          )}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              aria-label={`${title} live link`}
              className="hover:text-accent"
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
              className="rounded border border-line px-2 py-1 font-mono text-xs text-text-muted"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
