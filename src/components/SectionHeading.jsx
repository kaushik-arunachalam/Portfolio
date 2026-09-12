export default function SectionHeading({ index, title, description }) {
  return (
    <div className="mb-12 max-w-prose">
      {index && <p className="section-label mb-3">{index}</p>}
      <h2 className="font-display text-3xl font-semibold text-text sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-text-muted">{description}</p>
      )}
    </div>
  )
}
