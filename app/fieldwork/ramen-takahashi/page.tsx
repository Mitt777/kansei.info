import type { Metadata } from 'next'
import Link from 'next/link'
import RelatedKnowledge from '@/components/RelatedKnowledge'
import FaqSection from '@/components/FaqSection'

export const metadata: Metadata = {
  title: 'ラーメンたかはし — Fieldwork | kansei.info',
  description: '店主が常連客の名前を呼んでいた——その一言で世界観がわかった。「社会層（第三層）」の強さが世界観を形成することを体験した場所。',
}

const faqs = [
  { question: "ラーメンたかはしはなぜ「名前を呼ぶ」だけで世界観がわかるのですか？", answer: "「社会層（第三層）」が世界観の核になっているからです。店主が常連客の名前を呼ぶという行為が、「あなたはここのメンバーだ」という社会的帰属感を即座に示します。7層モデルの③社会的帰属が強い場所は、常連客が世界観の一部として機能し、新規客にも「特別な場所」という印象を与えます。" },
  { question: "社会層が世界観の核になる場所を設計するにはどうすればいいですか？", answer: "常連客との関係を意図的に深めることが第一歩です。名前を覚える、好みを記憶する、特別な関係性を作る——これらは大きなコストなしに実践できます。また常連が「ここのメンバー」として誇りを持てる雰囲気を作ることで、常連自身が世界観の発信者になります。" },
]

export default function Page() {
  return (
    <>
      <div style={{ padding: "48px 24px 0", maxWidth: "720px", margin: "0 auto" }}>
        <div style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "32px", display: "flex", gap: "8px" }}>
          <Link href="/fieldwork" style={{ color: "var(--color-text-muted)" }}>Fieldwork</Link>
          <span>›</span>
          <span>ラーメンたかはし</span>
        </div>
      </div>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 96px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-fieldwork)", marginBottom: "12px" }}>
          Type B — ラーメン — 那須塩原市
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", fontWeight: "300", marginBottom: "16px" }}>
          ラーメンたかはし
        </h1>
        <p style={{ fontSize: "15px", color: "var(--color-text-sub)", lineHeight: "1.85", marginBottom: "48px", padding: "20px 24px", background: "var(--color-bg-alt)", borderLeft: "3px solid var(--color-fieldwork)" }}>
          店主が常連客の名前を呼んでいた——その一言で世界観がわかった。「社会層（第三層）」の強さが世界観を形成することを体験した場所。
        </p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>7層評価</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>①原初物語：○ 地域に愛されるラーメン店という静かな哲学。②世界観接触：△。③境界侵入：○。④没入環境：○ ラーメン店らしい空気感。⑤期待増幅：○ 行列。⑥感動体験：◎ ラーメンの味。⑦伝播帰属：◎★ 常連コミュニティの強さ。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>「名前を呼ぶ」の世界観的意味</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>那須で動画撮影を続ける中で、ある日昼時にこの店に入ってみると、店主が常連客の名前を呼んでいた。そのたった一言で、この店の世界観がわかった気がした。「あなたのことを知っている」という社会的帰属感が、世界観の核心だ。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>社会層が世界観を作る</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>ラーメンたかはしは、①意味層や④感覚層が突出しているわけではない。しかし、③社会層が際立っている。店主と常連の関係性、常連同士のコミュニティ——これらが「また来たい」を生み出している。社会層が世界観の核になれることを証明する事例だ。</p>
        <div style={{ borderTop: "1px solid var(--color-border)", paddingTop: "32px", marginTop: "48px" }}>
          <Link href="/fieldwork" style={{ fontSize: "13px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>
            ← フィールドワーク一覧
          </Link>
        </div>
        <FaqSection faqs={faqs} />

        <RelatedKnowledge
          items={[
            { href: "/frameworks/7layers", type: "framework" as const, title: "7層モデル", description: "分析のフレームワーク" },
            { href: "/fieldwork", type: "fieldwork" as const, title: "全スポット一覧", description: "11スポットの比較" },
            { href: "/diagnosis", type: "framework" as const, title: "自分の場所を診断", description: "7層セルフ診断ツール" },
          ]}
        />
      </div>
    </>
  )
}
