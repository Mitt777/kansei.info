type DefinitionBoxProps = {
  term: string
  termJa?: string
  definition: string
  source?: string
  relatedTerms?: string[]
}

export default function DefinitionBox({ term, termJa, definition, source = '藤井実彦, kansei.info, 2025', relatedTerms = [] }: DefinitionBoxProps) {
  return (
    <div style={{ border: '2px solid var(--color-gold)', borderRadius: 'var(--radius-md)', padding: '20px 24px', margin: '32px 0', background: 'var(--color-gold-pale)', position: 'relative' }}>
      <div style={{ position: 'absolute', top: '-10px', left: '16px', background: 'var(--color-gold)', color: '#fff', fontSize: '9px', letterSpacing: '0.2em', fontFamily: 'var(--font-mono)', padding: '2px 8px', borderRadius: '2px', fontWeight: '700' }}>DEFINITION</div>
      <div style={{ marginBottom: '8px' }}>
        <span style={{ fontSize: '16px', fontWeight: '700', color: 'var(--color-text)' }}>{term}</span>
        {termJa && <span style={{ fontSize: '13px', color: 'var(--color-text-muted)', marginLeft: '8px', fontFamily: 'var(--font-mono)' }}>— {termJa}</span>}
      </div>
      <p style={{ fontSize: '14px', lineHeight: '1.85', color: 'var(--color-text)', marginBottom: relatedTerms.length > 0 ? '12px' : '8px' }}>{definition}</p>
      {relatedTerms.length > 0 && (
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '8px' }}>
          <span style={{ fontSize: '11px', color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}>関連:</span>
          {relatedTerms.map((t) => <span key={t} style={{ fontSize: '11px', padding: '1px 7px', border: '1px solid var(--color-gold)', borderRadius: '2px', color: 'var(--color-gold)', fontFamily: 'var(--font-mono)' }}>{t}</span>)}
        </div>
      )}
      <div style={{ fontSize: '11px', color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)', fontStyle: 'italic' }}>出典: {source}</div>
    </div>
  )
}
