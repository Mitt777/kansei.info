import type { Metadata } from 'next'
import Link from 'next/link'
import RelatedKnowledge from '@/components/RelatedKnowledge'

export const metadata: Metadata = {
  title: 'AI時代のPre-Meaning概論 — Books | kansei.info',
  description: '「なんか落ち着く」「また来たい気がする」——意味として言語化する前の段階で、すでに身体的反応として生じている感覚的状態。AI時代になるほど逆說的に価値が上がる。藤井実彦著。',
}

export default function Page() {
  return (
    <>
      <div style={{ padding: "48px 24px 0", maxWidth: "720px", margin: "0 auto" }}>
        <div style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "32px", display: "flex", gap: "8px" }}>
          <Link href="/books" style={{ color: "var(--color-text-muted)" }}>Books</Link>
          <span>›</span>
          <span>Pre-Meaning概論</span>
        </div>
      </div>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 96px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-labs)", marginBottom: "12px" }}>
          Book — 章別全文公開
        </div>
        <h1 style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)", fontWeight: "300", marginBottom: "8px" }}>
          AI時代のPre-Meaning概論
        </h1>
        <p style={{ fontSize: "14px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", marginBottom: "20px" }}>
          ―― 意味の前で、人は立ち止まってきた
        </p>
        <p style={{ fontSize: "15px", color: "var(--color-text-sub)", lineHeight: "1.9", marginBottom: "32px" }}>
          「なんか落ち着く」「また来たい気がする」——意味として言語化する前の段階で、すでに身体的反応として生じている感覚的状態。
          那須フィールドワークから生まれ、HCII2026国際学会採択論文の思考の記録。
        </p>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "40px" }}>
          <a href="https://amzn.asia/d/0gOnyYvO" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Amazonで購入 →
          </a>
          <Link href="/books" className="btn-secondary">著作一覧に戻る</Link>
        </div>
        <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "16px" }}>
          目次 — 各章を読む
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "2px", marginBottom: "48px" }}>
              <Link href="/books/pre-meaning-theory/prologue" style={{ display: "flex", alignItems: "center", gap: "16px", padding: "14px 20px", border: "1px solid var(--color-border)", background: "var(--color-surface)", textDecoration: "none", color: "inherit", borderLeft: "3px solid var(--color-gold)" }}>
                <span style={{ fontSize: "14px", color: "var(--color-text)" }}>序章　これは未来を当てる本ではない</span>
                <span style={{ marginLeft: "auto", fontSize: "12px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>→</span>
              </Link>
              <Link href="/books/pre-meaning-theory/chapter-1" style={{ display: "flex", alignItems: "center", gap: "16px", padding: "14px 20px", border: "1px solid var(--color-border)", background: "var(--color-surface)", textDecoration: "none", color: "inherit", borderLeft: "3px solid var(--color-gold)" }}>
                <span style={{ fontSize: "14px", color: "var(--color-text)" }}>第1章　ナゾのフィールドワークから始まった問い</span>
                <span style={{ marginLeft: "auto", fontSize: "12px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>→</span>
              </Link>
              <Link href="/books/pre-meaning-theory/chapter-2" style={{ display: "flex", alignItems: "center", gap: "16px", padding: "14px 20px", border: "1px solid var(--color-border)", background: "var(--color-surface)", textDecoration: "none", color: "inherit", borderLeft: "3px solid var(--color-gold)" }}>
                <span style={{ fontSize: "14px", color: "var(--color-text)" }}>第2章　成果はすべて「枝葉」だった</span>
                <span style={{ marginLeft: "auto", fontSize: "12px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>→</span>
              </Link>
              <Link href="/books/pre-meaning-theory/chapter-3" style={{ display: "flex", alignItems: "center", gap: "16px", padding: "14px 20px", border: "1px solid var(--color-border)", background: "var(--color-surface)", textDecoration: "none", color: "inherit", borderLeft: "3px solid var(--color-gold)" }}>
                <span style={{ fontSize: "14px", color: "var(--color-text)" }}>第3章　学問史の中に現れた空白</span>
                <span style={{ marginLeft: "auto", fontSize: "12px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>→</span>
              </Link>
              <Link href="/books/pre-meaning-theory/chapter-4" style={{ display: "flex", alignItems: "center", gap: "16px", padding: "14px 20px", border: "1px solid var(--color-border)", background: "var(--color-surface)", textDecoration: "none", color: "inherit", borderLeft: "3px solid var(--color-gold)" }}>
                <span style={{ fontSize: "14px", color: "var(--color-text)" }}>第4章　Pre-Meaningとは何か（定義ではなく、観察）</span>
                <span style={{ marginLeft: "auto", fontSize: "12px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>→</span>
              </Link>
              <Link href="/books/pre-meaning-theory/chapter-5" style={{ display: "flex", alignItems: "center", gap: "16px", padding: "14px 20px", border: "1px solid var(--color-border)", background: "var(--color-surface)", textDecoration: "none", color: "inherit", borderLeft: "3px solid var(--color-gold)" }}>
                <span style={{ fontSize: "14px", color: "var(--color-text)" }}>第5章　AIはなぜPre-Meaningを壊し始めたのか</span>
                <span style={{ marginLeft: "auto", fontSize: "12px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>→</span>
              </Link>
              <Link href="/books/pre-meaning-theory/chapter-6" style={{ display: "flex", alignItems: "center", gap: "16px", padding: "14px 20px", border: "1px solid var(--color-border)", background: "var(--color-surface)", textDecoration: "none", color: "inherit", borderLeft: "3px solid var(--color-gold)" }}>
                <span style={{ fontSize: "14px", color: "var(--color-text)" }}>第6章　なぜ「啓蒙しない」のか</span>
                <span style={{ marginLeft: "auto", fontSize: "12px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>→</span>
              </Link>
              <Link href="/books/pre-meaning-theory/chapter-7" style={{ display: "flex", alignItems: "center", gap: "16px", padding: "14px 20px", border: "1px solid var(--color-border)", background: "var(--color-surface)", textDecoration: "none", color: "inherit", borderLeft: "3px solid var(--color-gold)" }}>
                <span style={{ fontSize: "14px", color: "var(--color-text)" }}>第7章　これは思想か、研究か</span>
                <span style={{ marginLeft: "auto", fontSize: "12px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>→</span>
              </Link>
              <Link href="/books/pre-meaning-theory/chapter-8" style={{ display: "flex", alignItems: "center", gap: "16px", padding: "14px 20px", border: "1px solid var(--color-border)", background: "var(--color-surface)", textDecoration: "none", color: "inherit", borderLeft: "3px solid var(--color-gold)" }}>
                <span style={{ fontSize: "14px", color: "var(--color-text)" }}>第8章　学問史の中で、これはどこに立つのか</span>
                <span style={{ marginLeft: "auto", fontSize: "12px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>→</span>
              </Link>
              <Link href="/books/pre-meaning-theory/chapter-9" style={{ display: "flex", alignItems: "center", gap: "16px", padding: "14px 20px", border: "1px solid var(--color-border)", background: "var(--color-surface)", textDecoration: "none", color: "inherit", borderLeft: "3px solid var(--color-gold)" }}>
                <span style={{ fontSize: "14px", color: "var(--color-text)" }}>第9章　それでも、未来は最適化される</span>
                <span style={{ marginLeft: "auto", fontSize: "12px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>→</span>
              </Link>
              <Link href="/books/pre-meaning-theory/chapter-10" style={{ display: "flex", alignItems: "center", gap: "16px", padding: "14px 20px", border: "1px solid var(--color-border)", background: "var(--color-surface)", textDecoration: "none", color: "inherit", borderLeft: "3px solid var(--color-gold)" }}>
                <span style={{ fontSize: "14px", color: "var(--color-text)" }}>第10章　それでも、人間は残る</span>
                <span style={{ marginLeft: "auto", fontSize: "12px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>→</span>
              </Link>
              <Link href="/books/pre-meaning-theory/epilogue" style={{ display: "flex", alignItems: "center", gap: "16px", padding: "14px 20px", border: "1px solid var(--color-border)", background: "var(--color-surface)", textDecoration: "none", color: "inherit", borderLeft: "3px solid var(--color-gold)" }}>
                <span style={{ fontSize: "14px", color: "var(--color-text)" }}>終章　それでも、書かずにいられなかった</span>
                <span style={{ marginLeft: "auto", fontSize: "12px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>→</span>
              </Link>
        </div>
        <RelatedKnowledge
          items={[
            { href: "/labs/pre-meaning", type: "lab" as const, title: "Pre-Meaning", description: "独自概念詳細" },
            { href: "/labs/atmospheric-ux", type: "lab" as const, title: "Atmospheric UX", description: "空気のUX設計" },
            { href: "/research/hcii2026", type: "research" as const, title: "HCII2026論文", description: "学術的検証" },
          ]}
        />
      </div>
    </>
  )
}
