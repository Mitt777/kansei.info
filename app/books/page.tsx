import type { Metadata } from 'next'
import SectionCard from '@/components/SectionCard'
import PracticeBridge from '@/components/PracticeBridge'

export const metadata: Metadata = {
  title: 'Books — 著作抜粋公開',
  description: '日本語9冊・英語4冊・調査レポート8本。一部を無料公開。観光記憶圏・世界観マーケティング・AI失業・Pre-Meaning・Save→Plan→Impulse。藤井実彦の著作一覧。',
}

const jpBooks = [
  {
    href: "/books/tourism-memory-zone",
    label: "AIRS / Tourism Memory",
    labelJa: "観光記憶圏試論",
    title: "観光記憶圏試論",
    description:
      "AI時代に、人はなぜその場所を忘れないのか。那須での二年間・900本超の動画制作・100店舗超のフィールドワークから、AIRSシステムの理論的バックボーンを整理する試論。",
    meta: "章別全文公開 / Kindle出版済",
    tags: ["AIRS", "観光記憶圏", "場所の記憶", "那須"],
  },
  {
    href: "/books/ai-sns-video",
    label: "SNS Video / AI Era",
    labelJa: "地域店舗SNS動画",
    title: "AI時代のバズらないSNS動画基礎講座",
    description:
      "小さなお店が、本来つながるべきお客様と出会う方法。なすぱらTVの900本超の実践、Save → Plan → Impulse、SEO→MEO→GEOをつなぐSNS動画の知識アーカイブ。",
    meta: "章別全文公開 / 日本語",
    tags: ["SNS動画", "Save/Plan/Impulse", "GEO", "地域店舗"],
  },
  {
    href: "/books/seo-to-geo",
    label: "GEO / AI Search",
    labelJa: "AI時代のWeb思想",
    title: "SEOの終わり、GEOの始まり",
    description:
      "検索順位の時代から、AIに理解される時代へ。SEO史、Google Maps、口コミ、SNS、生成AI推薦をつなぐGEO知識アーカイブ。",
    meta: "章別全文公開 / 日本語",
    tags: ["GEO", "知識OS", "AI検索", "実体と情報の一致"],
  },
  {
    href: '/books/sekaikan',
    label: '新刊 2025',
    labelJa: '世界観マーケティング',
    title: '世界観マーケティングと顧客体験の方程式',
    description: '「また来たい」の構造——ディズニーも那須の小さなカフェも使える、AI時代の世界観設計の物差し。7層モデル・三類型・世界観価値の方程式を体系化。',
    accentColor: 'var(--color-gold)',
    tags: ['7層モデル', '三類型', '世界観価値', 'ディズニー対応'],
    meta: '章別抜粋公開 / 日本語',
  },
  {
    href: '/books/spi-regional-dx',
    label: '2024',
    labelJa: '感性ドリブン地域DX論',
    title: 'Save → Plan → Impulse 感性ドリブン地域DX論',
    description: '那須フィールドスタディからの行動観測ノート。Instagram保存・YouTube比較検討・TikTok衝動——SNS行動の三分類を実証データで解明。',
    accentColor: 'var(--color-books)',
    tags: ['Save/Plan/Impulse', '那須', 'SNS行動', 'フィールドワーク'],
    meta: '抜粋公開 / ネクストドアー出版',
  },
  {
    href: '/books/pre-meaning-theory',
    label: '2024',
    labelJa: 'Pre-Meaning概論',
    title: 'AI時代のPre-Meaning概論',
    description: '意味の前で、人は立ち止まってきた。「なんか落ち着く」「また来たい気がする」——意味として言語化する前に身体が先に感じていることの哲学的・実践的考察。',
    accentColor: 'var(--color-books)',
    tags: ['Pre-Meaning', '現象学', 'Merleau-Ponty接続', 'AI時代'],
    meta: '抜粋公開 / ネクストドアー出版',
  },
  {
    href: '/books/ai-shitsugyo-2026',
    label: '2024',
    labelJa: 'AI失業',
    title: 'AI失業2026',
    description: '日米AIリストラ新潮流。AIによって失われる仕事と、感性・世界観という人間固有の価値の逆説的な上昇を論じる。',
    accentColor: 'var(--color-books)',
    tags: ['AI失業', '日米比較', 'リストラ', '2026'],
    meta: '抜粋公開 / 日本語',
  },
  {
    href: '/books/ai-creator',
    label: '2024',
    labelJa: 'AI失業 クリエイター編',
    title: 'AI失業2026 クリエイターフリーランス編',
    description: '下請け消滅とソロプレナー革命。デザイナー・ライター・動画クリエイターが感性設計で生き残る道を論じる。',
    accentColor: 'var(--color-books)',
    tags: ['フリーランス', 'ソロプレナー', 'クリエイター', 'AI'],
    meta: '抜粋公開 / 日本語',
  },
  {
    href: '/books/ai-local',
    label: '2024',
    labelJa: 'AI失業 地方店舗編',
    title: 'AI失業2026 一次産業・地方店舗復活編',
    description: 'AIが、個人を"企業"に変える時代。地方・農業・地域店舗がAIを活用して競争優位を築く戦略を論じる。',
    accentColor: 'var(--color-books)',
    tags: ['地方', '一次産業', 'AI活用', '個人企業化'],
    meta: '抜粋公開 / 日本語',
  },
]

