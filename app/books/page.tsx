import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Books — 著作全文',
  description: '日本語6冊・英語3冊・調査レポート8本。すべて無料全文公開。世界観マーケティング・AI失業・Pre-Meaning・Save→Plan→Impulse。',
}

export default function Page() {
  return (
    <>
      

      <div className="page-hero">
        <div className="page-hero-inner">
          <div className="page-label">Books — 著作全文</div>
          <h1 className="page-title">著作・調査レポートの全文公開</h1>
          <p className="page-desc">日本語6冊・英語3冊・調査レポート8本。すべて無料全文公開。世界観マーケティング・AI失業・Pre-Meaning・Save→Plan→Impulse。</p>
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
