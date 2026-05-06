import type { Metadata } from 'next'
import Link from 'next/link'
import RelatedKnowledge from '@/components/RelatedKnowledge'

export const metadata: Metadata = {
  title: 'Worldview Design — Labs | kansei.info',
  description: '「世界観は偶然ではなく、構造だ」——意図的に設計可能な世界観の設計思想。7層モデル・三類型・世界観価値の方程式を統合した実践的フレームワーク。',
}

export default function Page() {
  return (
    <>
      <div style={{ padding: "48px 24px 0", maxWidth: "720px", margin: "0 auto" }}>
        <div style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "32px", display: "flex", gap: "8px" }}>
          <Link href="/labs" style={{ color: "var(--color-text-muted)" }}>Labs</Link>
          <span>›</span>
          <span>Worldview Design</span>
        </div>
      </div>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 96px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-labs)", marginBottom: "12px" }}>
          Original Concept — 世界観設計
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", fontWeight: "300", marginBottom: "16px" }}>
          Worldview Design
        </h1>
        <p style={{ fontSize: "15px", color: "var(--color-text-sub)", lineHeight: "1.85", marginBottom: "16px" }}>
          「世界観は偶然ではなく、構造だ」——意図的に設計可能な世界観の設計思想。7層モデル・三類型・世界観価値の方程式を統合した実践的フレームワーク。
        </p>
        <div style={{ padding: "16px 20px", background: "var(--color-bg-alt)", border: "1px solid var(--color-border)", borderLeft: "3px solid var(--color-labs)", marginBottom: "48px" }}>
          <div style={{ fontSize: "10px", letterSpacing: "0.15em", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "6px" }}>Theory Foundation</div>
          <p style={{ fontSize: "13px", color: "var(--color-text-sub)", lineHeight: "1.7", fontStyle: "italic" }}>ウォルト・ディズニー・イマジニアリングの設計哲学（Art of the Show、Mickey’s Ten Commandments）と、Pine & Gilmoreの経験経済論を統合した設計思想。</p>
        </div>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>定義</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>Worldview Design（世界観設計）とは、「また来たくなる場所」を意図的に構築するための総合的な設計思想だ。世界観は偶然ではなく構造であり、設計可能だという立場に基づく。7層モデル・三類型・世界観価値の方程式・文脈継続性・Atmospheric UXを統合した実践フレームワーク。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>なぜ「設計できる」と言えるか</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>ウォルト・ディズニー・イマジニアリングは70年以上にわたり、世界観を意図的に設計してきた。「It All Begins with a Story」から始まり、Weenie理論、Art of the Show、Plussing——これらすべてが、世界観を設計可能なものとして扱う思想の実践だ。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>三類型とWorldview Design</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>Type A（意図的設計型）は、Worldview Designを最も意識的に実践する。しかしType B（無意識共鳴型）も、意識化することでWorldview Designの実践者になれる。「自分はすでに地域の物語と共鳴している」と気づくことが、Type BのWorldview Design的変革の出発点だ。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>誰でも実践できるWorldview Design</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>莫大な資本がなくても、Worldview Designは実践できる。那須の小さなカフェ店主が実践していたように、「なぜ存在するのか」を言語化し、ノイズを減らし、地域と接続するだけで良い。Worldview Designは、巨大戦略ではなく、小さな一貫性の積み重ねだ。</p>
        <RelatedKnowledge
          items={[
            { href: "/frameworks/7layers", type: "framework" as const, title: "7層モデル", description: "Worldview Designの核心" },
            { href: "/frameworks/three-types", type: "framework" as const, title: "三類型", description: "設計のアプローチ" },
            { href: "/diagnosis", type: "framework" as const, title: "診断ツール", description: "自分の世界観を測る" },
          ]}
        />
      </div>
    </>
  )
}
