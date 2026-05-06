import Link from 'next/link'

type SectionCardProps = {
  href: string
  label: string
  labelJa: string
  title: string
  description: string
  accentColor?: string
  tags?: string[]
  meta?: string
}

export default function SectionCard({
  href,
  label,
  labelJa,
  title,
  description,
  accentColor = 'var(--color-gold)',
  tags = [],
  meta,
}: SectionCardProps) {
  return (
    <>
      

      <Link
        href={href}
        className="section-card"
        style={{ '--accent': accentColor } as React.CSSProperties}
      >
        <div className="sc-label-row">
          <span className="sc-label">{label}</span>
          {labelJa && <span className="sc-label-ja">— {labelJa}</span>}
        </div>
        <div className="sc-title">{title}</div>
        <div className="sc-description">{description}</div>
        {tags.length > 0 && (
          <div className="sc-tags">
            {tags.map((tag) => (
              <span key={tag} className="sc-tag">{tag}</span>
            ))}
          </div>
        )}
        {meta && <div className="sc-meta">{meta}</div>}
        <div className="sc-arrow">→</div>
      </Link>
    </>
  )
}
