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
      <style>{`
        .section-card {
          display: block;
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: 28px;
          text-decoration: none;
          color: inherit;
          transition: box-shadow var(--transition), transform var(--transition), border-color var(--transition);
          position: relative;
          overflow: hidden;
        }
        .section-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--accent);
          opacity: 0;
          transition: opacity var(--transition);
        }
        .section-card:hover {
          box-shadow: 0 4px 24px rgba(0,0,0,0.08);
          transform: translateY(-2px);
          border-color: var(--color-border-light);
        }
        .section-card:hover::before {
          opacity: 1;
        }
        .sc-label-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
        }
        .sc-label {
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          font-family: var(--font-mono);
          color: var(--accent);
          font-weight: 500;
        }
        .sc-label-ja {
          font-size: 11px;
          color: var(--color-text-muted);
        }
        .sc-title {
          font-size: 17px;
          font-weight: 500;
          color: var(--color-text);
          margin-bottom: 10px;
          line-height: 1.4;
        }
        .sc-description {
          font-size: 13.5px;
          color: var(--color-text-sub);
          line-height: 1.75;
          margin-bottom: 16px;
        }
        .sc-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 12px;
        }
        .sc-tag {
          font-size: 11px;
          padding: 2px 8px;
          border: 1px solid var(--color-border);
          border-radius: 2px;
          color: var(--color-text-muted);
          font-family: var(--font-mono);
        }
        .sc-meta {
          font-size: 11px;
          color: var(--color-text-muted);
          font-family: var(--font-mono);
        }
        .sc-arrow {
          position: absolute;
          bottom: 24px;
          right: 24px;
          font-size: 18px;
          color: var(--accent);
          opacity: 0;
          transform: translateX(-4px);
          transition: opacity var(--transition), transform var(--transition);
        }
        .section-card:hover .sc-arrow {
          opacity: 1;
          transform: translateX(0);
        }
      `}</style>

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
