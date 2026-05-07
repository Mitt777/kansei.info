type FaqItem = {
  question: string
  answer: string
}

type FaqSectionProps = {
  faqs: FaqItem[]
  heading?: string
}

export default function FaqSection({ faqs, heading = 'よくある質問' }: FaqSectionProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div style={{ marginTop: '56px', paddingTop: '40px', borderTop: '1px solid var(--color-border)' }}>
        <div style={{ fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', color: 'var(--color-text-muted)', marginBottom: '16px' }}>
          FAQ — {heading}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{ border: '1px solid var(--color-border)', background: 'var(--color-surface)', padding: '18px 22px' }}>
              <div style={{ fontSize: '14px', fontWeight: '500', marginBottom: '8px', display: 'flex', gap: '10px' }}>
                <span style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-mono)', fontSize: '12px', flexShrink: 0 }}>Q.</span>
                {faq.question}
              </div>
              <div style={{ fontSize: '13.5px', lineHeight: '1.85', color: 'var(--color-text-sub)', display: 'flex', gap: '10px' }}>
                <span style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)', fontSize: '12px', flexShrink: 0 }}>A.</span>
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
