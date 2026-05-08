import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Glossary of Kansei Concepts — kansei.info',
  description:
    'A concept map for atmosphere, human experience, and worldview design in the AI era. English glossary of Kansei concepts by Mitsuhiko Fujii.',
}

const glossaryItems = [
  {
    term: 'Sekaikan / Worldview',
    origin: '世界観（Sekaikan）',
    rendering: 'Worldview',
    variants: ['Experiential World', 'Narrative Environment', 'Designed Atmosphere'],
    definition:
      'A coherent experiential environment where atmosphere, story, spatial design, behavior, emotional continuity, and human presence form a unified sense of reality.',
    note:
      'Sekaikan is not merely visual branding. It is the invisible consistency that makes people feel: “I want to stay here” or “I want to return.”',
    why:
      'In the AI era, information becomes increasingly abundant and interchangeable. What remains valuable is the ability to create emotionally memorable environments. Sekaikan explains why certain places, brands, or communities continue to resonate beyond functional value.',
    related: ['Atmospheric UX', 'Contextual Continuity', 'Resonance Economy'],
  },
  {
    term: 'Atmospheric UX',
    origin: '空気感 / 場の感覚',
    rendering: 'Atmospheric UX',
    variants: ['Atmosphere-Centered Experience Design', 'Emotional Spatial UX', 'Presence-Based UX'],
    definition:
      'A form of user experience shaped not only by interface or usability, but by atmosphere, silence, texture, emotional tone, spatial continuity, lighting, sound, and human presence.',
    note:
      'Atmospheric UX focuses on how environments are emotionally felt before they are consciously interpreted.',
    why:
      'As digital interfaces become standardized, human experience increasingly depends on atmosphere rather than information density. Atmospheric UX explores how physical and emotional environments shape memory, comfort, belonging, and return motivation.',
    related: ['Pre-Meaning', 'Sekaikan', 'Human-side Alignment'],
  },
  {
    term: 'Pre-Meaning',
    origin: '意味以前',
    rendering: 'Pre-Meaning',
    variants: ['Pre-Interpretive State', 'Meaning-Before-Language', 'Atmospheric Intuition'],
    definition:
      'A human state that exists before explicit interpretation, where atmosphere, bodily sensation, intuition, and emotional resonance emerge prior to verbal meaning.',
    note:
      'People often react emotionally before they explain why. Pre-Meaning describes this early layer of human experience.',
    why:
      'AI systems increasingly optimize language and information, yet much of human life operates before language fully forms. Pre-Meaning explores the territory of intuition, presence, emotional sensing, and atmosphere.',
    related: ['Atmospheric UX', 'Human-side Alignment', 'Sekaikan'],
  },
  {
    term: 'Save → Plan → Impulse',
    origin: '保存 → 検討 → 衝動',
    rendering: 'Save → Plan → Impulse',
    variants: ['SPI Behavioral Model', 'Sequential Tourism Motivation', 'SNS Experience Flow'],
    definition:
      'A behavioral transition model observed through SNS fieldwork. Instagram often triggers saving behavior. YouTube supports planning and reassurance. TikTok stimulates impulsive action.',
    note:
      'Together, they form a sequential emotional pathway from curiosity to real-world movement.',
    why:
      'Modern tourism and consumer behavior are increasingly shaped through cross-platform emotional progression rather than direct advertising. The SPI model explains how atmosphere travels across platforms and transforms into physical action.',
    related: ['Atmospheric UX', 'Resonance Economy', 'Kansei Driven Regional DX'],
  },
  {
    term: 'Human-side Alignment',
    origin: '人間側アラインメント',
    rendering: 'Human-side Alignment',
    variants: ['Human-Centered Alignment', 'Existential Alignment', 'Human Sensibility Alignment'],
    definition:
      'An approach to AI and technology design that prioritizes human emotional rhythm, presence, dignity, and lived experience rather than pure optimization or efficiency.',
    note:
      'It asks: “What kind of humanity should technology protect?”',
    why:
      'As AI systems increasingly shape everyday life, questions of emotional well-being, attention, atmosphere, and meaning become central. Human-side Alignment reframes AI ethics around lived human experience.',
    related: ['Pre-Meaning', 'Atmospheric UX', 'Contextual Continuity'],
  },
  {
    term: 'Contextual Continuity',
    origin: '文脈継続性',
    rendering: 'Contextual Continuity',
    variants: ['Narrative Continuity', 'Experiential Consistency', 'Emotional Continuity'],
    definition:
      'The sustained consistency of atmosphere, story, emotional tone, and spatial identity across time and interaction.',
    note:
      'It is the reason why some places feel coherent, trustworthy, and emotionally stable.',
    why:
      'In fragmented digital environments, continuity itself becomes emotionally valuable. Contextual Continuity strengthens attachment, memory, and long-term resonance.',
    related: ['Sekaikan', 'Resonance Economy', 'Atmospheric UX'],
  },
  {
    term: 'Resonance Economy',
    origin: '共鳴型経済圏',
    rendering: 'Resonance Economy',
    variants: ['Emotionally Resonant Economy', 'Community Resonance Model', 'Experience-Based Circulation'],
    definition:
      'An economic model where emotional resonance, shared atmosphere, trust, and worldview become the primary drivers of circulation and value.',
    note:
      'People participate not only through consumption, but through emotional belonging and narrative connection.',
    why:
      'As products become commoditized, emotional resonance increasingly determines loyalty and movement. Resonance Economy explains how atmosphere creates sustainable communities and return behavior.',
    related: ['Sekaikan', 'Save → Plan → Impulse', 'Contextual Continuity'],
  },
  {
    term: 'Kansei Driven Regional DX',
    origin: '感性ドリブン地域DX',
    rendering: 'Kansei Driven Regional DX',
    variants: ['Emotion-Centered Regional Transformation', 'Atmosphere-Based Tourism Design', 'Human Experience Regional Strategy'],
    definition:
      'A regional transformation approach where emotional experience, atmosphere, storytelling, and human presence are treated as strategic infrastructure.',
    note:
      'Rather than optimizing only efficiency, this model focuses on designing places people emotionally remember.',
    why:
      'Regional revitalization in the AI era requires more than digital infrastructure. Kansei Driven Regional DX proposes that atmosphere, memory, emotional resonance, and worldview are themselves economic assets.',
    related: ['Resonance Economy', 'Save → Plan → Impulse', 'Sekaikan'],
  },
]

