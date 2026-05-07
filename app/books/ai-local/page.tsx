import type { Metadata } from 'next'
import Link from 'next/link'
import RelatedKnowledge from '@/components/RelatedKnowledge'

export const metadata: Metadata = {
  title: 'AI失業2026 一次産業・地方店舗復活編 — Books | kansei.info',
  description: '地方・農業・地域店舗がAIを活用して競争優位を築く戦略。AIが個人を「企業」に変える時代に、地域から反撃する方法を論じる。',
}

export default function Page() {
  return (
    <>
      <div style={{ padding: "48px 24px 0", maxWidth: "720px", margin: "0 auto" }}>
        <div style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "32px", display: "flex", gap: "8px" }}>
          <Link href="/books" style={{ color: "var(--color-text-muted)" }}>Books</Link>
          <span>›</span>
          <span>AI失業2026 一次産業・地方店舗復活...</span>
        </div>
      </div>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 96px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-books)", marginBottom: "12px" }}>
          Book — 章別抜粋公開
        </div>
        <h1 style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)", fontWeight: "300", marginBottom: "8px", lineHeight: "1.4" }}>
          AI失業2026 一次産業・地方店舗復活編
        </h1>
        <p style={{ fontSize: "14px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", marginBottom: "24px" }}>
          ―― AIが、個人を「企業」に変える時代
        </p>
        <p style={{ fontSize: "15px", color: "var(--color-text-sub)", lineHeight: "1.9", marginBottom: "32px" }}>
          地方・農業・地域店舗がAIを活用して競争優位を築く戦略。AIが個人を「企業」に変える時代に、地域から反撃する方法を論じる。
        </p>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "48px" }}>
          <a href="https://amzn.asia/d/01v9GNQG" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Amazonで購入 →
          </a>
          <Link href="/books" className="btn-secondary">著作一覧に戻る</Link>
        </div>

        <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "16px" }}>
          目次 — 各章を読む
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "2px", marginBottom: "48px" }}>
              <Link href="/books/ai-local/chapter-1" style={{ display: "flex", gap: "16px", padding: "14px 20px", border: "1px solid var(--color-border)", background: "var(--color-surface)", textDecoration: "none", color: "inherit", borderLeft: "3px solid var(--color-gold)" }}>
                <span style={{ fontSize: "14px", color: "var(--color-text)" }}>第1章 シリコンバレーは、農業を再発明している</span>
                <span style={{ marginLeft: "auto", fontSize: "12px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>→</span>
              </Link>
              <Link href="/books/ai-local/chapter-2" style={{ display: "flex", gap: "16px", padding: "14px 20px", border: "1px solid var(--color-border)", background: "var(--color-surface)", textDecoration: "none", color: "inherit", borderLeft: "3px solid var(--color-gold)" }}>
                <span style={{ fontSize: "14px", color: "var(--color-text)" }}>第2章 地方店舗にAIが来る</span>
                <span style={{ marginLeft: "auto", fontSize: "12px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>→</span>
              </Link>
              <Link href="/books/ai-local/chapter-3" style={{ display: "flex", gap: "16px", padding: "14px 20px", border: "1px solid var(--color-border)", background: "var(--color-surface)", textDecoration: "none", color: "inherit", borderLeft: "3px solid var(--color-gold)" }}>
                <span style={{ fontSize: "14px", color: "var(--color-text)" }}>第3章 個人が企業になる時代</span>
                <span style={{ marginLeft: "auto", fontSize: "12px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>→</span>
              </Link>
              <Link href="/books/ai-local/chapter-4" style={{ display: "flex", gap: "16px", padding: "14px 20px", border: "1px solid var(--color-border)", background: "var(--color-surface)", textDecoration: "none", color: "inherit", borderLeft: "3px solid var(--color-gold)" }}>
                <span style={{ fontSize: "14px", color: "var(--color-text)" }}>第4章 地方からの逆転戦略</span>
                <span style={{ marginLeft: "auto", fontSize: "12px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>→</span>
              </Link>
        </div>

        <RelatedKnowledge
          items={[
            { href: "/labs/human-side-alignment", type: "lab" as const, title: "Human-side Alignment", description: "AI時代の人間性" },
            { href: "/labs/pre-meaning", type: "lab" as const, title: "Pre-Meaning", description: "意味になる前の感覚" },
            { href: "/books", type: "book" as const, title: "著作一覧", description: "9冊抜粋公開" },
          ]}
        />
      </div>
    </>
  )
}
