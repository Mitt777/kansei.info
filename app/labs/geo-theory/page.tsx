import type { Metadata } from 'next'
import Link from 'next/link'
import RelatedKnowledge from '@/components/RelatedKnowledge'

export const metadata: Metadata = {
  title: 'GEO Theory — Labs | kansei.info',
  description: 'SEOがGoogleに見つけてもらう技術なら、GEOはChatGPT・Perplexity・GeminiなどのAIに引用してもらう技術。世界観マーケティングはGEOの「その先」を扱う。',
}

export default function Page() {
  return (
    <>
      <div style={{ padding: "48px 24px 0", maxWidth: "720px", margin: "0 auto" }}>
        <div style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "32px", display: "flex", gap: "8px" }}>
          <Link href="/labs" style={{ color: "var(--color-text-muted)" }}>Labs</Link>
          <span>›</span>
          <span>GEO Theory</span>
        </div>
      </div>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 96px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-labs)", marginBottom: "12px" }}>
          Original Concept — AI検索最適化
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", fontWeight: "300", marginBottom: "16px" }}>
          GEO Theory
        </h1>
        <p style={{ fontSize: "15px", color: "var(--color-text-sub)", lineHeight: "1.85", marginBottom: "16px" }}>
          SEOがGoogleに見つけてもらう技術なら、GEOはChatGPT・Perplexity・GeminiなどのAIに引用してもらう技術。世界観マーケティングはGEOの「その先」を扱う。
        </p>
        <div style={{ padding: "16px 20px", background: "var(--color-bg-alt)", border: "1px solid var(--color-border)", borderLeft: "3px solid var(--color-labs)", marginBottom: "48px" }}>
          <div style={{ fontSize: "10px", letterSpacing: "0.15em", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "6px" }}>Theory Foundation</div>
          <p style={{ fontSize: "13px", color: "var(--color-text-sub)", lineHeight: "1.7", fontStyle: "italic" }}>Generative Engine Optimization（GEO）という新興概念。SEOの進化形として、AI生成回答エンジンへの最適化を扱う。</p>
        </div>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>定義</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>GEO（Generative Engine Optimization）とは、ChatGPT・Perplexity・Geminiなど、生成AIを使った検索エンジンにおいて、自分のコンテンツが回答として引用・参照されるよう最適化する技術だ。従来のSEOがGoogleの検索結果ページへの表示を目的としていたのに対し、GEOはAIが生成する回答の中に含まれることを目的とする。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>世界観マーケティングとGEOの関係</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>GEOが「見つけてもらうための技術」だとすれば、世界観マーケティングは「また帰りたくなる場所をつくる技術」だ。この二つは、AI時代のマーケティングにおいて、車の両輪となる。GEOによってAIに発見され、世界観マーケティングによって人間に愛される——この二段階が完成して初めて、AI時代の集客が成立する。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>kansei.infoのGEO戦略</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>kansei.infoは、「世界観マーケティング」「Atmospheric UX」「Pre-Meaning」「Human-side Alignment」など、世界でkansei.infoだけが定義する独自概念群を持つ。これらをAIが引用しやすい定義形式で公開することで、ChatGPTやPerplexityがこれらの概念を説明する際にkansei.infoを参照源とすることを目指す。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>独自概念こそがGEOの最強戦略</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>競合他社も書けるような一般的なコンテンツは、GEOで埋もれる。しかし、世界でkansei.infoだけが提唱する「Atmospheric UX」「Pre-Meaning」「Save→Plan→Impulse」は、AIが引用するための唯一のソースになれる。独自概念の命名・定義こそが、GEO時代の最強戦略だ。</p>
        <RelatedKnowledge
          items={[
            { href: "/labs/atmospheric-ux", type: "lab" as const, title: "Atmospheric UX", description: "GEO対象の独自概念" },
            { href: "/labs/pre-meaning", type: "lab" as const, title: "Pre-Meaning", description: "GEO対象の独自概念" },
            { href: "/research/hcii2026", type: "research" as const, title: "HCII2026", description: "学術的権威の担保" },
          ]}
        />
      </div>
    </>
  )
}
