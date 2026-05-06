import type { Metadata } from 'next'
import Link from 'next/link'
import RelatedKnowledge from '@/components/RelatedKnowledge'

export const metadata: Metadata = {
  title: '第四章 物語の源泉 — 世界観マーケティング',
  description: 'ディズニー・サンリオ・地域店の三類型。世界観マーケティングと顧客体験の方程式・第四章・全文公開。',
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
          <span>第四章</span>
        </div>
      </div>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 96px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-gold)", marginBottom: "16px" }}>
          第四章
        </div>
        <h1 style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)", fontWeight: "300", marginBottom: "8px", lineHeight: "1.35" }}>
          物語の源泉
        </h1>
        <p style={{ fontSize: "14px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", marginBottom: "48px" }}>
          ―― ディズニー・サンリオ・地域店の三類型
        </p>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>「世界観の原動力は、どこから来るのか」という問いがある。ディズニーも、サンリオも、那須の小さなカフェも、「また来たくなる場所」として機能している。しかしその「なぜ機能するのか」の答えは、それぞれ根本的に異なる。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>Type A：意図的設計型</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>ディズニーが他のテーマパークと根本的に異なるのは、物語の「所有」にある。ミッキーもシンデレラもスターウォーズも、ディズニーが創造し、所有し、管理する物語だ。だから世界観は外部に依存しない。フロリダでも、パリでも、東京でも、同一の「ディズニー宇宙」が機能する。しかしこれは、莫大な資本と独自の物語創造力を必要とする。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>Type B：無意識共鳴型——地域の人気店が持つ別の強さ</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>那須の人気カフェ、温泉街の旅館、地域のパン屋——ディズニーのような莫大な資本も、サンリオのような強力なIPも持たない。しかしそれでも、「また帰りたい場所」として成立している。地域の人気店は、「地域の物語を受信している」。那須という土地が持つ固有のパワー——静けさ、高原の光、開拓の歴史——これらと無意識のうちに深く接続しているから、世界観が成立している。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>「借景」という日本的な設計思想</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>日本の伝統的な庭園技法「借景」が助けになる。借景とは、遠くの山や自然を、自分の庭の一部として取り込む技術だ。地域の人気店は、まさにこれをやっている。那須の静けさ、光、歴史という「巨大な物語のストック」を、自店の世界観の中に無意識に借景している。だから、顧客の意識の動線が途切れない。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>文脈継続性（Contextual Continuity）</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>重要なのは、那須の人気店オーナーの多くが、自分が地域の力を借りていることに「気づいていない」という点だ。本書が提案する「文脈継続性」とは、この無意識の共鳴を意識化し、意図的に守ることである。地域という「OS」の上で動く「アプリケーション」として自店を定義することで、小さなリソースで強い世界観を実現できる。</p>
        <div style={{ borderTop: "1px solid var(--color-border)", paddingTop: "40px", marginTop: "48px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <Link href="/books/sekaikan/chapter-3" style={{ fontSize: "13px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>
            ← 第三章
          </Link>
          <Link href="/books/sekaikan/chapter-5" className="btn-primary">第五章 →</Link>
        </div>
        <RelatedKnowledge
          items={[
            { href: "/labs/contextual-continuity", type: "lab" as const, title: "文脈継続性", description: "OSを守る概念" },
            { href: "/fieldwork/shozo", type: "fieldwork" as const, title: "SHOZO CAFE", description: "Type Bの最高峰" },
            { href: "/books/sekaikan/chapter-5", type: "book" as const, title: "第五章", description: "戦わないマーケティング" },
          ]}
        />
      </div>
    </>
  )
}
