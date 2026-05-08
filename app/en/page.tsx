import type { Metadata } from 'next'
import Link from 'next/link'
import SectionCard from '@/components/SectionCard'

export const metadata: Metadata = {
  title: 'kansei.info — International Knowledge Space',
  description: 'Sekaikan Marketing · Atmospheric UX · Pre-Meaning · Human-side Alignment · Save-Plan-Impulse. Knowledge platform by Mitsuhiko Fujii. HCII2026 adopted research.',
}

const enSections = [
  {
    href: '/en/where-humans-breathe',
    label: 'Book Section — English',
    labelJa: '',
    title: 'Where Humans Breathe',
    description: 'Atmosphere, Experience, and Return Motivation in the AI Era. A quiet English section for the Kindle book and its conceptual archive.',
    accentColor: 'var(--color-en)',
    tags: ['Book', 'Atmosphere', 'Return Motivation', 'AI Era'],
  },
  {
    href: '/en/manifesto',
    label: 'Manifesto — English',
    labelJa: '',
    title: 'Where Humans Breathe',
    description: 'A manifesto for human experience in the AI era. The philosophical foundation of Kansei.info for international HCI, UX, and human-centered AI readers.',
    accentColor: 'var(--color-en)',
    tags: ['Manifesto', 'Human Experience', 'AI Era', 'Fieldwork'],
  },
  {
    href: '/en/glossary',
    label: 'Glossary — Concepts',
    labelJa: '',
    title: 'Glossary of Kansei Concepts',
    description: 'A concept map for atmosphere, human experience, and worldview design in the AI era. English concept bridges for Sekaikan, Atmospheric UX, Pre-Meaning, SPI, and Kansei Driven Regional DX.',
    accentColor: 'var(--color-en)',
    tags: ['Glossary', 'Kansei Concepts', 'Worldview Design', 'AI Era'],
  },
  {
    href: '/en/books/spi-regional-dx',
    label: 'Book — English',
    labelJa: '',
    title: 'Save-Plan-Impulse: Kansei Driven Regional DX',
    description: "Action Observation Notes from the Nasu Field Study. The English academic edition of the SNS behavior observation research. Foundation for HCII2026 presentation.",
    accentColor: 'var(--color-en)',
    tags: ['HCII2026', 'Kansei', 'Regional DX', 'Field Study'],
  },
  {
    href: '/en/books/eternal-millimeter-short',
    label: 'Book — English',
    labelJa: '',
    title: 'The Eternal Millimeter (Condensed)',
    description: "A short philosophical fable exploring Pre-Meaning — the moment before meaning, when the body already knows. For international readers approaching Kansei design.",
    accentColor: 'var(--color-en)',
    tags: ['Pre-Meaning', 'Philosophy', 'Fable', 'Short Edition'],
  },
  {
    href: '/en/books/eternal-millimeter-full',
    label: 'Book — English',
    labelJa: '',
    title: 'The Eternal Millimeter (Full-Density)',
    description: "The complete edition. Full-density exploration of Atmospheric UX, Human-side Alignment, and the human experience in the AI era. Academic reference edition.",
    accentColor: 'var(--color-en)',
    tags: ['Atmospheric UX', 'Human-side Alignment', 'Full Edition', 'Academic'],
  },
  {
    href: '/research/hcii2026',
    label: 'Research — HCII2026',
    labelJa: '',
    title: 'HCII2026: Save-Plan-Impulse Research',
    description: "Adopted by Human-Computer Interaction International 2026. Kansei-driven regional DX research based on 60-day field study in Nasu, Japan. 468 videos · 3M impressions.",
    accentColor: 'var(--color-frameworks)',
    tags: ['HCII2026', 'HCI', 'Academic', 'Field Data'],
  },
  {
    href: '/labs/atmospheric-ux',
    label: 'Concept — Original',
    labelJa: '',
    title: 'Atmospheric UX',
    description: "A new design paradigm: treating the atmosphere itself — sound, scent, light, temperature — as a primary UX design target. Based on Böhme’s Atmosphere Theory (1993).",
    accentColor: 'var(--color-labs)',
    tags: ['Original Concept', 'Böhme', 'UX Design', 'Atmosphere'],
  },
  {
    href: '/labs/pre-meaning',
    label: 'Concept — Original',
    labelJa: '',
    title: 'Pre-Meaning',
    description: "The felt sense before meaning: the body responds before language. Connected to Merleau-Ponty’s phenomenology and HCI embodiment research.",
    accentColor: 'var(--color-labs)',
    tags: ['Original Concept', 'Phenomenology', 'Merleau-Ponty', 'Embodiment'],
  },
]

