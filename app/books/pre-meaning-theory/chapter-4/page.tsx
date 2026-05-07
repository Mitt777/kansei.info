import type { Metadata } from 'next'
import Link from 'next/link'
import RelatedKnowledge from '@/components/RelatedKnowledge'

export const metadata: Metadata = {
  title: '第4章 Pre-Meaningとは何か（定義ではなく、観察） — AI時代のPre-Meaning概論 | kansei.info',
  description: 'Pre-Meaningを定義しようとすると、すぐに失敗する。定義は「境界」を引くが、Pre-Meaningは境界の手前に現れるからだ。繰り返し観察される特徴として描写すると：言語化されていない、判断より先に起きる、行動を直接命じない、「保留',
}

export default function Page() {
  return (
    <>
      <div style={{ padding: "48px 24px 0", maxWidth: "720px", margin: "0 auto" }}>
        <div style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "32px", display: "flex", gap: "8px", flexWrap: "wrap" }}>
          <Link href="/books" style={{ color: "var(--color-text-muted)" }}>Books</Link>
          <span>›</span>
          <Link href="/books/pre-meaning-theory" style={{ color: "var(--color-text-muted)" }}>Pre-Meaning概論</Link>
          <span>›</span>
          <span>第4章</span>
        </div>
      </div>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 96px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-labs)", marginBottom: "16px" }}>
          第4章 — AI時代のPre-Meaning概論
        </div>
        <h1 style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)", fontWeight: "300", marginBottom: "24px", lineHeight: "1.4" }}>
          Pre-Meaningとは何か（定義ではなく、観察）
        </h1>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "24px" }}>
          Pre-Meaningを定義しようとすると、すぐに失敗する。定義は「境界」を引くが、Pre-Meaningは境界の手前に現れるからだ。繰り返し観察される特徴として描写すると：言語化されていない、判断より先に起きる、行動を直接命じない、「保留」や「非行動」を含む、身体感覚と密接に結びつく。つまり、Pre-Meaningとは、意味や判断が生まれる前に、人が自分の状態を整えている過程である。この過程は常に存在していた。ただ、見られていなかっただけだ。
        </p>
        <div style={{ padding: "20px 24px", background: "var(--color-bg-alt)", border: "1px solid var(--color-border)", borderLeft: "3px solid var(--color-gold)", marginBottom: "40px" }}>
          <div style={{ fontSize: "13px", color: "var(--color-text-sub)", lineHeight: "1.85" }}>
            本章の全文は書籍でご覧いただけます。Amazon Kindle Unlimitedの方は無料でお読みいただけます。
          </div>
        </div>
        <div style={{ borderTop: "1px solid var(--color-border)", paddingTop: "32px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <Link href="/books/pre-meaning-theory/chapter-3" style={{ fontSize: "13px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>← chapter-3</Link>
          <Link href="/books/pre-meaning-theory/chapter-5" className="btn-primary">chapter-5 →</Link>
        </div>
        <RelatedKnowledge
          items={[
            { href: "/books/pre-meaning-theory", type: "book" as const, title: "目次に戻る", description: "AI時代のPre-Meaning概論" },
            { href: "/labs/pre-meaning", type: "lab" as const, title: "Pre-Meaning", description: "意味になる前の感覚" },
            { href: "/labs/atmospheric-ux", type: "lab" as const, title: "Atmospheric UX", description: "Pre-Meaningを生む空間設計" },
          ]}
        />
      </div>
    </>
  )
}
