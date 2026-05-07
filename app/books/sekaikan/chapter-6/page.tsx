import type { Metadata } from 'next'
import Link from 'next/link'
import RelatedKnowledge from '@/components/RelatedKnowledge'

export const metadata: Metadata = {
  title: '第六章 AI時代に、なぜ「空気」が価値になるのか — 世界観マーケティング',
  description: 'Human-side Alignmentという考え方。世界観マーケティングと顧客体験の方程式・第六章・抜粋公開。',
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
          <span>第六章</span>
        </div>
      </div>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 96px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-gold)", marginBottom: "16px" }}>
          第六章
        </div>
        <h1 style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)", fontWeight: "300", marginBottom: "8px", lineHeight: "1.35" }}>
          AI時代に、なぜ「空気」が価値になるのか
        </h1>
        <p style={{ fontSize: "14px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", marginBottom: "48px" }}>
          ―― Human-side Alignmentという考え方
        </p>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>AIの進化によって、私たちの社会は、急速に「便利」になり始めている。文章生成、画像生成、動画生成、翻訳、検索、接客、推薦——次々とAIによって代替・補助され始めている。しかし私は、この変化を観察する中で、逆説的な感覚を持つようになった。AIが進化するほど、人間は逆に「空気」「余白」「居場所」を求め始めるのではないか。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>Pre-Meaning——意味になる前の感覚</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>「なんか落ち着く」「この場所、好きかもしれない」「また来たい気がする」——人は、最初から論理で場所を好きになるわけではない。むしろ先に、身体が反応していることが多い。私はこれを、Pre-Meaning（意味になる前の感覚）と呼んでいる。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>AI時代には「ノイズ」が増えていく</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>AIによって、社会全体の情報密度が爆発的に増える。だからこそ逆に、静けさ、余白、呼吸できる場所、情報密度の低い空間の価値が上がる。強い店ほど、「情報を足す」のではなく、「ノイズを減らしている」。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>Human-side Alignment——人間側に整合する設計</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>AI業界の「Alignment」は、AIを人間の価値観に合わせる概念だ。しかし私は別の方向から考えている。「人間側は、AI時代にどう整合するのか」という問題だ。AIが便利さを加速させる時、人間はどこで呼吸し、安心し、自分を取り戻すのか。私はこれを、Human-side Alignmentと呼んでいる。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>GEOと、世界観マーケティングの違い</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>GEO（Generative Engine Optimization）は「AIに見つけてもらう技術」だ。しかし本書で扱っているのは、その先だ。GEOが「見つけてもらうための技術」だとすれば、世界観マーケティングは「また帰りたくなる場所をつくる技術」だ。この二つは、AI時代のマーケティングにおいて、車の両輪となる。</p>
        <div style={{ borderTop: "1px solid var(--color-border)", paddingTop: "40px", marginTop: "48px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <Link href="/books/sekaikan/chapter-5" style={{ fontSize: "13px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>
            ← 第五章
          </Link>
          <Link href="/books/sekaikan/chapter-7" className="btn-primary">第七章 →</Link>
        </div>
        <RelatedKnowledge
          items={[
            { href: "/labs/pre-meaning", type: "lab" as const, title: "Pre-Meaning", description: "意味になる前の感覚" },
            { href: "/labs/human-side-alignment", type: "lab" as const, title: "Human-side Alignment", description: "人間側整合" },
            { href: "/books/sekaikan/chapter-7", type: "book" as const, title: "第七章", description: "実践チェックリスト" },
          ]}
        />
      </div>
    </>
  )
}
