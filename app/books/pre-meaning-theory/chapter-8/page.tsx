import type { Metadata } from 'next'
import Link from 'next/link'
import RelatedKnowledge from '@/components/RelatedKnowledge'

export const metadata: Metadata = {
  title: '第8章 学問史の中で、これはどこに立つのか — AI時代のPre-Meaning概論 | kansei.info',
  description: 'Pre-Meaning研究は認知心理学・社会学・HCI・AI倫理と接続しながら、一段前で立ち止まる。認知の前、規範の前、操作の前、判断の前——それぞれの学問が扱ってきた領域のさらに手前にある。そしてAI倫理との接続で最も重要なのが「判断に入',
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
          <span>第8章</span>
        </div>
      </div>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 96px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-labs)", marginBottom: "16px" }}>
          第8章 — AI時代のPre-Meaning概論
        </div>
        <h1 style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)", fontWeight: "300", marginBottom: "24px", lineHeight: "1.4" }}>
          学問史の中で、これはどこに立つのか
        </h1>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "24px" }}>
          Pre-Meaning研究は認知心理学・社会学・HCI・AI倫理と接続しながら、一段前で立ち止まる。認知の前、規範の前、操作の前、判断の前——それぞれの学問が扱ってきた領域のさらに手前にある。そしてAI倫理との接続で最も重要なのが「判断に入る前の余白」の問いだ。AIが判断を代行する時代になると、この時間はとても簡単に消えてしまう。倫理は「正しい判断」を守る。Pre-Meaningは「判断に入る前の余白」が奪われていないかを問う。
        </p>
        <div style={{ padding: "20px 24px", background: "var(--color-bg-alt)", border: "1px solid var(--color-border)", borderLeft: "3px solid var(--color-gold)", marginBottom: "40px" }}>
          <div style={{ fontSize: "13px", color: "var(--color-text-sub)", lineHeight: "1.85" }}>
            本章の全文は書籍でご覧いただけます。Amazon Kindle Unlimitedの方は無料でお読みいただけます。
          </div>
        </div>
        <div style={{ borderTop: "1px solid var(--color-border)", paddingTop: "32px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <Link href="/books/pre-meaning-theory/chapter-7" style={{ fontSize: "13px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>← chapter-7</Link>
          <Link href="/books/pre-meaning-theory/chapter-9" className="btn-primary">chapter-9 →</Link>
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
