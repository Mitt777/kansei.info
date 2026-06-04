import type { Metadata } from 'next'
import Link from 'next/link'
import PracticeBridge from '@/components/PracticeBridge'
import RelatedKnowledge from '@/components/RelatedKnowledge'
import FaqSection from '@/components/FaqSection'

export const metadata: Metadata = {
  title: 'Human-side Alignment — Labs | kansei.info',
  description: 'AI業界の「Alignment」の逆——人間側がAI時代にどう整合するか。空気・余白・地域・帰属・身体感覚が、人間性のインターフェースとして機能する設計思想。',
}

const faqs = [
  { question: "Human-side Alignmentとは何ですか？", answer: "Human-side Alignmentとは、AI時代において人間側がいかに「人間らしさ」を維持・設計するかという思想です。AI Alignment（AIを人間の価値観に合わせる）の逆転発想で、人間側がAI時代の空間・環境・体験をどう設計するかを問います。藤井実彦がkansei.infoで提唱する独自概念（2024）です。" },
  { question: "AI時代に人間らしさを守るにはどうすればいいですか？", answer: "空気・余白・地域性・身体感覚・偶然性を意図的に設計することです。AIが便利さを最適化するほど、静けさ・余白・帰れる場所の価値が上がります。世界観マーケティングの7層モデルは、まさにHuman-side Alignmentを実践するフレームワークです。" },
]

export default function Page() {
  return (
    <>
      <div style={{ padding: "48px 24px 0", maxWidth: "720px", margin: "0 auto" }}>
        <div style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "32px", display: "flex", gap: "8px" }}>
          <Link href="/labs" style={{ color: "var(--color-text-muted)" }}>Labs</Link>
          <span>›</span>
          <span>Human-side Alignment</span>
        </div>
      </div>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 96px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-labs)", marginBottom: "12px" }}>
          Original Concept — 人間側整合
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", fontWeight: "300", marginBottom: "16px" }}>
          Human-side Alignment
        </h1>
        <p style={{ fontSize: "15px", color: "var(--color-text-sub)", lineHeight: "1.85", marginBottom: "16px" }}>
          AI業界の「Alignment」の逆——人間側がAI時代にどう整合するか。空気・余白・地域・帰属・身体感覚が、人間性のインターフェースとして機能する設計思想。
        </p>
        <div style={{ padding: "16px 20px", background: "var(--color-bg-alt)", border: "1px solid var(--color-border)", borderLeft: "3px solid var(--color-labs)", marginBottom: "48px" }}>
          <div style={{ fontSize: "10px", letterSpacing: "0.15em", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "6px" }}>Theory Foundation</div>
          <p style={{ fontSize: "13px", color: "var(--color-text-sub)", lineHeight: "1.7", fontStyle: "italic" }}>AI Alignment（AIを人間の価値観に合わせる概念）を逆転させた独自概念。Mark Weiser の Calm Technology（1996）とも接続。</p>
        </div>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>定義</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>Human-side Alignmentとは、AIが「便利」を最適化する時代において、人間側がいかに「人間らしさ」を維持・設計するかという思想だ。AIを人間に合わせるAlignment（AI Alignment）の逆転——人間側が、AI時代の空間・環境・体験をどう設計するかという問いに答える。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>なぜ今この概念が必要か</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>AIエージェントが店を選び、推薦し、比較する時代になる。情報・デザイン・コピー・接客——これらはAIによって大量供給される。だからこそ逆に、空気、余白、身体感覚、地域性、偶然性、居場所の価値が上がる。これらは、Human-side Alignmentを実践することで守られる。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>Calm Technologyとの接続</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>Mark Weiser & John Seely Brown（1996）が提唱したCalm Technologyは「主張しすぎない技術」の概念だ。情報や刺激が最小限で、人間の注意を穏やかに保ちながら機能する設計思想。Human-side Alignmentは、この思想をAI時代の空間設計に拡張する。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>実践：世界観マーケティングとの関係</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>世界観マーケティングとは、最終的にはHuman-side Alignmentを実践することに他ならない。ノイズを減らし、余白を作り、空気を整える——これらすべてが、人間が「呼吸できる場所」を設計する行為だ。</p>
        <FaqSection faqs={faqs} />

        <PracticeBridge />

        <RelatedKnowledge
          items={[
            { href: "/labs/pre-meaning", type: "lab" as const, title: "Pre-Meaning", description: "身体感覚の先行" },
            { href: "/labs/calm-technology", type: "lab" as const, title: "Calm Technology", description: "主張しない設計" },
            { href: "/books/sekaikan/chapter-6", type: "book" as const, title: "第六章", description: "AI時代の空気の価値" },
          ]}
        />
      </div>
    </>
  )
}