const internalLinks = [
  { href: '/en', label: 'English Home', description: 'International knowledge space' },
  { href: '/en/where-humans-breathe', label: 'Where Humans Breathe', description: 'English book section' },
  { href: '/en/glossary-kansei-concepts', label: 'Concept Glossary', description: 'Book section concept map' },
  { href: '/en/manifesto', label: 'English Manifesto', description: 'Why this knowledge space exists' },
  { href: '/labs/atmospheric-ux', label: 'Atmospheric UX', description: 'Original concept page' },
  { href: '/labs/pre-meaning', label: 'Pre-Meaning', description: 'Original concept page' },
  { href: '/labs/spi-model', label: 'Save → Plan → Impulse', description: 'Behavioral model' },
  { href: '/research/hcii2026', label: 'HCII2026 Research', description: 'Academic foundation' },
]

export default function EnglishGlossaryPage() {
  return (
    <>
      <div style={{ padding: '80px 24px 64px', borderBottom: '1px solid var(--color-border)' }}>
        <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
          <div style={{ fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', color: 'var(--color-en)', marginBottom: '24px' }}>
            English Glossary — Concept Bridges
          </div>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: '300', lineHeight: '1.3', marginBottom: '18px', color: 'var(--color-text)' }}>
            Glossary of<br />Kansei Concepts
          </h1>
          <p style={{ fontSize: '16px', color: 'var(--color-text-sub)', lineHeight: '1.9', maxWidth: '680px', marginBottom: '28px' }}>
            A concept map for atmosphere, human experience, and worldview design in the AI era.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 680px)', gap: '16px' }}>
            {[
              'Some experiences cannot be fully explained by information alone.',
              'Why do certain places feel unforgettable? Why do people return to specific cafés, towns, brands, or worlds? Why does atmosphere sometimes matter more than efficiency?',
              'This glossary is an evolving map of concepts developed through fieldwork, SNS observation, regional studies, UX thinking, and human-centered AI research in Japan.',
              'Rather than direct translation, these terms are presented as “concept bridges” — connecting Japanese sensibilities with international discussions around experience design, atmosphere, place, emotion, and human meaning in the AI era.',
            ].map((paragraph) => (
              <p key={paragraph} style={{ fontSize: '15px', color: 'var(--color-text-sub)', lineHeight: '1.9' }}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div style={{ background: 'var(--color-bg-alt)', borderBottom: '1px solid var(--color-border)', padding: '34px 24px' }}>
        <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {glossaryItems.map((item, index) => (
            <a
              key={item.term}
              href={`#term-${index + 1}`}
              style={{
                padding: '7px 12px',
                border: '1px solid var(--color-border)',
                background: 'var(--color-surface)',
                color: 'var(--color-text-sub)',
                fontSize: '12px',
                fontFamily: 'var(--font-mono)',
                borderRadius: '2px',
              }}
            >
              {item.term}
            </a>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: '64px 24px 96px' }}>
        <div style={{ display: 'grid', gap: '18px' }}>
          {glossaryItems.map((item, index) => (
            <section
              id={`term-${index + 1}`}
              key={item.term}
              style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-md)',
                padding: '28px',
                scrollMarginTop: '84px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: '18px', flexWrap: 'wrap', marginBottom: '18px' }}>
                <div>
                  <div style={{ fontSize: '10px', letterSpacing: '0.24em', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', color: 'var(--color-en)', marginBottom: '8px' }}>
                    Concept {String(index + 1).padStart(2, '0')}
                  </div>
                  <h2 style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.8rem)', fontWeight: '400', color: 'var(--color-text)', lineHeight: '1.35' }}>
                    {item.term}
                  </h2>
                </div>
                <div style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--color-text-muted)', paddingTop: '4px' }}>
                  {item.origin}
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 210px) minmax(0, 1fr)', gap: '18px 28px' }}>
                <div className="glossary-field-label">Primary English Rendering</div>
                <div className="glossary-field-body">{item.rendering}</div>

                <div className="glossary-field-label">Contextual Variants</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {item.variants.map((variant) => (
                    <span key={variant} className="sc-tag">{variant}</span>
                  ))}
                </div>

                <div className="glossary-field-label">Definition</div>
                <div className="glossary-field-body">
                  <p>{item.definition}</p>
                  <p style={{ marginTop: '10px', color: 'var(--color-text-sub)' }}>{item.note}</p>
                </div>

                <div className="glossary-field-label">Why It Matters</div>
                <div className="glossary-field-body">{item.why}</div>

                <div className="glossary-field-label">Related Concepts</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {item.related.map((concept) => (
                    <span key={concept} style={{ fontSize: '11px', padding: '3px 9px', border: '1px solid var(--color-en)', color: 'var(--color-en)', borderRadius: '2px', fontFamily: 'var(--font-mono)' }}>
                      {concept}
                    </span>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>

        <div style={{ marginTop: '64px', padding: '30px 32px', background: 'var(--color-bg-alt)', border: '1px solid var(--color-border)', borderLeft: '3px solid var(--color-en)', borderRadius: 'var(--radius-md)' }}>
          <div style={{ fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', color: 'var(--color-en)', marginBottom: '12px' }}>
            Closing Note
          </div>
          <p style={{ fontSize: '15px', color: 'var(--color-text-sub)', lineHeight: '1.9', maxWidth: '760px' }}>
            This glossary is not fixed.
          </p>
          <p style={{ fontSize: '15px', color: 'var(--color-text-sub)', lineHeight: '1.9', maxWidth: '760px', marginTop: '10px' }}>
            It is an evolving attempt to describe forms of human experience that are becoming increasingly important in the AI era — atmosphere, emotional resonance, place, continuity, and the quiet reasons people choose to return.
          </p>
        </div>

        <div className="rk-section">
          <div className="rk-heading">Continue Exploring</div>
          <div className="rk-grid">
            {internalLinks.map((item) => (
              <Link key={item.href} href={item.href} className="rk-item" style={{ '--item-color': 'var(--color-en)' } as React.CSSProperties}>
                <div className="rk-dot" />
                <div className="rk-content">
                  <div className="rk-type">Internal Link</div>
                  <div className="rk-title">{item.label}</div>
                  <div className="rk-desc">{item.description}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
