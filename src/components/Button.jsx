export default function Button({
  as: Tag = 'a',
  variant = 'primary',
  className = '',
  children,
  ...props
}) {
  const base =
    'inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium transition-all duration-200'

  const variants = {
    primary:
      'bg-accent text-ink hover:bg-accent-dim hover:shadow-glow-sm',
    ghost:
      'border border-line text-text hover:border-accent/70 hover:text-accent hover:bg-accent/5',
  }

  return (
    <Tag className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Tag>
  )
}
