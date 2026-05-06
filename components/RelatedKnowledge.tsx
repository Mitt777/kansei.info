import Link from 'next/link'

type RelatedItem = {
  href: string
  type: 'framework' | 'lab' | 'research' | 'fieldwork' | 'book' | 'essay'
  title: string
  description?: string
}

type RelatedKnowledgeProps = {
  items: RelatedItem[]
  heading?: string
}

const typeConfig: Record<RelatedItem['type'], { label: string; color: string }> = {
  framework: { label: 'Framework', color: 'var(--color-frameworks)' },
  lab:       { label: 'Lab',       color: 'var(--color-labs)' },
  research:  { label: 'Research',  color: 'var(--color-research)' },
  fieldwork: { label: 'Fieldwork', color: 'var(--color-fieldwork)' },
  book:      { label: 'Book',      color: 'var(--color-books)' },
  essay:     { label: 'Essay',     color: 'var(--color-essays)' },
}

export default function RelatedKnowledge({
  items,
  heading = '関連する知識',
}: RelatedKnowledgeProps) {
  return (
    <>
      <style>{`
        .rk-section {
          margin-top: 64px;
          padding-top: 40px;
          border-top: 1px solid var(--color-border);
        }
        .rk-heading {
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          font-family: var(--font-mono);
          color: var(--color-text-muted);
          margin-bottom: 20px;
        }
        .rk-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 12px;
        }
        .rk-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 16px;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-sm);
          background: var(--color-surface);
          text-decoration: none;
          color: inherit;
          transition: border-color var(--transition), box-shadow var(--transition);
        }
        .rk-item:hover {
          border-color: var(--item-color);
          box-shadow: 0 2px 12px rgba(0,0,0,0.06);
        }
        .rk-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--item-color);
          flex-shrink: 0;
          margin-top: 5px;
        }
        .rk-content {}
        .rk-type {
          font-size: 9px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          font-family: var(--font-mono);
          color: var(--item-color);
          margin-bottom: 3px;
        }
        .rk-title {
          font-size: 13px;
          font-weight: 500;
          color: var(--color-text);
          line-height: 1.4;
        }
        .rk-desc {
          font-size: 12px;
          color: var(--color-text-muted);
          margin-top: 3px;
          line-height: 1.5;
        }
      `}</style>

      <div className="rk-section">
        <div className="rk-heading">{heading}</div>
        <div className="rk-grid">
          {items.map((item) => {
            const config = typeConfig[item.type]
            return (
              <Link
                key={item.href}
                href={item.href}
                className="rk-item"
                style={{ '--item-color': config.color } as React.CSSProperties}
              >
                <div className="rk-dot" />
                <div className="rk-content">
                  <div className="rk-type">{config.label}</div>
                  <div className="rk-title">{item.title}</div>
                  {item.description && (
                    <div className="rk-desc">{item.description}</div>
                  )}
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}
