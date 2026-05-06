import type { Metadata } from 'next'
import Link from 'next/link'
import RelatedKnowledge from '@/components/RelatedKnowledge'

export const metadata: Metadata = {
  title: '世界観の三類型（A / A’ / B） — Frameworks | kansei.info',
  description: 'Type A：意図的設計型 / Type A’：IP活用型 / Type B：無意識共鳴型。どれが優れているのではなく、それぞれの文脈で機能する異なる世界観の生み出し方。',
}

export default function Page() {
  return (
    <>
      <div style={{ padding: "48px 24px 0", maxWidth: "720px", margin: "0 auto" }}>
        <div style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "32px", display: "flex", gap: "8px" }}>
          <Link href="/frameworks" style={{ color: "var(--color-text-muted)" }}>Frameworks</Link>
          <span>›</span>
          <span>世界観の三類型（A / A’ / B）</span>
        </div>
      </div>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 96px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-frameworks)", marginBottom: "12px" }}>
          Framework — 理論フレームワーク
        </div>
        <h1 style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)", fontWeight: "300", marginBottom: "12px", lineHeight: "1.35" }}>
          世界観の三類型（A / A’ / B）
        </h1>
        <p style={{ fontSize: "14px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", marginBottom: "48px" }}>
          ―― ディズニー・サンリオ・地域店——それぞれの「物語の源泉」
        </p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>三類型とは何か</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>世界観マーケティングには、三つの根本的に異なるアプローチが存在する。Type A（意図的設計型）・Type A’（IP活用型）・Type B（無意識共鳴型）。重要なのは、どれが「優れているか」という話ではない。それぞれの文脈・リソース・ミッションに最適な戦略が異なるということだ。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>Type A：意図的設計型——ディズニー</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>自ら物語を創造・所有・管理する。ディズニーが典型。ミッキー・シンデレラ・スターウォーズ——すべてディズニーが所有する物語だ。だから世界観は外部に依存しない。フロリダでも、パリでも、東京でも、同一の「ディズニー宇宙」が機能する。莫大な資本と独自の物語創造力を必要とするが、世界観の持続力と拡張性は最高だ。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>Type A’：IP活用型——サンリオ</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>既存のIPへの愛着を軸に感情的共鳴を生む。サンリオが典型。「かわいい」というPre-Meaning——意味になる前に身体が反応する感覚——が世界観の核だ。物語を「所有」しないため、IPの人気変動リスクがあるが、すでに世界中にファンがいるIPを活用できる強みがある。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>Type B：無意識共鳴型——那須の地域店</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>地域の物語を無意識に「借景」している。那須の人気カフェ・温泉街の旅館・地域のパン屋が典型。多くのオーナーは、自分がすでに地域の力を借りていることに気づいていない。「那須が好きで、那須らしい速度で生きている」からこそ、意識せずとも地域の特性と接続され、顧客体験に矛盾がなくなる。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>自分はどの類型か——診断の視点</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>読者が最初に問うべきは「自分はどの類型に近いか」だ。Type Aを目指すには莫大な資本と物語創造力が必要だ。Type A’には強力なIPが必要だ。しかしType Bは、足元の地域に数百年蓄積された「物語のストック」がある。それを7層モデルのどこに接続するかを考えるだけで、小さなリソースで強い世界観を実現できる。</p>
        <div style={{ borderTop: "1px solid var(--color-border)", paddingTop: "32px", marginTop: "48px" }}>
          <Link href="/frameworks" style={{ fontSize: "13px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>
            ← フレームワーク一覧
          </Link>
        </div>
        <RelatedKnowledge
          items={[
            { href: "/fieldwork/disney", type: "fieldwork" as const, title: "東京ディズニーランド", description: "Type Aの最高峰" },
            { href: "/fieldwork/shozo", type: "fieldwork" as const, title: "SHOZO CAFE", description: "Type Bの最高峰" },
            { href: "/frameworks/7layers", type: "framework" as const, title: "7層モデル", description: "三類型と7層の対応" },
          ]}
        />
      </div>
    </>
  )
}
