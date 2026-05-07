import type { Metadata } from 'next'
import Link from 'next/link'
import RelatedKnowledge from '@/components/RelatedKnowledge'
import FaqSection from '@/components/FaqSection'

export const metadata: Metadata = {
  title: '世界観の三層構造 — Frameworks | kansei.info',
  description: '第一層：意味層（なぜ存在するのか）/ 第二層：感覚層（Atmospheric UX）/ 第三層：社会層（誰とそこにいるのか）。三層が有機的に接続されている状態が世界観。',
}

const faqs = [
  { question: "世界観の三層構造とは何ですか？", answer: "世界観は三つの層で構成されます。第一層：意味層（なぜ存在するのか——理念・哲学・物語）。第二層：感覚層（音・匂い・光・温度・素材感——Atmospheric UX）。第三層：社会層（誰とそこにいるのか——常連・店主・地域・コミュニティ）。三層が有機的に接続されている状態が「世界観」です。" },
  { question: "三層のうちどれが最も重要ですか？", answer: "三層はすべて重要ですが、意味層（第一層）が根本です。「なぜ存在するのか」が明確でなければ、感覚層の設計に迷い、社会層が形成されません。ただし顧客が最初に感じるのは感覚層（第二層）です。意味層を軸に、感覚層で体験させ、社会層で定着させる——この順番で設計することが有効です。" },
]

export default function Page() {
  return (
    <>
      <div style={{ padding: "48px 24px 0", maxWidth: "720px", margin: "0 auto" }}>
        <div style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "32px", display: "flex", gap: "8px" }}>
          <Link href="/frameworks" style={{ color: "var(--color-text-muted)" }}>Frameworks</Link>
          <span>›</span>
          <span>世界観の三層構造</span>
        </div>
      </div>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 96px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-frameworks)", marginBottom: "12px" }}>
          Framework — 理論フレームワーク
        </div>
        <h1 style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)", fontWeight: "300", marginBottom: "12px", lineHeight: "1.35" }}>
          世界観の三層構造
        </h1>
        <p style={{ fontSize: "14px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", marginBottom: "48px" }}>
          ―― 意味層・感覚層・社会層——三層が一貫して接続されている状態が世界観だ
        </p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>三層構造とは</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>世界観は三つの層で構成されている。第一層：意味層——「なぜ存在するのか」という問いへの答え。第二層：感覚層——音・匂い・光・温度・素材感・導線という「空気」。第三層：社会層——「誰とそこにいるのか」というコミュニティ。重要なのは、三層が有機的に接続されている状態が世界観だということだ。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>第一層：意味層（Meaning Layer）</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>理念、起源、哲学、物語。「サードプレイス」を掲げたスターバックス、「夢と魔法の王国」を掲げるディズニー、那須のSHOZO CAFEが持つ「まちづくり」への思い。重要なのは、「何を売っているか」ではなく、「どんな価値観を提供しているか」だ。AI時代になるほど、この層は重要になる。機能や情報はAIによって急速に均質化するからだ。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>第二層：感覚層（Atmospheric Layer）</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>音、匂い、光、温度、素材感、導線。SHOZO CAFEには、独特の静けさがある。大音量のBGMもない。過剰な接客もない。しかし、あの空気に惹かれる人がいる。重要なのは、「空気」は偶然ではない、という点だ。照明、席間距離、木材、音響、スタッフの所作——それらが積み重なって、「空気」は形成される。私はこれをAtmospheric UXと呼んでいる。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>第三層：社会層（Social Resonance Layer）</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>常連客、店主、地域、コミュニティ。那須で強く感じたのは、この社会層の存在だった。店同士が、ゆるやかにつながっている。競争しているようで、完全には切断されていない。地域全体で、一つの空気を育てている。重要なのは、「また来たくなる場所」は、その店単体で成立しているわけではない、ということだ。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>三層の崩れ方</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>世界観は、どの層が崩れても全体が傾く。意味層が崩れると（「なぜ存在するか」が不明確になると）、判断の基準がなくなり、空間に矛盾が増える。感覚層が崩れると（ノイズが増えると）、没入感が失われる。社会層が崩れると（常連が離れると）、「帰れる場所」でなくなる。</p>
        <div style={{ borderTop: "1px solid var(--color-border)", paddingTop: "32px", marginTop: "48px" }}>
          <Link href="/frameworks" style={{ fontSize: "13px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>
            ← フレームワーク一覧
          </Link>
        </div>
        <FaqSection faqs={faqs} />

        <RelatedKnowledge
          items={[
            { href: "/labs/atmospheric-ux", type: "lab" as const, title: "Atmospheric UX", description: "感覚層の設計概念" },
            { href: "/frameworks/worldview-value", type: "framework" as const, title: "世界観価値の方程式", description: "三層と方程式の関係" },
            { href: "/books/sekaikan/chapter-2", type: "book" as const, title: "第二章", description: "三層構造の詳細" },
          ]}
        />
      </div>
    </>
  )
}
