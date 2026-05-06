import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact — お問い合わせ',
  description: '世界観マーケティングに関するご相談・講演依頼・取材・共同研究のお問い合わせ。',
}

export default function ContactPage() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-inner">
          <div className="page-label" style={{ color: 'var(--color-gold)' }}>
            Contact — お問い合わせ
          </div>
          <h1 className="page-title">相談・依頼・連携</h1>
          <p className="page-desc">
            世界観マーケティングの導入支援・講演・取材・共同研究など、
            お気軽にご連絡ください。
          </p>
        </div>
      </div>

      <div className="page-body" style={{ maxWidth: '720px' }}>

        {/* 相談メニュー */}
        <div style={{ marginBottom: '48px' }}>
          <div style={{
            fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase',
            fontFamily: 'var(--font-mono)', color: 'var(--color-text-muted)', marginBottom: '20px',
          }}>
            What We Can Help
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {[
              { icon: '🏪', title: '店舗・施設の世界観診断', desc: '7層モデルで現状を分析し、改善の優先順位を提示します。' },
              { icon: '🎤', title: '講演・研修', desc: '世界観マーケティング・AI時代の感性設計・地域DXをテーマとした講演。' },
              { icon: '🌏', title: '地域・観光地のブランディング', desc: '共鳴型経済圏の設計と地域OS戦略の策定をサポートします。' },
              { icon: '📝', title: '取材・メディア出演', desc: '世界観マーケティング・AI×感性・地域DXに関する取材対応。' },
              { icon: '🎓', title: '共同研究・学術連携', desc: 'HCI・UX・地域研究者との共同研究・論文執筆の連携。' },
              { icon: '🌐', title: 'English Inquiry', desc: 'International collaboration, research partnership, and speaking engagements.' },
            ].map((item) => (
              <div key={item.title} style={{
                display: 'flex', gap: '16px', padding: '18px 20px',
                border: '1px solid var(--color-border)',
                background: 'var(--color-surface)',
              }}>
                <span style={{ fontSize: '20px', flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: '500', marginBottom: '4px' }}>{item.title}</div>
                  <div style={{ fontSize: '13px', color: 'var(--color-text-sub)', lineHeight: '1.65' }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 連絡先 */}
        <div style={{
          padding: '32px', background: 'var(--color-bg-alt)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-md)', marginBottom: '40px',
        }}>
          <div style={{
            fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase',
            fontFamily: 'var(--font-mono)', color: 'var(--color-gold)', marginBottom: '20px',
          }}>
            Contact
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ fontSize: '14px', color: 'var(--color-text-sub)', lineHeight: '1.7' }}>
              <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-text-muted)', fontSize: '11px', display: 'block', marginBottom: '4px' }}>Web</span>
              <a href="https://xbrains.jp" target="_blank" rel="noopener noreferrer"
                style={{ color: 'var(--color-gold)' }}>xbrains.jp →</a>
            </div>
            <div style={{ fontSize: '14px', color: 'var(--color-text-sub)', lineHeight: '1.7' }}>
              <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-text-muted)', fontSize: '11px', display: 'block', marginBottom: '4px' }}>YouTube</span>
              なすぱらTV — 地域観測型動画チャンネル
            </div>
            <div style={{ fontSize: '14px', color: 'var(--color-text-sub)', lineHeight: '1.7' }}>
              <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-text-muted)', fontSize: '11px', display: 'block', marginBottom: '4px' }}>Author</span>
              藤井実彦 / Mitsuhiko Fujii
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Link href="/about" className="btn-secondary">著者プロフィールを見る</Link>
          <Link href="/diagnosis" className="btn-secondary">7層診断を試す</Link>
        </div>
      </div>
    </>
  )
}
