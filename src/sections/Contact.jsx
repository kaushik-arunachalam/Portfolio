import { Mail, Github, Linkedin, FileDown } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'
import { profile } from '../data/profile'

export default function Contact() {
  return (
    <section id="contact" className="section">
      <SectionHeading
        index="07"
        title="Contact"
        description="Open to internships, collaborations, and interesting problems. Reach out."
      />

      <div className="flex flex-wrap gap-4">
        <Button href={`mailto:${profile.emails.official}`} variant="primary">
          <Mail size={16} />
          Email (Official)
        </Button>
        <Button href={`mailto:${profile.emails.personal}`} variant="ghost">
          <Mail size={16} />
          Email (Personal)
        </Button>
        {profile.socials.github && (
          <Button href={profile.socials.github} target="_blank" rel="noreferrer" variant="ghost">
            <Github size={16} />
            GitHub
          </Button>
        )}
        {profile.socials.linkedin && (
          <Button href={profile.socials.linkedin} target="_blank" rel="noreferrer" variant="ghost">
            <Linkedin size={16} />
            LinkedIn
          </Button>
        )}
        {profile.socials.resume && (
          <Button href={profile.socials.resume} target="_blank" rel="noreferrer" variant="ghost">
            <FileDown size={16} />
            Resume
          </Button>
        )}
      </div>
    </section>
  )
}
