import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Books — 著作全文',
  description: '日本語6冊・英語3冊・調査レポート8本。すべて無料全文公開。世界観マーケティング・AI失業・Pre-Meaning・Save→Plan→Impulse。',
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
          color: var(--color-books);
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
