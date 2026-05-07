import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Where Humans Breathe — English Manifesto | kansei.info',
  description:
    'A manifesto for human experience in the AI era. The philosophical foundation of Kansei.info for HCI, UX, and human-centered AI readers.',
}

const sections = [
  {
    title: 'Beyond Information',
    body: [
      'This project began with a simple observation:',
      'Human beings do not move through information alone.',
      'People return to certain cafés, towns, streets, brands, stories, and places for reasons that are difficult to quantify.',
      'Sometimes it is silence. Sometimes texture. Sometimes light through a window. Sometimes the emotional continuity of a place.',
      'Something exists before explanation. Before language fully forms. Before logic catches up.',
      'This project calls that territory: Pre-Meaning.',
    ],
  },
  {
    title: 'Fieldwork from Rural Japan',
    body: [
      'The foundation of this research was not a laboratory.',
      'It was fieldwork.',
      'Walking through rural towns in Japan. Observing cafés, tourism spaces, local communities, SNS behavior, and emotional reactions across platforms.',
      'Over hundreds of videos and long-term observation, a recurring pattern emerged:',
      'People were not responding only to products or information.',
      'They were responding to atmosphere.',
    ],
  },
  {
    title: 'Atmosphere as Human Experience',
    body: [
      'Modern digital systems are increasingly efficient.',
      'But efficiency alone does not create belonging.',
      'Atmosphere matters. Emotional continuity matters. Human presence matters.',
      'A place becomes memorable not only because of what exists there, but because of how it feels to remain there.',
      'This project explores atmosphere not as decoration, but as infrastructure for human experience.',
    ],
  },
  {
    title: 'Save → Plan → Impulse',
    body: [
      'Through SNS observation, another pattern became visible.',
      'Instagram often triggered saving behavior. YouTube supported planning and reassurance. TikTok stimulated impulsive movement.',
      'Emotion was not static. It flowed across platforms.',
      'This became the basis for the Save → Plan → Impulse model — a framework describing how emotional resonance transforms into real-world action.',
    ],
  },
  {
    title: 'Human-side Alignment',
    body: [
      'As AI systems become more capable, a critical question emerges:',
      'What kind of humanity should technology protect?',
      'Human-side Alignment proposes that the future of technology must consider emotional rhythm, attention, silence, place, dignity, and lived experience — not only optimization.',
      'The challenge of the AI era is no longer merely technological.',
      'It is existential.',
    ],
  },
  {
    title: 'Why This Knowledge Space Exists',
    body: [
      'Kansei.info was created as an evolving knowledge space for concepts that exist between atmosphere, design, regional experience, UX, emotion, and human presence.',
      'It is not a fixed theory.',
      'It is an ongoing attempt to describe why certain places feel alive, why some experiences remain unforgettable, and why human beings continue searching for places where they can truly breathe.',
    ],
  },
]

const links = [
  { href: '/en', label: 'English Home', description: 'International knowledge space' },
  { href: '/en/glossary', label: 'Glossary of Kansei Concepts', description: 'Concept bridges for the AI era' },
  { href: '/labs/pre-meaning', label: 'Pre-Meaning', description: 'The territory before language' },
  { href: '/labs/atmospheric-ux', label: 'Atmospheric UX', description: 'Atmosphere as experience design' },
  { href: '/labs/spi-model', label: 'Save → Plan → Impulse', description: 'Cross-platform behavior model' },
  { href: '/research/hcii2026', label: 'HCII2026 Research', description: 'Academic foundation' },
]

