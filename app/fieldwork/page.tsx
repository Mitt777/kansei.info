import type { Metadata } from 'next'
import SectionCard from '@/components/SectionCard'

export const metadata: Metadata = {
  title: 'Fieldwork — 感性民族誌',
  description: '那須・草津・ペニーレイン・SHOZO CAFE・Franklin’s Cafe。現場で観測した世界観の生成と崩壊のプロセス。7層モデルによるスポット別分析。',
}

const spots = [
  {
    href: '/fieldwork/shozo',
    label: 'Type B — 無意識共鳴型',
    labelJa: '那須黒磯',
    title: 'SHOZO CAFE',
    description: '「僕の趣味はまちづくりなんですよ」——那須黒磯を街ごと変えたカフェ。静けさ・木・光・余白。地域OSの核として機能する世界観の最高峰。',
    accentColor: 'var(--color-fieldwork)',
    tags: ['Type B', '地域OS核', '共鳴型経済圈', 'まちづくり'],
    meta: '那須黒磯 / 1998年創業',
  },
  {
    href: '/fieldwork/kusatsu',
    label: 'Type B — 地域全体型',
    labelJa: '草津温泉街',
    title: '草津温泉街',
    description: '湯畏を中心に半径500mに凝縮された世界観。街全体が一つのテーマパークとして機能する。那須との比較で「地域全体が世界観になる」構造が鮮明になる。',
    accentColor: 'var(--color-fieldwork)',
    tags: ['地域全体型', '湯畏', '那須との比較', '街OS'],
    meta: '群馬県草津町 / 温泉地ブランド',
  },
  {
    href: '/fieldwork/pennyln',
    label: 'Type A’ — IP活用型',
    labelJa: '那須高原',
    title: 'ペニーレイン',
    description: 'ビートルズへの感情というIPを軸に構築された世界観。駐車場から音楽が聞こえる——「境界侵入」が最も早く始まる店。音という感覚層の設計が際立っている。',
    accentColor: 'var(--color-fieldwork)',
    tags: ['音の設計', 'Beatles IP', '境界侵入★', '那須高原'],
    meta: '那須高原 / ビートルズIPパン屋',
  },
  {
    href: '/fieldwork/franklins',
    label: 'Type B — 僻地型',
    labelJa: '那須 隐れ家',
    title: "Franklin’s Cafe",
    description: 'アクセスのしにくさが世界観の一部。細い道を進む不安が、到着した瞬間の安堵と喜びを倍にする。「期待増幅」が地理的に設計されている稀有な事例。',
    accentColor: 'var(--color-fieldwork)',
    tags: ['期待増幅★', 'アクセス設計', '僻地型', '隐れ家'],
    meta: '那須高原 / 隐れ家カフェ',
  },
  {
    href: '/fieldwork/nasu-animal',
    label: 'Type A — 意図的設計型',
    labelJa: '那須高原',
    title: '那須どうぶつ王国',
    description: '那須の空を借景したバードショー——空そのものをショーの舞台装置にした唯一の事例。高原の広大な自然と動物の共存という世界観が実現されている。',
    accentColor: 'var(--color-fieldwork)',
    tags: ['空を借景', 'バードショー', 'Type A', '自然設計'],
    meta: '那須高原 / 動物テーマパーク',
  },
  {
    href: '/fieldwork/spajam',
    label: 'Type A — 都市型',
    labelJa: '東久留米',
    title: 'スパジアム・ジャポン',
    description: '那須の静けさとは真逆——賦かさが価値になる都市型スーパー錢湯。「静けさ」だけが世界観ではないという発見を得た場所。',
    accentColor: 'var(--color-fieldwork)',
    tags: ['都市型', '賦かさの価値', '対比事例', '東久留米'],
    meta: '東久留米市 / スーパー錢湯',
  },
  {
    href: '/fieldwork/ashino-onsen',
    label: 'Type B — 旅館型',
    labelJa: '那須 芦野',
    title: '芦野温泉旅館',
    description: '施設への道を進むにつれ木々の密度が増し、車内の会話が自然に静かになっていく——到着前に世界観が始まる。「文脈継続性」を最も深く感じた場所。',
    accentColor: 'var(--color-fieldwork)',
    tags: ['文脈継続性★', '到着前から始まる', '老舗旅館', '那須'],
    meta: '那須町芦野 / 老舗温泉旅館',
  },
  {
    href: '/fieldwork/bakery-my',
    label: 'Type B — 日常型',
    labelJa: '東久留米',
    title: 'ベーカリーハウス・マイ（MY）',
    description: '観光地でも、SNS映えスポットでもない。地元・東久留米の日常のパン屋。「世界観は観光地だけの話ではない」という命題を証明する事例。',
    accentColor: 'var(--color-fieldwork)',
    tags: ['日常型', '地域密着', 'Type B', '東久留米'],
    meta: '東久留米市 / 地域密着ベーカリー',
  },
  {
    href: '/fieldwork/ramen-takahashi',
    label: 'Type B — ラーメン',
    labelJa: '那須塔原',
    title: 'ラーメンたかはし',
    description: '店主が常連客の名前を呼んでいた——その一言で世界観がわかった。「社会層（第三層）」の強さが世界観を形成するかを体験した場所。',
    accentColor: 'var(--color-fieldwork)',
    tags: ['社会層★', '常連の名前', '地域密着', '那須塔原'],
    meta: '那須塔原市 / 地域人気ラーメン店',
  },
  {
    href: '/fieldwork/disney',
    label: 'Type A — 意図的設計型',
    labelJa: '千葉 舞浜',
    title: '東京ディズニーランド',
    description: '世界観設計の頂点。Weenie理論・Art of the Show・Plussing——7層モデルのすべてがイマジニアリング哲学と接続している。比較基準点として最重要なスポット。',
    accentColor: 'var(--color-frameworks)',
    tags: ['Type A★', 'Weenie理論', '7層完全対応', 'イマジニアリング'],
    meta: '千葉県浦安市 / 1983年開園',
  },
  {
    href: '/fieldwork/sanrio',
    label: 'Type A’ — IP活用型',
    labelJa: '東京 多摩',
    title: 'サンリオピューロランド',
    description: '「かわいい」というPre-Meaningが世界観の核。ディズニーが「物語」を所有するのに対し、サンリオは「感情的感情」を増幅させる。IP活用型世界観の典型事例。',
    accentColor: 'var(--color-labs)',
    tags: ["Type A’", 'Pre-Meaning★', 'IP活用', 'かわいい'],
    meta: '東京都多摩市 / 1990年開園',
  },
]

export default function FieldworkPage() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-inner">
          <div className="page-label" style={{ color: 'var(--color-fieldwork)' }}>
            Fieldwork — 感性民族誌
          </div>
          <h1 className="page-title">現場で観測した<br />世界観の生成と崩壊</h1>
          <p className="page-desc">
            那須・草津・ペニーレイン・SHOZO CAFE・Franklin&#39;s Cafe・ディズニー——
            実際に診れ、空気を感じ、7層モデルで構造化した現場記録。
          </p>
        </div>
      </div>
      <div className="page-body">
        <div className="sections-grid">
          {spots.map((spot) => (
            <SectionCard key={spot.href} {...spot} />
          ))}
        </div>
      </div>
    </>
  )
}
