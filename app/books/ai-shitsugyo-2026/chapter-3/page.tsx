import type { Metadata } from 'next'
import Link from 'next/link'
import RelatedKnowledge from '@/components/RelatedKnowledge'

export const metadata: Metadata = {
  title: '第3章 AGIと身体性の哲学 — AI失業2026 | kansei.info',
  description: 'AGIと身体性の哲学。AI失業2026・第3章。藤井実彦著。AI時代の雇用・居場所・感性の関係を論じる。',
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
          <span>第3章</span>
        </div>
      </div>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 96px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-books)", marginBottom: "16px" }}>
          第3章
        </div>
        <h1 style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)", fontWeight: "300", marginBottom: "24px", lineHeight: "1.4" }}>
          AGIと身体性の哲学
        </h1>

        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>第3章　AGIと身体性の哲学</p>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>― 知能は「身体」を必要とするのか ―</p>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>1. AGIは「脳」だけで完成するのか？</p>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>これまでの議論を整理すると：
第1章：資本がAIを加速させた
第2章：AIは身体を持ち始めた
第2章後半：資源と地政学の問題に拡張した</p>

        <div style={{ padding: "24px", background: "var(--color-bg-alt)", border: "1px solid var(--color-border)", borderLeft: "3px solid var(--color-gold)", marginTop: "32px", marginBottom: "40px" }}>
          <div style={{ fontSize: "13px", color: "var(--color-text-sub)", lineHeight: "1.85" }}>
            本章の全文は書籍でご覧いただけます。Amazon Kindle Unlimitedの方は無料でお読みいただけます。
          </div>
        </div>

        <div style={{ borderTop: "1px solid var(--color-border)", paddingTop: "32px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <Link href="/books/ai-shitsugyo-2026/chapter-2" style={{ fontSize: "13px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>← 第2章</Link>
          <Link href="/books/ai-shitsugyo-2026/chapter-4" className="btn-primary">第4章 →</Link>
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
