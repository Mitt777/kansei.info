import type { Metadata } from 'next'
import Link from 'next/link'
import RelatedKnowledge from '@/components/RelatedKnowledge'

export const metadata: Metadata = {
  title: 'Save-Plan-Impulse: Kansei Driven Regional DX — kansei.info',
  description: 'The first English academic text on Kansei-driven regional transformation. Based on 60-day fieldwork in Nasu, Japan — 468 videos, 3M impressions. The foundation for HCII2026 research.',
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
          <span style={{ color: 'var(--color-text)' }}>Save-Plan-Impulse: Kansei Driven Regional DX</span>
        </div>
      </div>
      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px 96px' }}>
        <div style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', color: 'var(--color-en)', marginBottom: '16px' }}>
          English Book — Excerpt Available
        </div>
        <h1 style={{ fontSize: 'clamp(1.4rem, 3vw, 2.2rem)', fontWeight: '300', marginBottom: '8px', lineHeight: '1.35' }}>
          Save-Plan-Impulse: Kansei Driven Regional DX
        </h1>
        <p style={{ fontSize: '14px', color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)', marginBottom: '24px' }}>
          Action Observation Notes from the Nasu Field Study
        </p>
        <p style={{ fontSize: '15px', lineHeight: '1.9', color: 'var(--color-text-sub)', marginBottom: '32px' }}>
          The first English academic text on Kansei-driven regional transformation. Based on 60-day fieldwork in Nasu, Japan — 468 videos, 3M impressions. The foundation for HCII2026 research.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '40px' }}>
          <span style={{ fontSize: "12px", padding: "3px 10px", border: "1px solid var(--color-border)", borderRadius: "2px", color: "var(--color-text-sub)", fontFamily: "var(--font-mono)" }}>HCII2026</span> <span style={{ fontSize: "12px", padding: "3px 10px", border: "1px solid var(--color-border)", borderRadius: "2px", color: "var(--color-text-sub)", fontFamily: "var(--font-mono)" }}>Kansei Design</span> <span style={{ fontSize: "12px", padding: "3px 10px", border: "1px solid var(--color-border)", borderRadius: "2px", color: "var(--color-text-sub)", fontFamily: "var(--font-mono)" }}>Regional DX</span> <span style={{ fontSize: "12px", padding: "3px 10px", border: "1px solid var(--color-border)", borderRadius: "2px", color: "var(--color-text-sub)", fontFamily: "var(--font-mono)" }}>Field Study</span> <span style={{ fontSize: "12px", padding: "3px 10px", border: "1px solid var(--color-border)", borderRadius: "2px", color: "var(--color-text-sub)", fontFamily: "var(--font-mono)" }}>SNS Behavior</span>
        </div>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '64px' }}>
          <a href="https://amzn.asia/d/0fTid5xU" target="_blank" rel="noopener noreferrer" className="btn-primary">
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
            Fujii, M. (2025). <em>Save-Plan-Impulse: Kansei Driven Regional DX</em>. kansei.info.
          </p>
        </div>
        <RelatedKnowledge
          items={[
            { href: '/research/hcii2026', type: 'research', title: 'HCII2026 Research', description: 'Academic foundation' },
            { href: '/labs/spi-model', type: 'lab', title: 'Related Concept', description: 'Theoretical basis' },
            { href: '/en', type: 'essay', title: 'English Top', description: 'Back to EN index' },
          ]}
        />
      </div>
    </>
  )
}
