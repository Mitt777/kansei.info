import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import RelatedKnowledge from '@/components/RelatedKnowledge'

export const metadata: Metadata = {
  title: 'Books — 著作全文',
  description: '日本語6冊・英語3冊・調査レポート8本。すべて無料全文公開。世界観マーケティング・AI失業・Pre-Meaning・Save→Plan→Impulse。',
}

const books = [
  {
    href: '/books/sekaikan',
    label: 'Core Book',
    title: '世界観マーケティングと顧客体験の方程式',
    description:
      'AI時代に、場所・空気・世界観・帰属がどのように顧客体験を形成するかを整理した中核書籍。',
    tags: ['Worldview', 'Customer Experience', '全文公開'],
  },
  {
    amazon: 'https://amzn.asia/d/017s4Zwp',
    label: 'Field Study',
    title: 'Save → Plan → Impulse 感性ドリブン地域DX論',
    description: '那須フィールドスタディから生まれたSPIモデルの観測ノート。',
    tags: ['SPI Model', 'Regional DX', 'Nasu'],
  },
  {
    amazon: 'https://amzn.asia/d/0gOnyYvO',
    label: 'Theory',
    title: 'AI時代のPre-Meaning概論',
    description: '意味が生まれる前の人間の余白を扱う思想的中核書籍。',
    tags: ['Pre-Meaning', 'AI時代', '余白'],
  },
  {
    amazon: 'https://amzn.asia/d/03B2H7B9',
    label: 'AI Society',
    title: 'AI失業2026',
    description: '日米AIリストラ新潮流を整理したAI社会変化論。',
    tags: ['AI', 'Work', 'Society'],
  },
  {
    amazon: 'https://amzn.asia/d/01wOwwm0',
    label: 'Creator Economy',
    title: 'AI失業2026 クリエイターフリーランス編',
    description: '下請け消滅とソロプレナー革命を扱う。',
    tags: ['Creator', 'Freelance', 'Solo'],
  },
  {
    amazon: 'https://amzn.asia/d/01v9GNQG',
    label: 'Local Business',
    title: 'AI失業2026 一次産業・地方店舗復活編',
    description: 'AIが個人を企業に変える時代における一次産業・地方店舗の可能性。',
    tags: ['Local Stores', 'Primary Industry', 'AI'],
  },
  {
    amazon: 'https://amzn.asia/d/0gOp02d2',
    label: 'Organization',
    title: '【完全解説】2026年会社は消える',
    description: 'AI時代に会社・組織・個人の働き方がどう変わるのかを整理した変化論。',
    tags: ['Company', 'AI Shift', 'Workstyle'],
  },
  {
    amazon: 'https://amzn.asia/d/0gtxTp55',
    label: 'English',
    title: 'Save-Plan-Impulse: Kansei Driven Regional DX',
    description: 'SPIモデルの英語版。',
    tags: ['English', 'SPI Model', 'Regional DX'],
  },
  {
    amazon: 'https://amzn.asia/d/01DVH9kP',
    label: 'English Fable',
    title: 'The Eternal Millimeter — A Condensed Pre-Meaning Fable',
    description: 'Pre-Meaningを寓話として表現した英語短縮版。',
    tags: ['English', 'Pre-Meaning', 'Fable'],
  },
  {
    label: 'English Fable',
    title: 'The Eternal Millimeter — A Full-Density Record of a Pre-Meaning Fable',
    description: 'Pre-Meaning寓話の完全密度版。',
    tags: ['English', 'Pre-Meaning', 'Full-Density'],
  },
]

function BookCard({
  book,
}: {
  book: {
    href?: string
    amazon?: string
    label: string
    title: string
    description: string
    tags: string[]
  }
}) {
  const content = (
    <>
      <div className="book-card-label">{book.label}</div>
      <div className="book-card-title">{book.title}</div>
      <p className="book-card-desc">{book.description}</p>
      <div className="sc-tags">
        {book.tags.map((tag) => (
          <span key={tag} className="sc-tag">{tag}</span>
        ))}
      </div>
      <div className="book-card-link">
        {book.href ? '全文を読む →' : book.amazon ? 'Amazonで見る ↗' : 'Knowledge record'}
      </div>
    </>
  )

  if (book.href) {
    return (
      <Link href={book.href} className="book-card">
        {content}
      </Link>
    )
  }

  if (book.amazon) {
    return (
      <a href={book.amazon} className="book-card" target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    )
  }

  return <div className="book-card book-card-static">{content}</div>
}

export default function Page() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-inner page-hero-grid">
          <div>
            <div className="page-label" style={{ color: 'var(--color-books)' }}>
              Books — 著作全文
            </div>
            <h1 className="page-title">書籍群の知識ハブ</h1>
            <p className="page-desc">
              世界観マーケティング、Pre-Meaning、Save→Plan→Impulse、AI社会変化論。
              個別の本を、独立した商品ではなく、kansei.info の知識OSを構成する章として並べる。
            </p>
            <div className="archive-stats">
              <span>10 Books</span>
              <span>JP / EN</span>
              <span>Worldview / AI / Regional DX</span>
            </div>
          </div>
          <div className="page-hero-media" aria-hidden="true">
            <Image src="/images/books-shelf.jpg" alt="" fill sizes="(max-width: 768px) 100vw, 360px" className="quiet-image" />
          </div>
        </div>
      </div>

      <div className="page-body">
        <div className="archive-heading">
          <div>
            <div className="archive-label">Books Index</div>
            <h2>知識OSを構成する書籍群</h2>
          </div>
          <p>
            中核理論、フィールド観測、AI時代の働き方、英語版の寓話まで。
            各書籍は、研究・フレームワーク・フィールドワークへ接続する入口です。
          </p>
        </div>

        <div className="book-grid">
          {books.map((book) => (
            <BookCard key={book.title} book={book} />
          ))}
        </div>

        <div className="archive-note">
          <div className="archive-label">Reading Map</div>
          <p>
            初めて読む場合は『世界観マーケティングと顧客体験の方程式』から入り、
            実地観測はSPI、思想の核はPre-Meaning、社会変化はAI失業シリーズへ進む構成です。
            英語版は国際研究・HCI文脈への橋として配置しています。
          </p>
        </div>

        <RelatedKnowledge
          heading="関連Framework / RelatedKnowledge"
          items={[
            { href: '/manifesto', type: 'essay', title: 'Manifesto', description: 'AI時代に人間はどこで呼吸するのか' },
            { href: '/frameworks/7layers', type: 'framework', title: '世界観設計7層モデル', description: '世界観を構造として読むための基礎' },
            { href: '/labs/pre-meaning', type: 'lab', title: 'Pre-Meaning論', description: '意味になる前の人間の余白' },
            { href: '/research', type: 'research', title: 'Research Archive', description: '調査・論文・フィールドレポート' },
          ]}
        />
      </div>
    </>
  )
}
