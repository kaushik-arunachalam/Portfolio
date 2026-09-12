import SectionHeading from '../components/SectionHeading'

export default function About() {
  return (
    <section id="about" className="section">
      <SectionHeading index="01" title="About" />

      <div className="max-w-prose space-y-4 text-text-muted">
        <p>
          I'm M A Kaushik, currently pursuing my B.Tech in Computer Science
          at Amrita Vishwa Vidyapeetham, Chennai (2024–2028).
        </p>
        <p>
          I'm drawn to data — cleaning it, making sense of it, and building
          the pipelines and interfaces that turn it into something useful.
          I'm building a foundation across data structures, databases, and
          data analytics, and I'm actively exploring machine learning and
          data visualization tools to work on more data-driven projects.
        </p>
      </div>
    </section>
  )
}
