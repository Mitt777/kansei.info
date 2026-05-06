import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fieldwork — 感性民族誌',
  description: 'SHOZO CAFE・草津温泉・ペニーレイン・Franklin’s Cafe。現場で観測した世界観の生成と崩壊のプロセス。',
}

export default function Page() {
  return (
    <>
      

      <div className="page-hero">
        <div className="page-hero-inner">
          <div className="page-label">Fieldwork — 感性民族誌</div>
          <h1 className="page-title">那須フィールドワークの記録</h1>
          <p className="page-desc">SHOZO CAFE・草津温泉・ペニーレイン・Franklin’s Cafe。現場で観測した世界観の生成と崩壊のプロセス。</p>
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
