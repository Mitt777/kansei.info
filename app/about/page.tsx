import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About — 著者',
  description: 'マンガ原作者・経営コンサルタント・HCI研究者・地域DX推進者。HCII2026採択。那須で468本の動画観測。著書9冊（日英）。',
}

export default function Page() {
  return (
    <>
      

      <div className="page-hero">
        <div className="page-hero-inner">
          <div className="page-label">About — 著者</div>
          <h1 className="page-title">藤井実彦について</h1>
          <p className="page-desc">マンガ原作者・経営コンサルタント・HCI研究者・地域DX推進者。HCII2026採択。那須で468本の動画観測。著書9冊（日英）。</p>
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
