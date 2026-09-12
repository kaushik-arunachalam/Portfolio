export default function Button({
  as: Tag = 'a',
  variant = 'primary',
  className = '',
  children,
  ...props
}) {
  const base =
    'inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium transition-colors duration-150'

  const variants = {
    primary: 'bg-accent text-ink hover:bg-accent-dim',
    ghost:
      'border border-line text-text hover:border-accent/60 hover:text-accent',
  }

  return (
    <Tag className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Tag>
  )
}
