import type { Metadata } from 'next'
import Link from 'next/link'
import RelatedKnowledge from '@/components/RelatedKnowledge'

export const metadata: Metadata = {
  title: '第9章 それでも、未来は最適化される — AI時代のPre-Meaning概論 | kansei.info',
  description: '最適化は止まらない。止めるべきでもない。この現実を正面から引き受けた上で問いを立て直す。「戻る」という選択肢は存在しない。問題は進化の善悪ではなく「設計条件」の問題だ。どれだけ最適化してもよい。ただし、人が立ち止まれる余白を、設計から消して',
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
          <span>第9章</span>
        </div>
      </div>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 96px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-labs)", marginBottom: "16px" }}>
          第9章 — AI時代のPre-Meaning概論
        </div>
        <h1 style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)", fontWeight: "300", marginBottom: "24px", lineHeight: "1.4" }}>
          それでも、未来は最適化される
        </h1>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "24px" }}>
          最適化は止まらない。止めるべきでもない。この現実を正面から引き受けた上で問いを立て直す。「戻る」という選択肢は存在しない。問題は進化の善悪ではなく「設計条件」の問題だ。どれだけ最適化してもよい。ただし、人が立ち止まれる余白を、設計から消してはならない。これは倫理ではない。価値観でもない。設計制約である。未来は速くなり、正確になり、静かになるだろう。その中で人間が人間であり続けるには、「考えきらない時間を奪われないこと」が必要だ。
        </p>
        <div style={{ padding: "20px 24px", background: "var(--color-bg-alt)", border: "1px solid var(--color-border)", borderLeft: "3px solid var(--color-gold)", marginBottom: "40px" }}>
          <div style={{ fontSize: "13px", color: "var(--color-text-sub)", lineHeight: "1.85" }}>
            本章の全文は書籍でご覧いただけます。Amazon Kindle Unlimitedの方は無料でお読みいただけます。
          </div>
        </div>
        <div style={{ borderTop: "1px solid var(--color-border)", paddingTop: "32px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <Link href="/books/pre-meaning-theory/chapter-8" style={{ fontSize: "13px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>← chapter-8</Link>
          <Link href="/books/pre-meaning-theory/chapter-10" className="btn-primary">chapter-10 →</Link>
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