export default function EnglishManifestoPage() {
  return (
    <>
      <div style={{ padding: '88px 24px 72px', borderBottom: '1px solid var(--color-border)', background: 'var(--color-bg)' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <div style={{ fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', color: 'var(--color-en)', marginBottom: '26px' }}>
            English Manifesto — Kansei.info
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.4rem)', fontWeight: '300', lineHeight: '1.22', marginBottom: '18px', color: 'var(--color-text)' }}>
            Where Humans<br />Breathe
          </h1>
          <p style={{ fontSize: '16px', color: 'var(--color-text-sub)', lineHeight: '1.9', marginBottom: '34px' }}>
            A Manifesto for Human Experience in the AI Era
          </p>
          <div style={{ borderLeft: '2px solid var(--color-en)', paddingLeft: '22px', display: 'grid', gap: '16px' }}>
            <p style={{ fontSize: '16px', color: 'var(--color-text-sub)', lineHeight: '1.95' }}>
              We are entering an age where information is abundant, interfaces are optimized, and artificial intelligence increasingly shapes everyday life.
            </p>
            <p style={{ fontSize: '16px', color: 'var(--color-text-sub)', lineHeight: '1.95' }}>
              Yet despite this acceleration, many people feel emotionally exhausted, spatially disconnected, and strangely unable to breathe.
            </p>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '68px 24px 96px' }}>
        <div style={{ display: 'grid', gap: '58px' }}>
          {sections.map((section, index) => (
            <section key={section.title}>
              <div style={{ fontSize: '10px', letterSpacing: '0.24em', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', color: 'var(--color-text-muted)', marginBottom: '14px' }}>
                {String(index + 1).padStart(2, '0')} — Manifesto
              </div>
              <h2 style={{ fontSize: 'clamp(1.35rem, 3vw, 2rem)', fontWeight: '400', color: 'var(--color-text)', marginBottom: '18px', lineHeight: '1.35' }}>
                {section.title}
              </h2>
              <div style={{ display: 'grid', gap: '14px' }}>
                {section.body.map((paragraph) => {
                  const emphasized =
                    paragraph === 'Pre-Meaning.' ||
                    paragraph === 'It was fieldwork.' ||
                    paragraph === 'They were responding to atmosphere.' ||
                    paragraph === 'It is existential.'

                  return (
                    <p
                      key={paragraph}
                      style={{
                        fontSize: emphasized ? '18px' : '15px',
                        color: emphasized ? 'var(--color-text)' : 'var(--color-text-sub)',
                        lineHeight: '1.95',
                        fontWeight: emphasized ? '400' : '300',
                      }}
                    >
                      {paragraph}
                    </p>
                  )
                })}
              </div>
            </section>
          ))}
        </div>

        <div style={{ marginTop: '70px', padding: '30px 32px', background: 'var(--color-bg-alt)', border: '1px solid var(--color-border)', borderLeft: '3px solid var(--color-en)', borderRadius: 'var(--radius-md)' }}>
          <div style={{ fontSize: '10px', letterSpacing: '0.24em', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', color: 'var(--color-en)', marginBottom: '16px' }}>
            Closing
          </div>
          <p style={{ fontSize: '16px', color: 'var(--color-text-sub)', lineHeight: '1.95' }}>
            As artificial intelligence reshapes information, human value may increasingly emerge through atmosphere, continuity, presence, and emotional resonance.
          </p>
          <p style={{ fontSize: '16px', color: 'var(--color-text-sub)', lineHeight: '1.95', marginTop: '14px' }}>
            The future may not belong to those who simply produce more information.
          </p>
          <p style={{ fontSize: '18px', color: 'var(--color-text)', lineHeight: '1.85', marginTop: '14px' }}>
            It may belong to those who can still create places where humans can breathe.
          </p>
        </div>

        <div style={{ marginTop: '44px', paddingTop: '28px', borderTop: '1px solid var(--color-border)' }}>
          <div style={{ fontSize: '15px', color: 'var(--color-text)', lineHeight: '1.8' }}>Mitsuhiko Fujii</div>
          <div style={{ fontSize: '13px', color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)', lineHeight: '1.8' }}>Kansei.info</div>
          <div style={{ fontSize: '13px', color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)', lineHeight: '1.8' }}>Fieldwork from Rural Japan</div>
        </div>

        <div className="rk-section">
          <div className="rk-heading">Continue Exploring</div>
          <div className="rk-grid">
            {links.map((item) => (
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
