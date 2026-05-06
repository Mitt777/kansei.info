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
          <span style={{ color: "var(--color-text)" }}>AI失業2026 一次産業・地方店舗復活...</span>
        </div>
      </div>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 96px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-books)", marginBottom: "12px" }}>
          Book — 全文公開
        </div>
        <h1 style={{ fontSize: "clamp(1.3rem, 2.8vw, 2rem)", fontWeight: "300", marginBottom: "8px", lineHeight: "1.4" }}>
          AI失業2026 一次産業・地方店舗復活編
        </h1>
        <p style={{ fontSize: "14px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", marginBottom: "8px" }}>
          ―― AIが、個人を“企業”に変える時代
        </p>
        <p style={{ fontSize: "12px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", marginBottom: "28px" }}>
          藤井実彦 著
        </p>
        <p style={{ fontSize: "15px", color: "var(--color-text-sub)", lineHeight: "1.9", marginBottom: "24px" }}>
          地方・農業・地域店舗がAIを活用して競争優位を築く戦略。AIが個人を「企業」に変える時代に、地域から反撃する方法を論じる。
        </p>
        <p style={{ fontSize: "15px", color: "var(--color-text-sub)", lineHeight: "1.9", marginBottom: "32px", padding: "20px 24px", background: "var(--color-bg-alt)", borderLeft: "3px solid var(--color-books)" }}>
          那須での観測から確信したのは、地方の一次産業と地域店舗は、AIを最も有効活用できる主体だということだ。大企業はシステム・組織・ブランドの制約があるが、個人・小規模事業者はAIを即座に実装できる。AIが個人を「企業」に変える時代に、地方からの逆転が始まる。
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "32px" }}>
          <span style={{ fontSize: "12px", padding: "3px 10px", border: "1px solid var(--color-border)", borderRadius: "2px", color: "var(--color-text-sub)", fontFamily: "var(--font-mono)" }}>一次産業</span> <span style={{ fontSize: "12px", padding: "3px 10px", border: "1px solid var(--color-border)", borderRadius: "2px", color: "var(--color-text-sub)", fontFamily: "var(--font-mono)" }}>地方店舗</span> <span style={{ fontSize: "12px", padding: "3px 10px", border: "1px solid var(--color-border)", borderRadius: "2px", color: "var(--color-text-sub)", fontFamily: "var(--font-mono)" }}>AI活用</span> <span style={{ fontSize: "12px", padding: "3px 10px", border: "1px solid var(--color-border)", borderRadius: "2px", color: "var(--color-text-sub)", fontFamily: "var(--font-mono)" }}>個人企業化</span> <span style={{ fontSize: "12px", padding: "3px 10px", border: "1px solid var(--color-border)", borderRadius: "2px", color: "var(--color-text-sub)", fontFamily: "var(--font-mono)" }}>地域復活</span> <span style={{ fontSize: "12px", padding: "3px 10px", border: "1px solid var(--color-border)", borderRadius: "2px", color: "var(--color-text-sub)", fontFamily: "var(--font-mono)" }}>那須</span>
        </div>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "64px" }}>
          <a href="https://amzn.asia/d/01v9GNQG" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Amazonで購入 →
          </a>
          <Link href="/books" className="btn-secondary">著作一覧に戻る</Link>
        </div>
        <RelatedKnowledge
          items={[
            { href: "/research/1000stores-strategy", type: "research" as const, title: "1000店舗戦略", description: "AI動画の実装" },
            { href: "/fieldwork/nasu", type: "fieldwork" as const, title: "那須フィールドワーク", description: "観測の舞台" },
            { href: "/books/ai-shitsugyo-2026", type: "book" as const, title: "AI失業2026本編", description: "シリーズの出発点" },
          ]}
        />
      </div>
    </>
  )
}
