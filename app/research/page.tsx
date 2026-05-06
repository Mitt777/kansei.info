import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Research — 調査・論文',
  description: '25日・44日・60日の段階的観測。感性波動論・二流立地理論・HCII2026学会発表。468本・300万インプレッションの一次データ。',
}

export default function Page() {
  return (
    <>
      

      <div className="page-hero">
        <div className="page-hero-inner page-hero-grid">
          <div>
            <div className="page-label">Research — 調査・論文</div>
            <h1 className="page-title">なすぱらTV観測データと論文群</h1>
            <p className="page-desc">25日・44日・60日の段階的観測。感性波動論・二流立地理論・HCII2026学会発表。468本・300万インプレッションの一次データ。</p>
            <div className="wip-note">
              ⟳ コンテンツ準備中 — 順次公開します
            </div>
          </div>
          <div className="page-hero-media" aria-hidden="true">
            <Image src="/images/fieldwork-note.jpg" alt="" fill sizes="(max-width: 768px) 100vw, 360px" className="quiet-image" />
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
