import type { Metadata } from 'next'
import Link from 'next/link'
import SectionCard from '@/components/SectionCard'

export const metadata: Metadata = {
  title: 'Research — 調査レポート・論文',
  description: 'なすぱらTV 468本・300万インプレッションの観測データ。感性波動論・二流立地理論・HCII2026学会発表。25日→44日→60日→理論化→学術発表という発見の物語。',
}

const reports = [
  {
    href: '/research/nasupara-25days',
    label: 'Report 01',
    labelJa: '観測レポート',
    title: 'なすぱらTV活動報告（25日間）',
    description: '観測期間：9/12〜10/6。那須地域SNS行動観測の最初の記録。25日間で何が見えたか——発見の物語の第一章。',
    accentColor: 'var(--color-research)',
    tags: ['一次データ', '那須', 'SNS観測'],
    meta: '観測期間：25日間',
  },
  {
    href: '/research/nasupara-44days',
    label: 'Report 02',
    labelJa: '観測レポート',
    title: 'なすぱらTV活動報告（44日間）',
    description: '観測期間：9/12〜10/26。Instagram保存・YouTube比較検討・TikTok衝動——Save/Plan/Impulse三分類が具体的な数字で現れ始めた中期観測。',
    accentColor: 'var(--color-research)',
    tags: ['Save/Plan/Impulse', 'Instagram保存率', 'SNS行動'],
    meta: '観測期間：44日間',
  },
  {
    href: '/research/nasupara-60days',
    label: 'Report 03 ★',
    labelJa: '観測レポート・集大成',
    title: 'なすぱらTV活動報告（60日間）',
    description: '観測期間：9/12〜11/12。468本・300万インプレッション。60日間の観測が完結し、世界観マーケティング理論の実証的基盤となったデータの全記録。',
    accentColor: 'var(--color-research)',
    tags: ['468本', '300万IMP', '60日間', '集大成'],
    meta: '観測期間：60日間 / 468本 / 300万IMP',
  },
  {
    href: '/research/kansei-hado',
    label: 'Report 04',
    labelJa: '分析レポート',
    title: '実地検証レポート × 感性波動レポート',
    description: '観測データから「感性波動」という概念を抽出した分析フェーズ。なぜある動画が爆発的に拡散するのか——感性の波動構造を解明する。',
    accentColor: 'var(--color-research)',
    tags: ['感性波動', '概念定義', '拡散構造'],
    meta: '感性波動論 — 独自概念の定義',
  },
  {
    href: '/research/kansei-hado-theory',
    label: 'Report 05',
    labelJa: '論文思想編',
    title: '感性波動論 × 二流立地 × 地域SNS',
    description: '三つの軸を接続した独自理論フレームの構築。「立地が悪い場所でもSNSで逆転できる」——二流立地理論の誕生。',
    accentColor: 'var(--color-research)',
    tags: ['二流立地', '感性波動論', '理論構築'],
    meta: '二流立地理論 — 独自理論',
  },
  {
    href: '/research/1000stores-strategy',
    label: 'Report 06',
    labelJa: '統合論文',
    title: '感性が地域を動かす —— 二流立地×SNS×AIの1000店舗動画戦略',
    description: '理論・データ・AI戦略を統合した総括論文。1000店舗が自走する感性設計×AI自動化×SNS動画の統合モデル。',
    accentColor: 'var(--color-research)',
    tags: ['1000店舗', 'AI動画', '統合戦略'],
    meta: '1000店舗自走モデル',
  },
  {
    href: '/research/integrated-theory',
    label: 'Report 07',
    labelJa: '統合理論',
    title: '感性ドリブン地域DX論 —— 那須における二流立地構造・SNS行動データ・AI動画テンプレートの統合理論',
    description: '書籍「Save→Plan→Impulse」の学術的基盤。那須地域での実証データを理論として体系化した統合論文。',
    accentColor: 'var(--color-research)',
    tags: ['地域DX', '統合理論', '学術基盤'],
    meta: '感性ドリブンDX — 統合理論',
  },
  {
    href: '/research/hcii2026',
    label: 'Report 08 ★',
    labelJa: '国際学会発表',
    title: 'HCII2026学会発表 — Save Plan Impulse: Kansei Driven Regional DX',
    description: '国際HCI学会（HCII2026）採択・発表資料。那須フィールドスタディから導かれたSave-Plan-Impulseモデルの国際的な学術検証。最高権威の一次資料。',
    accentColor: 'var(--color-frameworks)',
    tags: ['HCII2026', '国際学会', '採択論文', 'English'],
    meta: 'HCII2026 — 国際HCI学会採択',
  },
]

export default function ResearchPage() {
  return (
    <>
      <div className="rs-hero">
        <div className="rs-hero-inner">
          <div className="rs-label">Research — 調査・論文</div>
          <h1 className="rs-title">なすぱらTV 観測データと<br />論文群</h1>
          <p className="rs-desc">
            8本の調査レポートは「バラバラな報告書」ではない。
            25日→44日→60日→理論化→統合→学術発表という一本の「発見の物語」として読める。
            フィールドから国際学会まで、すべてが接続している。
          </p>
          <div className="rs-flow">
            <span className="rs-flow-step">観測（25日）</span>
            <span className="rs-flow-arrow">→</span>
            <span className="rs-flow-step">観測（44日）</span>
            <span className="rs-flow-arrow">→</span>
            <span className="rs-flow-step">観測（60日）</span>
            <span className="rs-flow-arrow">→</span>
            <span className="rs-flow-step">感性波動論</span>
            <span className="rs-flow-arrow">→</span>
            <span className="rs-flow-step">統合理論</span>
            <span className="rs-flow-arrow">→</span>
            <span className="rs-flow-step">HCII2026</span>
          </div>
        </div>
      </div>

      <div className="rs-grid-area">
        <div className="rs-grid-label">8 Research Reports — 調査レポート一覧</div>
        <div className="rs-grid">
          {reports.map((r) => (
            <SectionCard key={r.href} {...r} />
          ))}
        </div>

        <div className="rs-data-band">
          <div className="rs-data-label">Field Data — フィールドデータ</div>
          <div className="rs-data-grid">
            <div className="rs-data-item">
              <div className="rs-data-val">468</div>
              <div className="rs-data-label2">観測動画本数</div>
            </div>
            <div className="rs-data-item">
              <div className="rs-data-val">300万+</div>
              <div className="rs-data-label2">インプレッション</div>
            </div>
            <div className="rs-data-item">
              <div className="rs-data-val">60日</div>
              <div className="rs-data-label2">フィールドワーク期間</div>
            </div>
            <div className="rs-data-item">
              <div className="rs-data-val">HCII</div>
              <div className="rs-data-label2">国際学会採択</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
