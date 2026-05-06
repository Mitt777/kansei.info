import type { Metadata } from 'next'
import Link from 'next/link'
import RelatedKnowledge from '@/components/RelatedKnowledge'

export const metadata: Metadata = {
  title: 'Atmospheric UX — Labs | kansei.info',
  description: '音・匂い・光・温度・素材感——空気そのものをUX設計の対象として扱う概念。「なんか落ち着く」の構造を設計可能にする。',
}

export default function Page() {
  return (
    <>
      <div style={{ padding: "48px 24px 0", maxWidth: "720px", margin: "0 auto" }}>
        <div style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "32px", display: "flex", gap: "8px" }}>
          <Link href="/labs" style={{ color: "var(--color-text-muted)" }}>Labs</Link>
          <span>›</span>
          <span>Atmospheric UX</span>
        </div>
      </div>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 96px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-labs)", marginBottom: "12px" }}>
          Original Concept — 空気のUX
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", fontWeight: "300", marginBottom: "16px" }}>
          Atmospheric UX
        </h1>
        <p style={{ fontSize: "15px", color: "var(--color-text-sub)", lineHeight: "1.85", marginBottom: "16px" }}>
          音・匂い・光・温度・素材感——空気そのものをUX設計の対象として扱う概念。「なんか落ち着く」の構造を設計可能にする。
        </p>
        <div style={{ padding: "16px 20px", background: "var(--color-bg-alt)", border: "1px solid var(--color-border)", borderLeft: "3px solid var(--color-labs)", marginBottom: "48px" }}>
          <div style={{ fontSize: "10px", letterSpacing: "0.15em", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "6px" }}>Theory Foundation</div>
          <p style={{ fontSize: "13px", color: "var(--color-text-sub)", lineHeight: "1.7", fontStyle: "italic" }}>Gernot Böhme の Atmosphere Theory（1993）を顧客体験設計へ拡張。「雰囲気（Atmosphäre）」を美学・空間設計の対象として扱う哲学が理論的基盤。</p>
        </div>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>定義</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>Atmospheric UXとは、音・匂い・光・温度・素材感・導線といった感覚的要素の総体——すなわち「空気」そのものを、UX設計の主要ターゲットとして扱うデザインパラダイムである。従来のUXが画面・操作・機能に焦点を当てていたのに対し、Atmospheric UXは空間全体が人間に与える感覚的体験を設計の対象とする。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>なぜ今、重要か</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>AIによって情報・コンテンツ・機能は急速に均質化する。しかし、空気は均質化しない。「なんか落ち着く」「この場所が好き」という感覚は、AI生成コンテンツには作れない。Pre-Meaning——意味になる前に身体が感じるもの——は、Atmospheric UXの設計によって生まれる。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>実践例：SHOZO CAFEの静けさ</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>SHOZO CAFEには、独特の静けさがある。大音量のBGMもない。過剰な接客もない。しかし、あの空気に惹かれる人がいる。重要なのは、「空気」は偶然ではない、という点だ。導線、照明、席間距離、木材、音響、スタッフの所作——それらが積み重なって、Atmospheric UXは形成される。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>設計の原則</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>Atmospheric UXを設計する際の核心は「ノイズを減らすこと」だ。足すのではなく、引く。過剰POP、世界観に合わないBGM、情報過多——これらは没入を壊す。強い場所ほど、「削っている」。ディズニーのミッキーの10戒「Avoid overload（過負荷を避けよ）」も同じ思想に基づく。</p>
        <RelatedKnowledge
          items={[
            { href: "/frameworks/7layers", type: "framework" as const, title: "7層モデル——④没入環境", description: "Atmospheric UXが機能する層" },
            { href: "/labs/pre-meaning", type: "lab" as const, title: "Pre-Meaning", description: "意味になる前の感覚" },
            { href: "/fieldwork/shozo", type: "fieldwork" as const, title: "SHOZO CAFE", description: "Atmospheric UXの最高峰事例" },
          ]}
        />
      </div>
    </>
  )
}
