import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Labs — 思想実験室',
  description: 'Atmospheric UX・Pre-Meaning・Human-side Alignment・GEO Theory。現在も思考が進行中の概念群。',
}

export default function Page() {
  return (
    <>
      <style>{`
        .page-hero {
          padding: 80px 24px 64px;
          border-bottom: 1px solid var(--color-border);
        }
        .page-hero-inner { max-width: var(--max-width); margin: 0 auto; }
        .page-label {
          font-size: 10px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          font-family: var(--font-mono);
          color: var(--color-labs);
          margin-bottom: 20px;
        }
        .page-title {
          font-size: clamp(1.6rem, 3.5vw, 2.4rem);
          font-weight: 300;
          margin-bottom: 16px;
          color: var(--color-text);
        }
        .page-desc {
          font-size: 15px;
          color: var(--color-text-sub);
          line-height: 1.85;
          max-width: 560px;
          margin-bottom: 32px;
        }
        .wip-note {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          font-family: var(--font-mono);
          color: var(--color-text-muted);
          border: 1px solid var(--color-border);
          padding: 6px 14px;
          border-radius: 2px;
        }
        .page-body {
          max-width: var(--max-width);
          margin: 0 auto;
          padding: 64px 24px 96px;
        }
      `}</style>

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
