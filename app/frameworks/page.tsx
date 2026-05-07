import type { Metadata } from 'next'
import SectionCard from '@/components/SectionCard'

export const metadata: Metadata = {
  title: 'Frameworks — 世界観設計の理論体系',
  description: '7層モデル・三類型・世界観価値の方程式・文脈継続性・共鳴型経済圏。「また来たい場所」の構造を設計可能にするフレームワーク群。',
}

const frameworks = [
  {
    href: '/frameworks/7layers',
    label: '7 Layers Model',
    labelJa: '7層モデル',
    title: '世界観設計7層モデル',
    description: '原初物語→世界観接触→境界侵入→没入環境→期待増幅→感動体験→伝播帰属。ディズニーのイマジニアリング哲学との対応表付き。',
    accentColor: 'var(--color-frameworks)',
    tags: ['Disney対応', 'Pine & Gilmore', '楠木健接続'],
  },
  {
    href: '/frameworks/three-types',
    label: '3 Types',
    labelJa: '三類型',
    title: '世界観の三類型（A / A\' / B）',
    description: 'Type A：意図的設計型（ディズニー）/ Type A\'：IP活用型（サンリオ）/ Type B：無意識共鳴型（地域人気店）。どれが優れているのではなく、それぞれの文脈で機能する。',
    accentColor: 'var(--color-frameworks)',
    tags: ['ディズニー', 'サンリオ', '那須', '借景'],
  },
  {
    href: '/frameworks/worldview-value',
    label: 'Worldview Value',
    labelJa: '世界観価値',
    title: '世界観価値の方程式',
    description: '世界観価値＝意味的一貫性×感覚的没入×社会的帰属×伝播性。どれか一つが弱いと全体が崩れる掛け算の構造。',
    accentColor: 'var(--color-frameworks)',
    tags: ['方程式', '掛け算構造', '崩壊条件'],
  },
  {
    href: '/frameworks/contextual-continuity',
    label: 'Contextual Continuity',
    labelJa: '文脈継続性',
    title: '文脈継続性（Contextual Continuity）',
    description: 'SNSで見た世界観→地域へ向かう道→駐車場→入口→匂い→音→店員→料理→帰り道→再訪。この「流れ」に矛盾が少ないことが「また帰りたい」を生む。',
    accentColor: 'var(--color-frameworks)',
    tags: ['顧客動線', '矛盾ゼロ', '那須観測'],
  },
  {
    href: '/frameworks/resonance-economy',
    label: 'Resonance Economy',
    labelJa: '共鳴型経済圏',
    title: '共鳴型経済圏（Resonance Economy）',
    description: '個々の店舗が相互に世界観を傷つけず、共鳴し合うことで成立する地域経済構造。地域＝OS、店舗＝アプリケーション。',
    accentColor: 'var(--color-frameworks)',
    tags: ['地域OS', '共鳴', '戦わないマーケティング'],
  },
  {
    href: '/frameworks/three-layers',
    label: '3 Layers',
    labelJa: '世界観三層',
    title: '世界観の三層構造',
    description: '第一層：意味層（なぜ存在するのか）/ 第二層：感覚層（Atmospheric UX）/ 第三層：社会層（誰とそこにいるのか）。三層が一貫して接続されている状態が世界観だ。',
    accentColor: 'var(--color-frameworks)',
    tags: ['意味層', '感覚層', '社会層', 'Böhme接続'],
  },
]

export default function FrameworksPage() {
  return (
    <>
      <div className="fw-hero">
        <div className="fw-hero-inner">
          <div className="fw-label">Frameworks — 理論体系</div>
          <h1 className="fw-title">世界観設計の<br />理論フレームワーク</h1>
          <p className="fw-desc">
            「また来たい場所」の構造を、設計可能にするフレームワーク群。
            ディズニーの設計哲学・Pine & Gilmoreの経験経済論・楠木健の因果論理——
            既存理論を接続しながら、地域の小さなカフェにも使える物差しへと昇華させた。
          </p>
        </div>
      </div>

      <div className="fw-grid-area">
        <div style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}>
          6 Frameworks — 理論一覧
        </div>
        <div className="fw-grid">
          {frameworks.map((fw) => (
            <SectionCard key={fw.href} {...fw} />
          ))}
        </div>

        <div className="fw-theory-note">
          <h3>理論的接続：本フレームワーク群が接続する既存理論</h3>
          <div className="fw-theory-tags">
            {[
              'Pine & Gilmore — Experience Economy (1998)',
              'Walt Disney Imagineering — Mickey\'s Ten Commandments',
              '楠木健 — ストーリーとしての競争戦略',
              'Don Norman — Emotional Design',
              'Gernot Böhme — Atmosphere Theory',
              'Yi-Fu Tuan — Topophilia',
              'Merleau-Ponty — Phenomenology of Perception',
              'Michael Porter — Competitive Strategy',
              'Ray Oldenburg — Third Place Theory',
              'Csikszentmihalyi — Flow Theory',
            ].map((t) => (
              <span key={t} className="fw-theory-tag">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
