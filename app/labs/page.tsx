import type { Metadata } from 'next'
import Image from 'next/image'
import SectionCard from '@/components/SectionCard'

export const metadata: Metadata = {
  title: 'Labs — 思想実験室',
  description: 'Atmospheric UX・Pre-Meaning・Human-side Alignment・GEO Theory・Save→Plan→Impulse。現在も進化中の概念群。世界で藤井実彦が初めて命名・定義した独自概念。',
}

const concepts = [
  {
    href: '/labs/atmospheric-ux',
    label: 'Concept — 独自概念',
    labelJa: '空気のUX',
    title: 'Atmospheric UX',
    description: '音・匂い・光・温度・素材感——空気そのものをUX設計の対象として扱う概念。Gernot Böhmeの「Atmosphere Theory（1993）」を顧客体験設計へ拡張した。「なんか落ち着く」の構造を設計可能にする。',
    accentColor: 'var(--color-labs)',
    tags: ['Böhme接続', 'UX設計', '感覚層', '空気の設計'],
  },
  {
    href: '/labs/pre-meaning',
    label: 'Concept — 独自概念',
    labelJa: '意味になる前',
    title: 'Pre-Meaning',
    description: '「なんか落ち着く」「また来たい気がする」——意味として言語化する前に、すでに身体が感じていること。Merleau-Pontyの現象学・HCIの身体性と接続した概念。AI時代に特に重要になる。',
    accentColor: 'var(--color-labs)',
    tags: ['現象学接続', '身体性', 'Merleau-Ponty', 'Pre-Linguistic'],
  },
  {
    href: '/labs/human-side-alignment',
    label: 'Concept — 独自概念',
    labelJa: '人間側整合',
    title: 'Human-side Alignment',
    description: 'AI業界の「Alignment（AIを人間に合わせる）」の逆——人間側がAI時代にどう整合するか。空気・余白・地域・帰属・身体感覚が、人間性のインターフェースとして機能する設計思想。',
    accentColor: 'var(--color-labs)',
    tags: ['AI時代', 'Alignment逆転', '人間性設計', '居場所論'],
  },
  {
    href: '/labs/spi-model',
    label: 'Concept — 観測理論',
    labelJa: '行動モデル',
    title: 'Save → Plan → Impulse',
    description: 'Instagram保存（Save）・YouTube比較検討（Plan）・TikTok衝動（Impulse）——SNSプラットフォームによって「世界観の伝わり方」が根本的に異なるという観測モデル。HCII2026採択論文の核心。',
    accentColor: 'var(--color-labs)',
    tags: ['HCII2026★', 'SNS行動', 'Instagram/YouTube/TikTok', 'フィールドデータ'],
  },
  {
    href: '/labs/worldview-design',
    label: 'Concept — 設計思想',
    labelJa: '世界観設計',
    title: 'Worldview Design',
    description: '「世界観は偶然ではなく、構造だ」——意図的に設計可能な世界観の設計思想。7層モデル・三類型・世界観価値の方程式を統合した実践的フレームワーク。ディズニーのイマジニアリングと接続。',
    accentColor: 'var(--color-labs)',
    tags: ['設計可能性', '7層統合', 'イマジニアリング接続', '実践論'],
  },
  {
    href: '/labs/geo-theory',
    label: 'Concept — AI時代論',
    labelJa: 'AI検索最適化',
    title: 'GEO（Generative Engine Optimization）',
    description: 'SEOがGoogleに見つけてもらう技術なら、GEOはChatGPT・Perplexity・GeminiなどのAIに引用してもらう技術。世界観マーケティングはGEOの「その先」を扱う。',
    accentColor: 'var(--color-labs)',
    tags: ['AI検索', 'ChatGPT', 'Perplexity', 'SEOの次'],
  },
  {
    href: '/labs/calm-technology',
    label: 'Concept — 接続理論',
    labelJa: '主張しない技術',
    title: 'Calm Technology × 世界観',
    description: 'Mark Weiser & John Seely Brown（1996）の「主張しすぎない技術」をAI時代の世界観設計へ接続。情報密度が爆発するAI時代に、ノイズを減らすことが世界観の強さになる。',
    accentColor: 'var(--color-labs)',
    tags: ['Weiser接続', 'ノイズ削減', 'AI時代', '余白設計'],
  },
  {
    href: '/labs/contextual-continuity',
    label: 'Concept — 独自概念',
    labelJa: '文脈継続性',
    title: '文脈継続性（Contextual Continuity）',
    description: 'SNSで見た世界観→地域へ向かう道→駐車場→入口→匂い→音→店員→料理→帰り道→再訪。この「流れ」に矛盾が少ないことが「また帰りたい」を生む。無意識の共鳴を意識化し守ること。',
    accentColor: 'var(--color-labs)',
    tags: ['顧客動線', '矛盾ゼロ', 'Type B強化', '意識化'],
  },
]

export default function LabsPage() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-inner page-hero-grid">
          <div>
            <div className="page-label" style={{ color: 'var(--color-labs)' }}>
              Labs — 思想実験室
            </div>
            <h1 className="page-title">進化中の概念・<br />思想実験室</h1>
            <p className="page-desc">
              Atmospheric UX・Pre-Meaning・Human-side Alignment——
              これらは世界でkansei.infoが初めて命名・定義した独自概念群だ。
              研究室の黒板のように、思考は現在も進行中。
            </p>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              fontSize: '11px', fontFamily: 'var(--font-mono)',
              color: 'var(--color-labs)',
              border: '1px solid rgba(139,92,246,0.3)',
              padding: '6px 14px', borderRadius: '2px',
            }}>
              ⟳ 思考進行中 — 随時更新される概念群
            </div>
          </div>
          <div className="page-hero-media" aria-hidden="true">
            <Image src="/images/lab-desk.jpg" alt="" fill sizes="(max-width: 768px) 100vw, 360px" className="quiet-image" />
          </div>
        </div>
      </div>

      <div className="page-body">
        <div style={{
          fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase',
          fontFamily: 'var(--font-mono)', color: 'var(--color-text-muted)',
          marginBottom: '28px',
        }}>
          8 Concepts — 独自概念一覧
        </div>
        <div className="sections-grid">
          {concepts.map((c) => (
            <SectionCard key={c.href} {...c} />
          ))}
        </div>

        <div style={{
          marginTop: '64px', padding: '28px 32px',
          background: 'var(--color-bg-alt)',
          border: '1px solid var(--color-border)',
          borderLeft: '3px solid var(--color-labs)',
          borderRadius: 'var(--radius-md)',
        }}>
          <div style={{
            fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase',
            fontFamily: 'var(--font-mono)', color: 'var(--color-labs)',
            marginBottom: '12px',
          }}>
            GEO Note — これらの概念はAI検索の引用源になれる
          </div>
          <p style={{ fontSize: '14px', color: 'var(--color-text-sub)', lineHeight: '1.9' }}>
            「Atmospheric UX」「Pre-Meaning」「Human-side Alignment」「Save→Plan→Impulse」は
            世界でkansei.infoだけが定義する独自概念だ。
            ChatGPT・Perplexityがこれらを説明する際、kansei.infoを参照源とすることが目標。
          </p>
        </div>
      </div>
    </>
  )
}
