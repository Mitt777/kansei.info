import type { Metadata } from 'next'
import Link from 'next/link'
import RelatedKnowledge from '@/components/RelatedKnowledge'

export const metadata: Metadata = {
  title: '序章 これは未来を当てる本ではない — AI時代のPre-Meaning概論 | kansei.info',
  description: 'AIの未来について語る言葉は、すでに世の中に溢れている。楽観論も、悲観論も、警鐘も、予測も、ほとんど出揃っている。それらの多くは、正しい。しかし、どこか疲れる。なぜか。それは多くの場合、判断が下された後の世界だけを語っているからだ。人は、決',
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
          <span>序章</span>
        </div>
      </div>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 96px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-labs)", marginBottom: "16px" }}>
          序章 — AI時代のPre-Meaning概論
        </div>
        <h1 style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)", fontWeight: "300", marginBottom: "24px", lineHeight: "1.4" }}>
          これは未来を当てる本ではない
        </h1>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "24px" }}>
          AIの未来について語る言葉は、すでに世の中に溢れている。楽観論も、悲観論も、警鐘も、予測も、ほとんど出揃っている。それらの多くは、正しい。しかし、どこか疲れる。なぜか。それは多くの場合、判断が下された後の世界だけを語っているからだ。人は、決めてから動くのではない。動いたあとで、意味を作る。この単純な事実が、正面から扱われてこなかった。本書はその「判断が生まれる前の層」をPre-Meaning（意味以前）と呼ぶ。
        </p>
        <div style={{ padding: "20px 24px", background: "var(--color-bg-alt)", border: "1px solid var(--color-border)", borderLeft: "3px solid var(--color-gold)", marginBottom: "40px" }}>
          <div style={{ fontSize: "13px", color: "var(--color-text-sub)", lineHeight: "1.85" }}>
            本章の全文は書籍でご覧いただけます。Amazon Kindle Unlimitedの方は無料でお読みいただけます。
          </div>
        </div>
        <div style={{ borderTop: "1px solid var(--color-border)", paddingTop: "32px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <span />
          <Link href="/books/pre-meaning-theory/chapter-1" className="btn-primary">chapter-1 →</Link>
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