const concepts = [
  { en: 'Sekaikan Marketing', ja: '世界観マーケティング' },
  { en: 'Atmospheric UX', ja: '空気のUX' },
  { en: 'Pre-Meaning', ja: '意味になる前の感覚' },
  { en: 'Human-side Alignment', ja: '人間側整合' },
  { en: 'Contextual Continuity', ja: '文脈継続性' },
  { en: 'Resonance Economy', ja: '共鳴型経済圈' },
  { en: 'Save → Plan → Impulse', ja: 'SNS行動モデル' },
  { en: 'Kansei Wave Theory', ja: '感性波動論' },
  { en: 'Two-tier Location Theory', ja: '二流立地理論' },
]

export default function EnPage() {
  return (
    <>
      <div style={{ padding: '80px 24px 64px', borderBottom: '1px solid var(--color-border)' }}>
        <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
          <div style={{ fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', color: 'var(--color-en)', marginBottom: '24px' }}>
            International Knowledge Space — kansei.info/en
          </div>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: '300', lineHeight: '1.3', marginBottom: '20px', color: 'var(--color-text)' }}>
            Where does the human<br />
            <em style={{ fontStyle: 'italic' }}>breathe</em><br />
            in the AI era?
          </h1>
          <p style={{ fontSize: '15px', color: 'var(--color-text-sub)', lineHeight: '1.9', maxWidth: '560px', marginBottom: '32px' }}>
            kansei.info is a knowledge platform by Mitsuhiko Fujii — researcher, author, and
            fieldwork observer. Combining HCI research, Kansei design, regional DX, and
            worldview marketing theory into an integrated knowledge space for the AI era.
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '48px' }}>
            <Link href="/en/where-humans-breathe" className="btn-primary">Where Humans Breathe</Link>
            <Link href="/en/books/spi-regional-dx" className="btn-primary">Read English Books →</Link>
            <Link href="/research/hcii2026" className="btn-secondary">HCII2026 Research</Link>
            <Link href="/about" className="btn-secondary">About the Author</Link>
          </div>
          <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
            {[
              { val: '468', label: 'Field videos observed' },
              { val: '3M+', label: 'Impressions recorded' },
              { val: '9', label: 'Books published (EN/JP)' },
              { val: 'HCII', label: 'International HCI adopted' },
            ].map((s) => (
              <div key={s.label}>
                <div style={{ fontSize: '22px', fontWeight: '500', fontFamily: 'var(--font-mono)', color: 'var(--color-text)' }}>{s.val}</div>
                <div style={{ fontSize: '11px', color: 'var(--color-text-muted)', marginTop: '2px' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ background: 'var(--color-bg-alt)', borderBottom: '1px solid var(--color-border)', padding: '48px 24px' }}>
        <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
          <div style={{ fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', color: 'var(--color-text-muted)', marginBottom: '20px' }}>
            Original Concepts — First defined by kansei.info
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {concepts.map((c) => (
              <div key={c.en} style={{ padding: '8px 14px', border: '1px solid var(--color-border)', background: 'var(--color-surface)' }}>
                <div style={{ fontSize: '13px', fontWeight: '500', color: 'var(--color-text)' }}>{c.en}</div>
                <div style={{ fontSize: '11px', color: 'var(--color-text-muted)', marginTop: '2px', fontFamily: 'var(--font-mono)' }}>{c.ja}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: '64px 24px 96px' }}>
        <div style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', color: 'var(--color-text-muted)', marginBottom: '28px' }}>
          English Content — Books & Research
        </div>
        <div className="sections-grid">
          {enSections.map((s) => (
            <SectionCard key={s.href} {...s} />
          ))}
        </div>
        <div style={{ marginTop: '64px', padding: '28px 32px', border: '1px solid var(--color-border)', background: 'var(--color-bg-alt)', borderRadius: 'var(--radius-md)' }}>
          <div style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', color: 'var(--color-text-muted)', marginBottom: '12px' }}>
            How to Cite
          </div>
          <p style={{ fontSize: '13px', fontFamily: 'var(--font-mono)', color: 'var(--color-text-sub)', lineHeight: '1.8' }}>
            Fujii, M. (2025). <em>Save-Plan-Impulse: Kansei Driven Regional DX</em>. kansei.info.
          </p>
          <p style={{ fontSize: '13px', fontFamily: 'var(--font-mono)', color: 'var(--color-text-sub)', lineHeight: '1.8', marginTop: '8px' }}>
            Fujii, M. (2026). Save-Plan-Impulse: Kansei-Driven Regional DX. <em>Proceedings of HCII 2026</em>.
          </p>
        </div>
      </div>
    </>
  )
}
