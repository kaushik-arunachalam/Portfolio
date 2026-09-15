import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="border-t border-line/60 px-6 py-8 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 text-sm text-text-faint sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>Built with React, Vite & Tailwind CSS</p>
        <a href="#top" className="hover:text-accent transition-colors">
          Back to top
        </a>
      </div>
    </footer>
  )
}