const enBooks = [
  {
    href: '/en/where-humans-breathe',
    label: 'English 2026',
    labelJa: 'Atmosphere / Experience',
    title: 'Where Humans Breathe',
    description: 'Atmosphere, Experience, and Return Motivation in the AI Era. A quiet English section for the new Kindle book and its conceptual archive.',
    accentColor: 'var(--color-en)',
    tags: ['English', 'Atmospheric UX', 'Return Motivation', 'AI Era'],
    meta: 'Kindle button ready / Link coming soon',
  },
  {
    href: '/en/books/spi-regional-dx',
    label: 'English 2024',
    labelJa: 'Kansei Driven Regional DX',
    title: 'Save-Plan-Impulse: Kansei Driven Regional DX',
    description: 'Action Observation Notes from the Nasu Field Study. The English academic edition of the SNS behavior observation research. Foundation for HCII2026 presentation.',
    accentColor: 'var(--color-en)',
    tags: ['English', 'HCII2026', 'Kansei', 'Regional DX'],
    meta: 'Excerpt / English Edition',
  },
  {
    href: '/en/books/eternal-millimeter-short',
    label: 'English 2024',
    labelJa: 'Pre-Meaning Fable',
    title: 'The Eternal Millimeter — A Condensed Pre-Meaning Fable',
    description: 'A short philosophical fable exploring Pre-Meaning — the moment before meaning, when the body already knows. Condensed edition for international readers.',
    accentColor: 'var(--color-en)',
    tags: ['English', 'Pre-Meaning', 'Philosophy', 'Short Edition'],
    meta: 'Excerpt / English Edition',
  },
  {
    href: '/en/books/eternal-millimeter-full',
    label: 'English 2024',
    labelJa: 'Pre-Meaning Fable Full',
    title: 'The Eternal Millimeter — A Full-Density Record of a Pre-Meaning Fable',
    description: 'The complete edition of the Pre-Meaning fable. Full-density philosophical exploration of Atmospheric UX, Human-side Alignment, and the human experience in the AI era.',
    accentColor: 'var(--color-en)',
    tags: ['English', 'Pre-Meaning', 'Atmospheric UX', 'Full Edition'],
    meta: 'Excerpt / English Edition',
  },
]

export default function BooksPage() {
  return (
    <>
      <div className="bk-hero">
        <div className="bk-hero-inner">
          <div className="bk-label">Books — 著作抜粋公開</div>
          <h1 className="bk-title">著作・調査レポートの<br />抜粋公開</h1>
          <p className="bk-desc">
            日本語9冊・英語4冊・調査レポート8本。
            知識は公開することで価値を持つ——各著作の抜粋や概要をこの知識空間で公開する。
            書籍として手元に置きたい方はAmazonからも購入できる。
          </p>
          <div className="bk-policy">
            ◎ 抜粋・概要を無料公開 — 知識は共有されることで価値を持つ
          </div>
        </div>
      </div>

      <div className="bk-grid-area">
        <div className="bk-group-label">日本語書籍 — 9 Books in Japanese</div>
        <div className="bk-grid">
          {jpBooks.map((b) => (
            <SectionCard key={b.href} {...b} />
          ))}
        </div>

        <div className="bk-group-label">English Books — 4 Books in English</div>
        <div className="bk-grid">
          {enBooks.map((b) => (
            <SectionCard key={b.href} {...b} />
          ))}
        </div>

        <PracticeBridge
          title="理論を読んだあとに、実際のお店で確かめてみてください。"
          description="観光記憶圏、GEO、世界観、SNS動画。各書籍で整理した考え方は、お客様.COM、g-maps.shop、clip.air-s.jp の実践ツールへつながっています。"
          linkLabel="お客様.COMで無料診断を試す →"
        />
      </div>
    </>
  )
}
