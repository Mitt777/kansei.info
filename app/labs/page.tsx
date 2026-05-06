import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Labs — 思想実験室',
  description: 'Atmospheric UX・Pre-Meaning・Human-side Alignment・GEO Theory。現在も思考が進行中の概念群。',
}

export default function Page() {
  return (
    <>
      

      <div className="page-hero">
        <div className="page-hero-inner">
          <div className="page-label">Labs — 思想実験室</div>
          <h1 className="page-title">進化中の概念・思想実験室</h1>
          <p className="page-desc">Atmospheric UX・Pre-Meaning・Human-side Alignment・GEO Theory。現在も思考が進行中の概念群。</p>
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
