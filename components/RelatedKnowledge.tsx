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
