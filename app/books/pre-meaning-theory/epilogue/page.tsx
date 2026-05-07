import type { Metadata } from 'next'
import Link from 'next/link'
import RelatedKnowledge from '@/components/RelatedKnowledge'

export const metadata: Metadata = {
  title: '終章 それでも、書かずにいられなかった — AI時代のPre-Meaning概論 | kansei.info',
  description: 'この本は、誰かを動かすために書かれていない。ある日、確かにあったはずの感覚が、いつの間にか消えていた。迷う時間、待つ理由、立ち止まる余地——それが消えたことに誰も気づかない。なぜなら、便利さの中で消えたからだ。記録しないと、存在しなかったこ',
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
          <span>終章</span>
        </div>
      </div>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 96px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-labs)", marginBottom: "16px" }}>
          終章 — AI時代のPre-Meaning概論
        </div>
        <h1 style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)", fontWeight: "300", marginBottom: "24px", lineHeight: "1.4" }}>
          それでも、書かずにいられなかった
        </h1>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "24px" }}>
          この本は、誰かを動かすために書かれていない。ある日、確かにあったはずの感覚が、いつの間にか消えていた。迷う時間、待つ理由、立ち止まる余地——それが消えたことに誰も気づかない。なぜなら、便利さの中で消えたからだ。記録しないと、存在しなかったことになる。語られなかったものは、最初から無かったことになる。この本は、未来のために書かれていない。今、失われつつある前の時間のために書かれている。もし次に何かを決めるとき、一瞬、間が生まれること——それだけで十分だ。
        </p>
        <div style={{ padding: "20px 24px", background: "var(--color-bg-alt)", border: "1px solid var(--color-border)", borderLeft: "3px solid var(--color-gold)", marginBottom: "40px" }}>
          <div style={{ fontSize: "13px", color: "var(--color-text-sub)", lineHeight: "1.85" }}>
            本章の全文は書籍でご覧いただけます。Amazon Kindle Unlimitedの方は無料でお読みいただけます。
          </div>
        </div>
        <div style={{ borderTop: "1px solid var(--color-border)", paddingTop: "32px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <Link href="/books/pre-meaning-theory/chapter-10" style={{ fontSize: "13px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>← chapter-10</Link>
          <a href="https://amzn.asia/d/0gOnyYvO" target="_blank" rel="noopener noreferrer" className="btn-primary">Amazonで購入 →</a>
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
