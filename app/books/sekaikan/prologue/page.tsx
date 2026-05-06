import type { Metadata } from 'next'
import Link from 'next/link'
import RelatedKnowledge from '@/components/RelatedKnowledge'

export const metadata: Metadata = {
  title: '序章 なぜ今、「世界観」なのか — 世界観マーケティング',
  description: 'AI時代に、人はどこへ帰るのか。世界観マーケティングと顧客体験の方程式・序章・全文公開。',
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
          <span>序章</span>
        </div>
      </div>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 96px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-gold)", marginBottom: "16px" }}>
          序章
        </div>
        <h1 style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)", fontWeight: "300", marginBottom: "8px", lineHeight: "1.35" }}>
          なぜ今、「世界観」なのか
        </h1>
        <p style={{ fontSize: "14px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", marginBottom: "48px" }}>
          ―― AI時代に、人はどこへ帰るのか
        </p>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>AIによって、世界は急速に変わり始めている。文章を書く。画像を作る。動画を編集する。広告を最適化する。かつて専門家だけが持っていた能力が、次々とAIによって民主化され始めている。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>それでも、人は「場所」を求めている</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>しかし、そんな時代の中で、私は逆に、ある感覚が強くなっていった。それは、人間は、便利だけでは生きられないという感覚だった。私はここ数年、那須地域で、数百本単位の地域観測型動画を制作しながら、多くの店舗や場所を見続けてきた。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>三つの場所が、一つの真実を教えてくれた</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>本書には、三種類の「また来たくなる場所」が登場する。ディズニーランド——意図的設計型の頂点。サンリオピューロランド——IP活用型。そして那須の小さなカフェ——無意識共鳴型。それぞれのアプローチは異なるが、根底に共通する構造がある。</p>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>本書は、特定の業種のための本ではない。ディズニーランドを運営する経営者も、那須の山の中でひとりカフェを開く店主も、動物園のスタッフも、温泉宿のおかみも——「また来たい」と思われたいすべての人のための、共通の物差しである。あなたは、どんな空気を残したいですか。</p>
        <div style={{ borderTop: "1px solid var(--color-border)", paddingTop: "40px", marginTop: "48px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <Link href="/books/sekaikan" style={{ fontSize: "13px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>
            ← 目次
          </Link>
          <Link href="/books/sekaikan/chapter-1" className="btn-primary">第一章 →</Link>
        </div>
        <RelatedKnowledge
          items={[
            { href: "/frameworks/7layers", type: "framework" as const, title: "世界観設計7層モデル", description: "体験の連続性の構造" },
            { href: "/fieldwork/shozo", type: "fieldwork" as const, title: "SHOZO CAFE", description: "那須の代表的事例" },
            { href: "/books/sekaikan/chapter-1", type: "book" as const, title: "第一章へ", description: "なぜ来たくなる場所が生まれるのか" },
          ]}
        />
      </div>
    </>
  )
}
