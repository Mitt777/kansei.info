import type { Metadata } from 'next'
import Link from 'next/link'
import RelatedKnowledge from '@/components/RelatedKnowledge'
import FaqSection from '@/components/FaqSection'

export const metadata: Metadata = {
  title: 'AI時代のPre-Meaning概論 — Books | kansei.info',
  description: '「なんか落ち着く」「また来たい気がする」——意味として言語化する前に、すでに身体が感じていること。Merleau-Pontyの現象学とHCIの身体性研究を接続した、AI時代の感性論。',
}

const faqs = [
  { question: "「AI時代のPre-Meaning概論」はどんな本ですか？", answer: "「なんか落ち着く」「また来たい気がする」という、意味として言語化する前に身体が感じる感覚——Pre-Meaning——を哲学・HCI・マーケティングの三つの視点から論じた本です。Merleau-Pontyの現象学とHCIの身体性研究を接続し、AI時代にこの「意味になる前の感覚」の価値がなぜ上がるかを解明します。" },
  { question: "Pre-Meaningはビジネスにどう活かせますか？", answer: "Pre-Meaningを引き起こす空間設計（Atmospheric UX）の実践に直結します。「削ること」「余白を作ること」「感覚的要素を整えること」が核心です。また、SNSコンテンツにおいてもPre-Meaningを意識した「空気が写る動画・写真」の重要性を論じています。" },
]

export default function Page() {
  return (
    <>
      <div style={{ padding: "48px 24px 0", maxWidth: "720px", margin: "0 auto" }}>
        <div style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "32px", display: "flex", gap: "8px" }}>
          <Link href="/books" style={{ color: "var(--color-text-muted)" }}>Books</Link>
          <span>›</span>
          <span style={{ color: "var(--color-text)" }}>AI時代のPre-Meaning概論...</span>
        </div>
      </div>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 96px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-books)", marginBottom: "12px" }}>
          Book — 全文公開
        </div>
        <h1 style={{ fontSize: "clamp(1.3rem, 2.8vw, 2rem)", fontWeight: "300", marginBottom: "8px", lineHeight: "1.4" }}>
          AI時代のPre-Meaning概論
        </h1>
        <p style={{ fontSize: "14px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", marginBottom: "8px" }}>
          ―― 意味の前で、人は立ち止まってきた
        </p>
        <p style={{ fontSize: "12px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", marginBottom: "28px" }}>
          藤井実彦 著<span style={{ marginLeft: "8px" }}>ネクストドアー出版</span>
        </p>
        <p style={{ fontSize: "15px", color: "var(--color-text-sub)", lineHeight: "1.9", marginBottom: "24px" }}>
          「なんか落ち着く」「また来たい気がする」——意味として言語化する前に、すでに身体が感じていること。Merleau-Pontyの現象学とHCIの身体性研究を接続した、AI時代の感性論。
        </p>
        <p style={{ fontSize: "15px", color: "var(--color-text-sub)", lineHeight: "1.9", marginBottom: "32px", padding: "20px 24px", background: "var(--color-bg-alt)", borderLeft: "3px solid var(--color-books)" }}>
          Pre-Meaningとは、人が場所・体験・ブランドに触れた時、「意味」として言語化・理解する前の段階で、すでに身体的反応として生じている感覚的状態のことだ。AIが意味情報の処理を得意とする時代に、この「意味になる前の感覚」の価値は逆に上がっていく。本書はその構造を哲学・HCI・マーケティングの三つの視点から論じる。
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "32px" }}>
          <span style={{ fontSize: "12px", padding: "3px 10px", border: "1px solid var(--color-border)", borderRadius: "2px", color: "var(--color-text-sub)", fontFamily: "var(--font-mono)" }}>Pre-Meaning</span> <span style={{ fontSize: "12px", padding: "3px 10px", border: "1px solid var(--color-border)", borderRadius: "2px", color: "var(--color-text-sub)", fontFamily: "var(--font-mono)" }}>現象学</span> <span style={{ fontSize: "12px", padding: "3px 10px", border: "1px solid var(--color-border)", borderRadius: "2px", color: "var(--color-text-sub)", fontFamily: "var(--font-mono)" }}>Merleau-Ponty</span> <span style={{ fontSize: "12px", padding: "3px 10px", border: "1px solid var(--color-border)", borderRadius: "2px", color: "var(--color-text-sub)", fontFamily: "var(--font-mono)" }}>AI時代</span> <span style={{ fontSize: "12px", padding: "3px 10px", border: "1px solid var(--color-border)", borderRadius: "2px", color: "var(--color-text-sub)", fontFamily: "var(--font-mono)" }}>感性</span> <span style={{ fontSize: "12px", padding: "3px 10px", border: "1px solid var(--color-border)", borderRadius: "2px", color: "var(--color-text-sub)", fontFamily: "var(--font-mono)" }}>身体性</span> <span style={{ fontSize: "12px", padding: "3px 10px", border: "1px solid var(--color-border)", borderRadius: "2px", color: "var(--color-text-sub)", fontFamily: "var(--font-mono)" }}>HCI</span>
        </div>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "64px" }}>
          <a href="https://amzn.asia/d/0gOnyYvO" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Amazonで購入 →
          </a>
          <Link href="/books" className="btn-secondary">著作一覧に戻る</Link>
        </div>
        <FaqSection faqs={faqs} />

        <RelatedKnowledge
          items={[
            { href: "/labs/pre-meaning", type: "lab" as const, title: "Pre-Meaning", description: "概念の詳細" },
            { href: "/labs/atmospheric-ux", type: "lab" as const, title: "Atmospheric UX", description: "Pre-Meaningを生む設計" },
            { href: "/en/books/eternal-millimeter-short", type: "book" as const, title: "The Eternal Millimeter", description: "英語版Pre-Meaning" },
          ]}
        />
      </div>
    </>
  )
}
