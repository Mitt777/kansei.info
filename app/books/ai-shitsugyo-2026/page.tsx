import type { Metadata } from 'next'
import Link from 'next/link'
import RelatedKnowledge from '@/components/RelatedKnowledge'
import FaqSection from '@/components/FaqSection'

export const metadata: Metadata = {
  title: 'AI失業2026 — Books | kansei.info',
  description: 'AIによって失われる仕事と、感性・世界観という人間固有の価値の逆説的な上昇を論じる。日米のAIリストラ動向を分析し、AI時代に生き残る戦略を提示。',
}

const faqs = [
  { question: "「AI失業2026」はどんな本ですか？", answer: "AIによって失われる仕事と、感性・世界観という人間固有の価値の逆説的な上昇を論じた本です。日米のAIリストラ動向を分析し、AI時代に生き残る戦略を提示します。AIが便利さを最適化するほど、人間の感性・身体感覚・世界観の価値が上がるという逆説を具体的に解説します。" },
  { question: "AI時代に価値が上がる仕事は何ですか？", answer: "感性の設計者・世界観の構築者・身体体験の提供者が価値を増します。AIが生成できない「その場にいた感覚」「空気」「Pre-Meaning」を設計する能力が、AI時代の最も重要なスキルです。世界観マーケティングはまさにこの能力の実践フレームワークです。" },
]

export default function Page() {
  return (
    <>
      <div style={{ padding: "48px 24px 0", maxWidth: "720px", margin: "0 auto" }}>
        <div style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "32px", display: "flex", gap: "8px" }}>
          <Link href="/books" style={{ color: "var(--color-text-muted)" }}>Books</Link>
          <span>›</span>
          <span style={{ color: "var(--color-text)" }}>AI失業2026...</span>
        </div>
      </div>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 96px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-books)", marginBottom: "12px" }}>
          Book — 全文公開
        </div>
        <h1 style={{ fontSize: "clamp(1.3rem, 2.8vw, 2rem)", fontWeight: "300", marginBottom: "8px", lineHeight: "1.4" }}>
          AI失業2026
        </h1>
        <p style={{ fontSize: "14px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", marginBottom: "8px" }}>
          ―― 日米AIリストラ新潮流
        </p>
        <p style={{ fontSize: "12px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", marginBottom: "28px" }}>
          藤井実彦 著
        </p>
        <p style={{ fontSize: "15px", color: "var(--color-text-sub)", lineHeight: "1.9", marginBottom: "24px" }}>
          AIによって失われる仕事と、感性・世界観という人間固有の価値の逆説的な上昇を論じる。日米のAIリストラ動向を分析し、AI時代に生き残る戦略を提示。
        </p>
        <p style={{ fontSize: "15px", color: "var(--color-text-sub)", lineHeight: "1.9", marginBottom: "32px", padding: "20px 24px", background: "var(--color-bg-alt)", borderLeft: "3px solid var(--color-books)" }}>
          AIが職業を変容させる2026年に向けて、日米の企業がどのようにAIリストラを進めているかを分析する。重要なのは、AIに置き換えられる仕事と、AIによって価値が上がる仕事の構造的な違いだ。感性・世界観・身体感覚——これらはAIが最も苦手とする領域であり、逆説的にAI時代に最も価値を増す能力だ。
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "32px" }}>
          <span style={{ fontSize: "12px", padding: "3px 10px", border: "1px solid var(--color-border)", borderRadius: "2px", color: "var(--color-text-sub)", fontFamily: "var(--font-mono)" }}>AI失業</span> <span style={{ fontSize: "12px", padding: "3px 10px", border: "1px solid var(--color-border)", borderRadius: "2px", color: "var(--color-text-sub)", fontFamily: "var(--font-mono)" }}>2026</span> <span style={{ fontSize: "12px", padding: "3px 10px", border: "1px solid var(--color-border)", borderRadius: "2px", color: "var(--color-text-sub)", fontFamily: "var(--font-mono)" }}>日米比較</span> <span style={{ fontSize: "12px", padding: "3px 10px", border: "1px solid var(--color-border)", borderRadius: "2px", color: "var(--color-text-sub)", fontFamily: "var(--font-mono)" }}>AIリストラ</span> <span style={{ fontSize: "12px", padding: "3px 10px", border: "1px solid var(--color-border)", borderRadius: "2px", color: "var(--color-text-sub)", fontFamily: "var(--font-mono)" }}>感性</span> <span style={{ fontSize: "12px", padding: "3px 10px", border: "1px solid var(--color-border)", borderRadius: "2px", color: "var(--color-text-sub)", fontFamily: "var(--font-mono)" }}>人間らしさ</span>
        </div>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "64px" }}>
          <a href="https://amzn.asia/d/03B2H7B9" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Amazonで購入 →
          </a>
          <Link href="/books" className="btn-secondary">著作一覧に戻る</Link>
        </div>
        <FaqSection faqs={faqs} />

        <RelatedKnowledge
          items={[
            { href: "/labs/human-side-alignment", type: "lab" as const, title: "Human-side Alignment", description: "人間性の守り方" },
            { href: "/books/ai-creator", type: "book" as const, title: "クリエイター編", description: "フリーランスの生き残り" },
            { href: "/books/ai-local", type: "book" as const, title: "地方店舗復活編", description: "地域からの反撃" },
          ]}
        />
      </div>
    </>
  )
}
