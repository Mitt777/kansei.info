import type { Metadata } from 'next'
import Link from 'next/link'
import RelatedKnowledge from '@/components/RelatedKnowledge'

export const metadata: Metadata = {
  title: 'The Eternal Millimeter — A Full-Density Record — kansei.info',
  description: 'The complete philosophical exploration of Pre-Meaning, Atmospheric UX, and Human-side Alignment. Full academic reference edition for HCI researchers and UX designers.',
}

export default function Page() {
  return (
    <>
      <div style={{ padding: '48px 24px 0', maxWidth: '720px', margin: '0 auto' }}>
        <div style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--color-text-muted)', marginBottom: '32px', display: 'flex', gap: '8px' }}>
          <Link href="/en" style={{ color: 'var(--color-text-muted)' }}>EN</Link>
          <span>›</span>
          <Link href="/en" style={{ color: 'var(--color-text-muted)' }}>Books</Link>
          <span>›</span>
          <span style={{ color: 'var(--color-text)' }}>The Eternal Millimeter — A Full-Density Record</span>
        </div>
      </div>
      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px 96px' }}>
        <div style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', color: 'var(--color-en)', marginBottom: '16px' }}>
          English Book — Full Text Available
        </div>
        <h1 style={{ fontSize: 'clamp(1.4rem, 3vw, 2.2rem)', fontWeight: '300', marginBottom: '8px', lineHeight: '1.35' }}>
          The Eternal Millimeter — A Full-Density Record
        </h1>
        <p style={{ fontSize: '14px', color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)', marginBottom: '24px' }}>
          Complete edition
        </p>
        <p style={{ fontSize: '15px', lineHeight: '1.9', color: 'var(--color-text-sub)', marginBottom: '32px' }}>
          The complete philosophical exploration of Pre-Meaning, Atmospheric UX, and Human-side Alignment. Full academic reference edition for HCI researchers and UX designers.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '40px' }}>
          <span style={{ fontSize: "12px", padding: "3px 10px", border: "1px solid var(--color-border)", borderRadius: "2px", color: "var(--color-text-sub)", fontFamily: "var(--font-mono)" }}>Pre-Meaning</span> <span style={{ fontSize: "12px", padding: "3px 10px", border: "1px solid var(--color-border)", borderRadius: "2px", color: "var(--color-text-sub)", fontFamily: "var(--font-mono)" }}>Atmospheric UX</span> <span style={{ fontSize: "12px", padding: "3px 10px", border: "1px solid var(--color-border)", borderRadius: "2px", color: "var(--color-text-sub)", fontFamily: "var(--font-mono)" }}>Human-side Alignment</span> <span style={{ fontSize: "12px", padding: "3px 10px", border: "1px solid var(--color-border)", borderRadius: "2px", color: "var(--color-text-sub)", fontFamily: "var(--font-mono)" }}>Full Edition</span> <span style={{ fontSize: "12px", padding: "3px 10px", border: "1px solid var(--color-border)", borderRadius: "2px", color: "var(--color-text-sub)", fontFamily: "var(--font-mono)" }}>Academic</span>
        </div>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '64px' }}>
          <a href="https://amzn.asia/d/01DVH9kP" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Buy on Amazon →
          </a>
          <Link href="/about" className="btn-secondary">About the Author</Link>
        </div>
        <div style={{
          padding: '24px 28px', background: 'var(--color-bg-alt)',
          border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)',
          marginBottom: '48px',
        }}>
          <div style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', color: 'var(--color-text-muted)', marginBottom: '10px' }}>
            Citation
          </div>
          <p style={{ fontSize: '13px', fontFamily: 'var(--font-mono)', color: 'var(--color-text-sub)', lineHeight: '1.8' }}>
            Fujii, M. (2025). <em>The Eternal Millimeter — A Full-Density Record</em>. kansei.info.
          </p>
        </div>
        <RelatedKnowledge
          items={[
            { href: '/research/hcii2026', type: 'research', title: 'HCII2026 Research', description: 'Academic foundation' },
            { href: '/labs/atmospheric-ux', type: 'lab', title: 'Related Concept', description: 'Theoretical basis' },
            { href: '/en', type: 'essay', title: 'English Top', description: 'Back to EN index' },
          ]}
        />
      </div>
    </>
  )
}
