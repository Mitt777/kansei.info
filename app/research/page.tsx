import type { Metadata } from 'next'
import Image from 'next/image'
import RelatedKnowledge from '@/components/RelatedKnowledge'
import SectionCard from '@/components/SectionCard'

export const metadata: Metadata = {
  title: 'Research — 調査・論文',
  description: '25日・44日・60日の段階的観測。感性波動論・二流立地理論・HCII2026学会発表。468本・300万インプレッションの一次データ。',
}

const researchItems = [
  {
    href: '/research/hcii2026',
    label: 'Academic Paper',
    labelJa: 'HCI',
    title: 'HCII 2026 Accepted Paper',
    description:
      'Save → Plan → Impulse: A Cross-Platform Sequential Model of Short-Form Video Influence on Tourist Mobility in Car-Centric Rural Regions',
    tags: ['SPI Model', 'Fieldwork', 'Nasupara TV'],
    meta: 'Academic Paper / HCI',
  },
  {
    href: '/research/nasupara-25days',
    label: 'Field Report',
    labelJa: '25 Days',
    title: 'なすぱらTV活動報告 25日間',
    description: '9/12〜10/6 の初期観測レポート',
    tags: ['Fieldwork', 'SNS Observation'],
    meta: 'Initial observation report',
  },
  {
    href: '/research/nasupara-44days',
    label: 'Field Report',
    labelJa: '44 Days',
    title: 'なすぱらTV活動報告 44日間',
    description: '304本投稿時点のプラットフォーム差分観測',
    tags: ['SPI', 'SNS Platform Behavior'],
    meta: '304 posts observation',
  },
  {
    href: '/research/nasupara-60days',
    label: 'Field Report',
    labelJa: '60 Days',
    title: 'なすぱらTV活動報告 60日間',
    description: '468本投稿時点のSave→Plan→Impulse原型',
    tags: ['SPI Model', 'Fieldwork'],
    meta: '468 posts observation',
  },
  {
    href: '/research/kansei-hado',
    label: 'Research Report',
    labelJa: '実地検証',
    title: 'なすぱらTV 実地検証レポート×感性波動レポート',
    description: '那須地域での観測と現場検証を、感性波動の仮説として整理したレポート。',
    tags: ['Kansei Hado', 'Field Validation'],
  },
  {
    href: '/research/kansei-hado-theory',
    label: 'Theory Note',
    labelJa: '思想編',
    title: 'なすぱらTV 論文思想編：感性波動論 × 二流立地 × 地域SNS',
    description: '地域SNS観測から、感性波動論と二流立地構造を接続する思想ノート。',
    tags: ['Kansei Hado', '二流立地', '地域SNS'],
  },
  {
    href: '/research/1000stores-strategy',
    label: 'Strategy Report',
    labelJa: '1000店舗',
    title: '感性が地域を動かす —— 二流立地×SNS×AIの1000店舗動画戦略',
    description: 'AI動画テンプレートと地域SNSを用いて、地方店舗群を動かすための戦略レポート。',
    tags: ['AI Video', 'Local Stores', 'SNS Strategy'],
  },
  {
    href: '/research/integrated-theory',
    label: 'Integrated Theory',
    labelJa: '地域DX',
    title: '感性ドリブン地域DX論',
    description:
      '那須地域における二流立地構造・SNS行動データ・AI動画テンプレートの統合理論。',
    tags: ['Regional DX', 'SNS Data', 'AI Template'],
  },
]

export default function Page() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-inner page-hero-grid">
          <div>
            <div className="page-label" style={{ color: 'var(--color-research)' }}>
              Research — 調査・論文
            </div>
            <h1 className="page-title">調査・論文・フィールドレポートの知識アーカイブ</h1>
            <p className="page-desc">
              なすぱらTVの実地観測、HCII2026採択論文、感性波動論、二流立地理論。
              地域の空気がどのように保存・比較・移動へ変わるのかを、一次データから読み解く研究記録。
            </p>
            <div className="archive-stats">
              <span>8 Records</span>
              <span>468 Posts</span>
              <span>HCI / Fieldwork / Regional DX</span>
            </div>
          </div>
          <div className="page-hero-media" aria-hidden="true">
            <Image src="/images/fieldwork-note.jpg" alt="" fill sizes="(max-width: 768px) 100vw, 360px" className="quiet-image" />
          </div>
        </div>
      </div>

      <div className="page-body">
        <div className="archive-heading">
          <div>
            <div className="archive-label">Research Index</div>
            <h2>観測から理論へ</h2>
          </div>
          <p>
            ここに並ぶレポートは、単発の記事ではなく、那須地域での観測からSPIモデルと地域DX論へ至る連続した知識ログです。
          </p>
        </div>

        <div className="sections-grid">
          {researchItems.map((item) => (
            <SectionCard
              key={item.href}
              {...item}
              accentColor="var(--color-research)"
            />
          ))}
        </div>

        <div className="archive-note">
          <div className="archive-label">Archive Structure</div>
          <p>
            25日・44日・60日の段階的な観測ログを基礎に、SNS行動差分、二流立地、感性波動、AI動画テンプレートを統合していく構成です。
            研究ページは、フィールドワークとフレームワークの中間にある実証レイヤーとして機能します。
          </p>
        </div>

        <RelatedKnowledge
          heading="関連Framework / RelatedKnowledge"
          items={[
            { href: '/labs/spi-model', type: 'lab', title: 'Save → Plan → Impulse', description: 'SNSごとの行動差分モデル' },
            { href: '/fieldwork', type: 'fieldwork', title: 'Fieldwork', description: '現場で観測した世界観の生成と崩壊' },
            { href: '/frameworks/7layers', type: 'framework', title: '世界観設計7層モデル', description: 'また来たくなる体験の因果構造' },
            { href: '/books/spi-regional-dx', type: 'book', title: 'Save → Plan → Impulse 感性ドリブン地域DX論', description: '観測ノートとしての書籍' },
          ]}
        />
      </div>
    </>
  )
}
