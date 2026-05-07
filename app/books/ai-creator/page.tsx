import type { Metadata } from 'next'
import Link from 'next/link'
import RelatedKnowledge from '@/components/RelatedKnowledge'

export const metadata: Metadata = {
  title: 'AI失業2026 クリエイター・フリーランス編 — Books | kansei.info',
  description: 'デザイナー・ライター・動画クリエイターが感性設計で生き残る道。下請け構造が消滅し、ソロプレナーとして自立するための戦略を論じる。',
}

export default function Page() {
  return (
    <>
      <div style={{ padding: "48px 24px 0", maxWidth: "720px", margin: "0 auto" }}>
        <div style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "32px", display: "flex", gap: "8px" }}>
          <Link href="/books" style={{ color: "var(--color-text-muted)" }}>Books</Link>
          <span>›</span>
          <span>AI失業2026 クリエイター・フリーラ...</span>
        </div>
      </div>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 96px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-books)", marginBottom: "12px" }}>
          Book — 章別全文公開
        </div>
        <h1 style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)", fontWeight: "300", marginBottom: "8px", lineHeight: "1.4" }}>
          AI失業2026 クリエイター・フリーランス編
        </h1>
        <p style={{ fontSize: "14px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", marginBottom: "24px" }}>
          ―― 下請け消滅とソロプレナー革命
        </p>
        <p style={{ fontSize: "15px", color: "var(--color-text-sub)", lineHeight: "1.9", marginBottom: "32px" }}>
          デザイナー・ライター・動画クリエイターが感性設計で生き残る道。下請け構造が消滅し、ソロプレナーとして自立するための戦略を論じる。
        </p>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "48px" }}>
          <a href="https://amzn.asia/d/01wOwwm0" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Amazonで購入 →
          </a>
          <Link href="/books" className="btn-secondary">著作一覧に戻る</Link>
        </div>

        <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "16px" }}>
          目次 — 各章を読む
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "2px", marginBottom: "48px" }}>
              <Link href="/books/ai-creator/prologue" style={{ display: "flex", gap: "16px", padding: "14px 20px", border: "1px solid var(--color-border)", background: "var(--color-surface)", textDecoration: "none", color: "inherit", borderLeft: "3px solid var(--color-gold)" }}>
                <span style={{ fontSize: "14px", color: "var(--color-text)" }}>プロローグ クラウドワークスは崩壊したのか</span>
                <span style={{ marginLeft: "auto", fontSize: "12px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>→</span>
              </Link>
              <Link href="/books/ai-creator/chapter-1" style={{ display: "flex", gap: "16px", padding: "14px 20px", border: "1px solid var(--color-border)", background: "var(--color-surface)", textDecoration: "none", color: "inherit", borderLeft: "3px solid var(--color-gold)" }}>
                <span style={{ fontSize: "14px", color: "var(--color-text)" }}>第1章 AIは仕事を奪っていない。企業を圧縮している</span>
                <span style={{ marginLeft: "auto", fontSize: "12px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>→</span>
              </Link>
              <Link href="/books/ai-creator/chapter-2" style={{ display: "flex", gap: "16px", padding: "14px 20px", border: "1px solid var(--color-border)", background: "var(--color-surface)", textDecoration: "none", color: "inherit", borderLeft: "3px solid var(--color-gold)" }}>
                <span style={{ fontSize: "14px", color: "var(--color-text)" }}>第2章 サンフランシスコで始まったソロプレナー革命</span>
                <span style={{ marginLeft: "auto", fontSize: "12px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>→</span>
              </Link>
              <Link href="/books/ai-creator/chapter-3" style={{ display: "flex", gap: "16px", padding: "14px 20px", border: "1px solid var(--color-border)", background: "var(--color-surface)", textDecoration: "none", color: "inherit", borderLeft: "3px solid var(--color-gold)" }}>
                <span style={{ fontSize: "14px", color: "var(--color-text)" }}>第3章 なぜ35人の仕事が1人で可能になったのか</span>
                <span style={{ marginLeft: "auto", fontSize: "12px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>→</span>
              </Link>
              <Link href="/books/ai-creator/chapter-4" style={{ display: "flex", gap: "16px", padding: "14px 20px", border: "1px solid var(--color-border)", background: "var(--color-surface)", textDecoration: "none", color: "inherit", borderLeft: "3px solid var(--color-gold)" }}>
                <span style={{ fontSize: "14px", color: "var(--color-text)" }}>第4章 フリーランスの終焉と再誕——ラッパー企業の台頭</span>
                <span style={{ marginLeft: "auto", fontSize: "12px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>→</span>
              </Link>
              <Link href="/books/ai-creator/chapter-5" style={{ display: "flex", gap: "16px", padding: "14px 20px", border: "1px solid var(--color-border)", background: "var(--color-surface)", textDecoration: "none", color: "inherit", borderLeft: "3px solid var(--color-gold)" }}>
                <span style={{ fontSize: "14px", color: "var(--color-text)" }}>第5章 消える者と、拡張される者</span>
                <span style={{ marginLeft: "auto", fontSize: "12px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>→</span>
              </Link>
              <Link href="/books/ai-creator/chapter-6" style={{ display: "flex", gap: "16px", padding: "14px 20px", border: "1px solid var(--color-border)", background: "var(--color-surface)", textDecoration: "none", color: "inherit", borderLeft: "3px solid var(--color-gold)" }}>
                <span style={{ fontSize: "14px", color: "var(--color-text)" }}>第6章 日本で起きる静かな起業爆発</span>
                <span style={{ marginLeft: "auto", fontSize: "12px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>→</span>
              </Link>
              <Link href="/books/ai-creator/chapter-7" style={{ display: "flex", gap: "16px", padding: "14px 20px", border: "1px solid var(--color-border)", background: "var(--color-surface)", textDecoration: "none", color: "inherit", borderLeft: "3px solid var(--color-gold)" }}>
                <span style={{ fontSize: "14px", color: "var(--color-text)" }}>第7章 実在するソロプレナー企業</span>
                <span style={{ marginLeft: "auto", fontSize: "12px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>→</span>
              </Link>
              <Link href="/books/ai-creator/chapter-8" style={{ display: "flex", gap: "16px", padding: "14px 20px", border: "1px solid var(--color-border)", background: "var(--color-surface)", textDecoration: "none", color: "inherit", borderLeft: "3px solid var(--color-gold)" }}>
                <span style={{ fontSize: "14px", color: "var(--color-text)" }}>第8章 あなたがソロプレナーになるための5つのステップ</span>
                <span style={{ marginLeft: "auto", fontSize: "12px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>→</span>
              </Link>
              <Link href="/books/ai-creator/epilogue" style={{ display: "flex", gap: "16px", padding: "14px 20px", border: "1px solid var(--color-border)", background: "var(--color-surface)", textDecoration: "none", color: "inherit", borderLeft: "3px solid var(--color-gold)" }}>
                <span style={{ fontSize: "14px", color: "var(--color-text)" }}>最終章 目指せ、ソロプレナー</span>
                <span style={{ marginLeft: "auto", fontSize: "12px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>→</span>
              </Link>
        </div>

        <RelatedKnowledge
          items={[
            { href: "/labs/human-side-alignment", type: "lab" as const, title: "Human-side Alignment", description: "AI時代の人間性" },
            { href: "/labs/pre-meaning", type: "lab" as const, title: "Pre-Meaning", description: "意味になる前の感覚" },
            { href: "/books", type: "book" as const, title: "著作一覧", description: "9冊全文公開" },
          ]}
        />
      </div>
    </>
  )
}
