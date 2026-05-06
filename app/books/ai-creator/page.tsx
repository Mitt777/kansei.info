import type { Metadata } from 'next'
import Link from 'next/link'
import RelatedKnowledge from '@/components/RelatedKnowledge'

export const metadata: Metadata = {
  title: 'AI失業2026 クリエイターフリーランス編 — Books | kansei.info',
  description: 'デザイナー・ライター・動画クリエイターが感性設計で生き残る道。下請け構造が消滅し、ソロプレナーとして自立するための戦略を論じる。',
}

export default function Page() {
  return (
    <>
      <div style={{ padding: "48px 24px 0", maxWidth: "720px", margin: "0 auto" }}>
        <div style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "32px", display: "flex", gap: "8px" }}>
          <Link href="/books" style={{ color: "var(--color-text-muted)" }}>Books</Link>
          <span>›</span>
          <span style={{ color: "var(--color-text)" }}>AI失業2026 クリエイターフリーラン...</span>
        </div>
      </div>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 96px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-books)", marginBottom: "12px" }}>
          Book — 全文公開
        </div>
        <h1 style={{ fontSize: "clamp(1.3rem, 2.8vw, 2rem)", fontWeight: "300", marginBottom: "8px", lineHeight: "1.4" }}>
          AI失業2026 クリエイターフリーランス編
        </h1>
        <p style={{ fontSize: "14px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", marginBottom: "8px" }}>
          ―― 下請け消滅とソロプレナー革命
        </p>
        <p style={{ fontSize: "12px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", marginBottom: "28px" }}>
          藤井実彦 著
        </p>
        <p style={{ fontSize: "15px", color: "var(--color-text-sub)", lineHeight: "1.9", marginBottom: "24px" }}>
          デザイナー・ライター・動画クリエイターが感性設計で生き残る道。下請け構造が消滅し、ソロプレナーとして自立するための戦略を論じる。
        </p>
        <p style={{ fontSize: "15px", color: "var(--color-text-sub)", lineHeight: "1.9", marginBottom: "32px", padding: "20px 24px", background: "var(--color-bg-alt)", borderLeft: "3px solid var(--color-books)" }}>
          生成AIの登場により、クリエイターの「下請け」ビジネスは急速に消滅しつつある。しかし同時に、AIでは代替できない「感性の設計者」という新しいポジションが生まれている。本書は、クリエイターが下請けからソロプレナーへ転換するための具体的な戦略を提示する。
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "32px" }}>
          <span style={{ fontSize: "12px", padding: "3px 10px", border: "1px solid var(--color-border)", borderRadius: "2px", color: "var(--color-text-sub)", fontFamily: "var(--font-mono)" }}>フリーランス</span> <span style={{ fontSize: "12px", padding: "3px 10px", border: "1px solid var(--color-border)", borderRadius: "2px", color: "var(--color-text-sub)", fontFamily: "var(--font-mono)" }}>クリエイター</span> <span style={{ fontSize: "12px", padding: "3px 10px", border: "1px solid var(--color-border)", borderRadius: "2px", color: "var(--color-text-sub)", fontFamily: "var(--font-mono)" }}>ソロプレナー</span> <span style={{ fontSize: "12px", padding: "3px 10px", border: "1px solid var(--color-border)", borderRadius: "2px", color: "var(--color-text-sub)", fontFamily: "var(--font-mono)" }}>下請け消滅</span> <span style={{ fontSize: "12px", padding: "3px 10px", border: "1px solid var(--color-border)", borderRadius: "2px", color: "var(--color-text-sub)", fontFamily: "var(--font-mono)" }}>AI</span> <span style={{ fontSize: "12px", padding: "3px 10px", border: "1px solid var(--color-border)", borderRadius: "2px", color: "var(--color-text-sub)", fontFamily: "var(--font-mono)" }}>感性設計</span>
        </div>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "64px" }}>
          <a href="https://amzn.asia/d/01wOwwm0" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Amazonで購入 →
          </a>
          <Link href="/books" className="btn-secondary">著作一覧に戻る</Link>
        </div>
        <RelatedKnowledge
          items={[
            { href: "/books/ai-shitsugyo-2026", type: "book" as const, title: "AI失業2026本編", description: "シリーズの出発点" },
            { href: "/books/ai-local", type: "book" as const, title: "地方店舗復活編", description: "シリーズ続編" },
            { href: "/labs/human-side-alignment", type: "lab" as const, title: "Human-side Alignment", description: "人間らしさの価値" },
          ]}
        />
      </div>
    </>
  )
}
