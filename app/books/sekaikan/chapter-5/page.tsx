import type { Metadata } from 'next'
import Link from 'next/link'
import RelatedKnowledge from '@/components/RelatedKnowledge'

export const metadata: Metadata = {
  title: '第五章 戦わないマーケティング — 世界観マーケティング',
  description: '共鳴型経済圏と、地域価値の守り方。世界観マーケティングと顧客体験の方程式・第五章・抜粋公開。',
}

export default function Page() {
  return (
    <>
      <div style={{ padding: "48px 24px 0", maxWidth: "720px", margin: "0 auto" }}>
        <div style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "32px", display: "flex", gap: "8px", flexWrap: "wrap" }}>
          <Link href="/books" style={{ color: "var(--color-text-muted)" }}>Books</Link>
          <span>›</span>
          <Link href="/books/sekaikan" style={{ color: "var(--color-text-muted)" }}>世界観マーケティング</Link>
          <span>›</span>
          <span>第五章</span>
        </div>
      </div>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 96px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-gold)", marginBottom: "16px" }}>
          第五章
        </div>
        <h1 style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)", fontWeight: "300", marginBottom: "8px", lineHeight: "1.35" }}>
          戦わないマーケティング
        </h1>
        <p style={{ fontSize: "14px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", marginBottom: "48px" }}>
          ―― 共鳴型経済圏と、地域価値の守り方
        </p>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>那須に来て、最も驚いたことの一つがある。それは、同業者同士が、普通に互いを紹介していることだった。「あそこのパン屋さんも美味しいですよ」「今日はあちらのカフェの方が空いているかもしれませんね」——東京で長く仕事をしてきた私にとって、これはかなり不思議な光景だった。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>過剰競争は、世界観を壊していく</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>現代のマーケティングは、しばしば「奪い合い」になりやすい。しかし多くの場所が、競争によって「空気」を壊していく。静けさが魅力だったカフェが、回転率を優先し始める。すると、「あの場所らしさ」が失われていく。理念崩壊→空気ズレ→常連離脱→SNS違和感→世界観崩壊。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>「戦わない」は競争放棄ではない</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>本章で言う「戦わない」は、努力しない、成長しない、という意味ではない。むしろ逆である。那須の店主たちは、驚くほど真剣に、空間や接客を磨いている。ただし、その競争軸が違う。価格ではなく、世界観を磨いている。「誰より安いか」ではなく、「どれだけ、その場所らしいか」を競っているのである。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>共鳴型経済圏（Resonance Economy）</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>共鳴型経済圏とは、個々の店舗や人が、相互に世界観を傷つけず、共鳴し合うことで成立する経済構造である。地域全体の空気が維持されると、一店舗だけでは生み出せない魅力が生まれる。「街全体が好き」という感覚である。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>地域という「OS」上でのアプリケーション戦略</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>地域の人気店は「地域というOS」の上で動く「アプリケーション」として機能している。OSが強いほど、個々のアプリケーションも輝きやすい。だから、同業者を紹介することは「競争放棄」ではない。それは「OSを守る行動」なのである。地域全体の空気価値を守ることが、長期的には自店の価値を守ることにつながる。</p>
        <div style={{ borderTop: "1px solid var(--color-border)", paddingTop: "40px", marginTop: "48px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <Link href="/books/sekaikan/chapter-4" style={{ fontSize: "13px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>
            ← 第四章
          </Link>
          <Link href="/books/sekaikan/chapter-6" className="btn-primary">第六章 →</Link>
        </div>
        <RelatedKnowledge
          items={[
            { href: "/labs/contextual-continuity", type: "lab" as const, title: "文脈継続性", description: "OSを守る概念" },
            { href: "/fieldwork/kusatsu", type: "fieldwork" as const, title: "草津温泉街", description: "地域全体が世界観" },
            { href: "/books/sekaikan/chapter-6", type: "book" as const, title: "第六章", description: "AI時代に空気が価値になる" },
          ]}
        />
      </div>
    </>
  )
}
