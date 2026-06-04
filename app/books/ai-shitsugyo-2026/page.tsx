import type { Metadata } from 'next'
import Link from 'next/link'
import RelatedKnowledge from '@/components/RelatedKnowledge'
import PracticeBridge from '@/components/PracticeBridge'

export const metadata: Metadata = {
  title: 'AI失業2026 — Books | kansei.info',
  description: 'AIによって失われる仕事と、感性・世界観という人間固有の価値の逆説的な上昇を論じる。日米のAIリストラ動向を分析し、AI時代に生き残る戦略を提示。',
}

export default function Page() {
  return (
    <>
      <div style={{ padding: "48px 24px 0", maxWidth: "720px", margin: "0 auto" }}>
        <div style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "32px", display: "flex", gap: "8px" }}>
          <Link href="/books" style={{ color: "var(--color-text-muted)" }}>Books</Link>
          <span>›</span>
          <span>AI失業2026...</span>
        </div>
      </div>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 96px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-books)", marginBottom: "12px" }}>
          Book — 章別抜粋公開
        </div>
        <h1 style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)", fontWeight: "300", marginBottom: "8px", lineHeight: "1.4" }}>
          AI失業2026
        </h1>
        <p style={{ fontSize: "14px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", marginBottom: "24px" }}>
          ―― 日米AIリストラ新潮流
        </p>
        <p style={{ fontSize: "15px", color: "var(--color-text-sub)", lineHeight: "1.9", marginBottom: "32px" }}>
          AIによって失われる仕事と、感性・世界観という人間固有の価値の逆説的な上昇を論じる。日米のAIリストラ動向を分析し、AI時代に生き残る戦略を提示。
        </p>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "48px" }}>
          <a href="https://amzn.asia/d/03B2H7B9" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Amazonで購入 →
          </a>
          <Link href="/books" className="btn-secondary">著作一覧に戻る</Link>
        </div>

        <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "16px" }}>
          目次 — 各章を読む
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "2px", marginBottom: "48px" }}>
              <div style={{ padding: "14px 20px", background: "var(--color-bg-alt)", fontSize: "13px", color: "var(--color-text-muted)" }}>まえがき</div>
              <Link href="/books/ai-shitsugyo-2026/chapter-1" style={{ display: "flex", gap: "16px", padding: "14px 20px", border: "1px solid var(--color-border)", background: "var(--color-surface)", textDecoration: "none", color: "inherit", borderLeft: "3px solid var(--color-gold)" }}>
                <span style={{ fontSize: "14px", color: "var(--color-text)" }}>第1章 AI失業は本当に起きているのか</span>
                <span style={{ marginLeft: "auto", fontSize: "12px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>→</span>
              </Link>
              <Link href="/books/ai-shitsugyo-2026/chapter-2" style={{ display: "flex", gap: "16px", padding: "14px 20px", border: "1px solid var(--color-border)", background: "var(--color-surface)", textDecoration: "none", color: "inherit", borderLeft: "3px solid var(--color-gold)" }}>
                <span style={{ fontSize: "14px", color: "var(--color-text)" }}>第2章 フィジカルAI元年——知能が身体を持つとき</span>
                <span style={{ marginLeft: "auto", fontSize: "12px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>→</span>
              </Link>
              <Link href="/books/ai-shitsugyo-2026/chapter-3" style={{ display: "flex", gap: "16px", padding: "14px 20px", border: "1px solid var(--color-border)", background: "var(--color-surface)", textDecoration: "none", color: "inherit", borderLeft: "3px solid var(--color-gold)" }}>
                <span style={{ fontSize: "14px", color: "var(--color-text)" }}>第3章 AGIと身体性の哲学</span>
                <span style={{ marginLeft: "auto", fontSize: "12px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>→</span>
              </Link>
              <Link href="/books/ai-shitsugyo-2026/chapter-4" style={{ display: "flex", gap: "16px", padding: "14px 20px", border: "1px solid var(--color-border)", background: "var(--color-surface)", textDecoration: "none", color: "inherit", borderLeft: "3px solid var(--color-gold)" }}>
                <span style={{ fontSize: "14px", color: "var(--color-text)" }}>第4章 中間層圧縮と日本型雇用の変容</span>
                <span style={{ marginLeft: "auto", fontSize: "12px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>→</span>
              </Link>
              <Link href="/books/ai-shitsugyo-2026/chapter-5" style={{ display: "flex", gap: "16px", padding: "14px 20px", border: "1px solid var(--color-border)", background: "var(--color-surface)", textDecoration: "none", color: "inherit", borderLeft: "3px solid var(--color-gold)" }}>
                <span style={{ fontSize: "14px", color: "var(--color-text)" }}>第5章 生き残る仕事・消える仕事</span>
                <span style={{ marginLeft: "auto", fontSize: "12px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>→</span>
              </Link>
              <Link href="/books/ai-shitsugyo-2026/epilogue" style={{ display: "flex", gap: "16px", padding: "14px 20px", border: "1px solid var(--color-border)", background: "var(--color-surface)", textDecoration: "none", color: "inherit", borderLeft: "3px solid var(--color-gold)" }}>
                <span style={{ fontSize: "14px", color: "var(--color-text)" }}>終章 AI時代に、人間はどこで呼吸するのか</span>
                <span style={{ marginLeft: "auto", fontSize: "12px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>→</span>
              </Link>
        </div>

        <PracticeBridge
          title="AI時代に残る感性価値を、お店の見え方で確認してみてください。"
          description="お客様.COMは、AIに置き換えにくいお店らしさ、入りやすさ、また行きたい理由を、初めて客目線で整理する入口です。"
          linkLabel="お客様.COMで無料診断を試す →"
        />

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
