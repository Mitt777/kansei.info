import type { Metadata } from 'next'
import Link from 'next/link'
import RelatedKnowledge from '@/components/RelatedKnowledge'

export const metadata: Metadata = {
  title: '第2章 フィジカルAI元年——知能が身体を持つとき — AI失業2026 | kansei.info',
  description: 'フィジカルAI元年——知能が身体を持つとき。AI失業2026・第2章。藤井実彦著。AI時代の雇用・居場所・感性の関係を論じる。',
}

export default function Page() {
  return (
    <>
      <div style={{ padding: "48px 24px 0", maxWidth: "720px", margin: "0 auto" }}>
        <div style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "32px", display: "flex", gap: "8px", flexWrap: "wrap" }}>
          <Link href="/books" style={{ color: "var(--color-text-muted)" }}>Books</Link>
          <span>›</span>
          <Link href="/books/ai-shitsugyo-2026" style={{ color: "var(--color-text-muted)" }}>AI失業2026...</Link>
          <span>›</span>
          <span>第2章</span>
        </div>
      </div>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 96px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-books)", marginBottom: "16px" }}>
          第2章
        </div>
        <h1 style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)", fontWeight: "300", marginBottom: "24px", lineHeight: "1.4" }}>
          フィジカルAI元年——知能が身体を持つとき
        </h1>

        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>第2章　フィジカルAI元年 ― 知能が“身体”を持つとき</p>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>1. 転換点はなぜ「今」なのか</p>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>2026年のCESで象徴的だったのは、単なるロボット展示ではなく、
人型ロボットの量産宣言
生成AIとの統合
自動運転モデルの本格展開
物理シミュレーション基盤の整備</p>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>が同時に進んだことです。</p>

        <div style={{ padding: "24px", background: "var(--color-bg-alt)", border: "1px solid var(--color-border)", borderLeft: "3px solid var(--color-gold)", marginTop: "32px", marginBottom: "40px" }}>
          <div style={{ fontSize: "13px", color: "var(--color-text-sub)", lineHeight: "1.85" }}>
            本章の全文は書籍でご覧いただけます。Amazon Kindle Unlimitedの方は無料でお読みいただけます。
          </div>
        </div>

        <div style={{ borderTop: "1px solid var(--color-border)", paddingTop: "32px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <Link href="/books/ai-shitsugyo-2026/chapter-1" style={{ fontSize: "13px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>← 第1章</Link>
          <Link href="/books/ai-shitsugyo-2026/chapter-3" className="btn-primary">第3章 →</Link>
        </div>

        <RelatedKnowledge
          items={[
            { href: "/books/ai-shitsugyo-2026", type: "book" as const, title: "目次に戻る", description: "AI失業2026" },
            { href: "/labs/human-side-alignment", type: "lab" as const, title: "Human-side Alignment", description: "AI時代の人間性" },
            { href: "/frameworks/7layers", type: "framework" as const, title: "7層モデル", description: "世界観設計のフレームワーク" },
          ]}
        />
      </div>
    </>
  )
}
