import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'English — International Knowledge Space',
  description: 'Sekaikan Marketing · Atmospheric UX · Pre-Meaning · Save-Plan-Impulse. English books and HCII2026 research by Mitsuhiko Fujii.',
}

export default function Page() {
  return (
    <>
      

      <div className="page-hero">
        <div className="page-hero-inner">
          <div className="page-label">English — International Knowledge Space</div>
          <h1 className="page-title">International Knowledge Space</h1>
          <p className="page-desc">Sekaikan Marketing · Atmospheric UX · Pre-Meaning · Save-Plan-Impulse. English books and HCII2026 research by Mitsuhiko Fujii.</p>
          <div className="wip-note">
            ⟳ コンテンツ準備中 — 順次公開します
          </div>
        </div>
      </div>
      <div className="page-body">
        <p style={{ color: 'var(--color-text-muted)', fontSize: '14px', lineHeight: '1.85' }}>
          このセクションのコンテンツは現在準備中です。
          書籍・調査レポート・フィールドノートを順次公開していきます。
        </p>
      </div>
    </>
  )
}
