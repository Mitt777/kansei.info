import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import SectionCard from '@/components/SectionCard'

export const metadata: Metadata = {
  title: 'kansei.info — AI時代の知識OS',
  description:
    '世界観マーケティング・Atmospheric UX・Pre-Meaning・HCI研究・フィールドワーク・書籍を統合した知識空間。藤井実彦による「AI時代の知識OS」。',
}

const sections = [
  {
    href: '/frameworks',
    label: 'Frameworks',
    labelJa: '理論体系',
    title: '世界観設計の理論フレームワーク',
    description:
      '7層モデル・三類型・文脈継続性・共鳴型経済圏。「また来たい場所」の構造を設計可能にするフレームワーク群。',
    accentColor: 'var(--color-frameworks)',
    tags: ['7 Layers', '3 Types', 'Worldview Value'],
  },
  {
    href: '/labs',
    label: 'Labs',
    labelJa: '思想実験室',
    title: '進化中の概念・実験的思想',
    description:
      'Atmospheric UX・Pre-Meaning・Human-side Alignment・GEO Theory。現在も思考が進行中の概念群。',
    accentColor: 'var(--color-labs)',
    tags: ['Atmospheric UX', 'Pre-Meaning', 'Human-side Alignment'],
  },
  {
    href: '/research',
    label: 'Research',
    labelJa: '調査・論文',
    title: 'なすぱらTV 観測データと論文群',
    description:
      '25日・44日・60日の段階的観測。感性波動論・二流立地理論・HCII2026学会発表。468本・300万インプレッションの一次データ。',
    accentColor: 'var(--color-research)',
    tags: ['HCII2026', '468本', '300万IMP', 'SPI Model'],
  },
  {
    href: '/fieldwork',
    label: 'Fieldwork',
    labelJa: '感性民族誌',
    title: '那須フィールドワークの記録',
    description:
      'SHOZO CAFE・草津温泉・ペニーレイン・Franklin\'s Cafe。現場で観測した世界観の生成と崩壊のプロセス。',
    accentColor: 'var(--color-fieldwork)',
    tags: ['那須', '7層分析', 'SHOZO', '草津温泉'],
  },
  {
    href: '/books',
    label: 'Books',
    labelJa: '著作全文',
    title: '著作・調査レポートの全文公開',
    description:
      '日本語6冊・英語3冊・調査レポート8本。すべて無料全文公開。世界観マーケティング・AI失業・Pre-Meaning・Save→Plan→Impulse。',
    accentColor: 'var(--color-books)',
    tags: ['全文公開', '9冊', 'EN / JP'],
  },
  {
    href: '/en',
    label: 'English',
    labelJa: '国際知識空間',
    title: 'International Knowledge Space',
    description:
      'Sekaikan Marketing · Atmospheric UX · Pre-Meaning · Save-Plan-Impulse. English books and HCII research available.',
    accentColor: 'var(--color-en)',
    tags: ['HCII2026', 'Kansei Design', 'English Books'],
  },
]

export default function HomePage() {
  return (
    <>

      {/* ── HERO ── */}
      <section className="hero">
        <div>
          <div className="hero-label">Knowledge OS — kansei.info</div>
          <h1 className="hero-title">
            人間は、<strong>どこで</strong><br />
            呼吸するのか。
          </h1>
          <p className="hero-subtitle">
            世界観マーケティング・Atmospheric UX・Pre-Meaning・HCI研究・フィールドワーク・書籍。
            藤井実彦による「AI時代の知識OS」。ディズニーも那須の小さなカフェも使える、世界観設計の物差し。
          </p>
          <div className="hero-cta-row">
            <Link href="/manifesto" className="btn-primary">
              思想を読む →
            </Link>
            <Link href="/frameworks" className="btn-secondary">
              7層モデルを見る
            </Link>
            <Link href="/books" className="btn-secondary">
              書籍を無料で読む
            </Link>
          </div>
          <div className="hero-meta">
            <div className="hero-meta-item">
              <span className="hero-meta-val">468</span>
              <span className="hero-meta-label">観測動画本数</span>
            </div>
            <div className="hero-meta-item">
              <span className="hero-meta-val">300万+</span>
              <span className="hero-meta-label">インプレッション</span>
            </div>
            <div className="hero-meta-item">
              <span className="hero-meta-val">9冊</span>
              <span className="hero-meta-label">著書（日英）</span>
            </div>
            <div className="hero-meta-item">
              <span className="hero-meta-val">HCII</span>
              <span className="hero-meta-label">国際学会採択</span>
            </div>
          </div>
        </div>
        <div className="hero-image-panel" aria-hidden="true">
          <Image
            src="/images/hero-lab.jpg"
            alt=""
            fill
            priority
            sizes="(max-width: 768px) 100vw, 420px"
            className="quiet-image"
          />
        </div>
      </section>

      {/* ── MANIFESTO BAND ── */}
      <div className="manifesto-band">
        <div className="manifesto-band-inner">
          <div className="manifesto-band-text">
            <h2>「また来たい場所」には、構造がある。</h2>
            <p>
              ディズニーランドの経営者も、那須の小さなカフェの店主も、動物園のスタッフも、温泉宿のおかみも——
              全員が同じ問いを持っている。この知識空間は、その問いへの共通の物差しを提供する。
            </p>
          </div>
          <Link href="/manifesto" className="btn-primary">
            Manifesto を読む →
          </Link>
        </div>
      </div>

      {/* ── SECTIONS ── */}
      <section className="sections-area">
        <div className="sections-label">Knowledge Domains — 知識の領域</div>
        <div className="sections-grid">
          {sections.map((section) => (
            <SectionCard key={section.href} {...section} />
          ))}
        </div>
      </section>

      {/* ── DIAGNOSIS BAND ── */}
      <div style={{ borderTop: '1px solid var(--color-border)', background: 'var(--color-bg-alt)' }}>
        <div className="diagnosis-band">
          <div>
            <p style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'var(--color-gold)', fontFamily: 'var(--font-mono)', marginBottom: '12px' }}>
              SELF DIAGNOSIS
            </p>
            <h2>あなたの場所の<br />「世界観力」を測る</h2>
            <p>
              7つの層をスライダーで自己評価するだけ。
              弱い層が可視化され、改善の優先順位がわかる。
              ディズニーも地域の人気カフェも、同じ物差しで測れる。
            </p>
            <Link href="/diagnosis" className="btn-primary">
              無料で診断する →
            </Link>
          </div>
          <div className="diagnosis-visual">
            {[
              { label: '①原初物語', pct: 85 },
              { label: '②世界観接触', pct: 70 },
              { label: '③境界侵入', pct: 60 },
              { label: '④没入環境', pct: 90 },
              { label: '⑤期待増幅', pct: 55 },
              { label: '⑥感動体験', pct: 80 },
              { label: '⑦伝播帰属', pct: 65 },
            ].map((row) => (
              <div key={row.label} className="dv-row">
                <span className="dv-label">{row.label}</span>
                <div className="dv-bar">
                  <div className="dv-fill" style={{ width: `${row.pct}%` }} />
                </div>
                <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--color-text-muted)', minWidth: '32px' }}>
                  {row.pct}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
