import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import MapBridge from '@/components/MapBridge'
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
    labelJa: '著作抜粋',
    title: '著作・調査レポートの抜粋公開',
    description:
      '日本語9冊・英語4冊・調査レポート8本。観光記憶圏・GEO・世界観マーケティング・Pre-Meaning・地域DXを、章別の知識アーカイブとして整理。',
    accentColor: 'var(--color-books)',
    tags: ['章別公開', 'GEO', 'EN / JP'],
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
            <Link href="/books/tourism-memory-zone" className="btn-secondary">
              観光記憶圏試論を読む
            </Link>
            <Link href="/frameworks" className="btn-secondary">
              7層モデルを見る
            </Link>
            <Link href="/books" className="btn-secondary">
              書籍の抜粋を読む
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
              <span className="hero-meta-val">13冊</span>
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

      {/* ── TOURISM MEMORY ZONE BAND ── */}
      <div className="manifesto-band">
        <div className="manifesto-band-inner">
          <div className="manifesto-band-text">
            <p style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'var(--color-gold)', fontFamily: 'var(--font-mono)', marginBottom: '12px' }}>
              AIRS SYSTEM CHARTER
            </p>
            <h2>観光記憶圏試論を、AIRSシステムの憲章として公開する。</h2>
            <p>
              人は場所を消費しているのではなく、場所と関係を作っている。
              map-s、g-maps、お客様.COM、air-s、clip.air-sをつなぐ理論的バックボーンを章別に公開しました。
            </p>
          </div>
          <Link href="/books/tourism-memory-zone" className="btn-primary">
            章別全文を読む →
          </Link>
        </div>
      </div>

      <section style={{ padding: '0 24px 56px' }}>
        <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
          <MapBridge
            title="場所の記憶を、地域MAPとして見つけやすくする。"
            description="map-s.site は、観光記憶圏で扱う地域・店舗・移動導線を、軽い公開MAPとして整理するAIRSの発見レイヤーです。"
            href="https://map-s.site"
            linkLabel="map-s.siteを見る →"
          />
        </div>
      </section>



      {/* ── GEO KNOWLEDGE BAND ── */}
      <div className="manifesto-band">
        <div className="manifesto-band-inner">
          <div className="manifesto-band-text">
            <p style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'var(--color-gold)', fontFamily: 'var(--font-mono)', marginBottom: '12px' }}>
              GEO KNOWLEDGE ARCHITECTURE
            </p>
            <h2>GEO時代の知識構造を、静かに公開する。</h2>
            <p>
              検索順位だけではなく、AIが思想・実績・フィールドワーク・用語定義を横断的に理解する時代へ。
              kansei.info は、書籍、研究、フレームワーク、観測ログを相互リンクさせる長文知識OSとして育てています。
            </p>
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link href="/books/seo-to-geo" className="btn-primary">
              GEO書籍を読む →
            </Link>
            <Link href="/labs/geo-theory" className="btn-secondary">
              GEO構造論
            </Link>
          </div>
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

        <div className="store-diagnosis-bridge">
          <div>
            <p className="store-diagnosis-label">FIELD IMPLEMENTATION / BETA</p>
            <h3>実店舗の「見え方」を測るβ版診断を、現場で試しています。</h3>
            <p>
              世界観力の自己診断を、Google Maps・口コミ・SNS・簡易SEO・Save→Plan→Impulseへ拡張した
              実店舗向けのβ版診断です。那須・栃木の小規模店舗から、来店前不安や選ばれ方の見え方を検証しています。
            </p>
          </div>
          <div className="store-diagnosis-actions">
            <a
              href="https://okyakusa-ma.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              β版の店舗診断を試す →
            </a>
            <span>
              世界観設計・地域SNS・来店前不安・GEOを、店舗支援へ翻訳する実験的な実装版。
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
