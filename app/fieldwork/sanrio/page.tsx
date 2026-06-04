import type { Metadata } from 'next'
import Link from 'next/link'
import PracticeBridge from '@/components/PracticeBridge'
import RelatedKnowledge from '@/components/RelatedKnowledge'
import FaqSection from '@/components/FaqSection'

export const metadata: Metadata = {
  title: 'サンリオピューロランド — Fieldwork | kansei.info',
  description: '「かわいい」というPre-Meaningが世界観の核。ディズニーが物語を所有するのに対し、サンリオは愛着を増幅させる。IP活用型世界観の典型事例。1990年開園。',
}

const faqs = [
  { question: "サンリオピューロランドの世界観設計の特徴は何ですか？", answer: "「かわいい」というPre-Meaningが世界観の核です。Hello Kittyを見た瞬間、人は論理的評価をする前に感情的反応を示します。ディズニーが「物語を所有する」のに対し、サンリオは「愛着という感情を増幅させる」アプローチです。これがIP活用型（Type A'）世界観の典型例です。" },
  { question: "キャラクターIPを持たない場所がサンリオから学べることは何ですか？", answer: "「Pre-Meaningに訴えかける」という思想です。「かわいい」でなくても、「懐かしい」「温かい」「凛とした」など、言語化前の感情的反応を引き起こす要素を意図的に設計することができます。空間の素材・色・音・匂いによってPre-Meaningを設計することが、小さな場所でも実践できるサンリオ的アプローチです。" },
]

export default function Page() {
  return (
    <>
      <div style={{ padding: "48px 24px 0", maxWidth: "720px", margin: "0 auto" }}>
        <div style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "32px", display: "flex", gap: "8px" }}>
          <Link href="/fieldwork" style={{ color: "var(--color-text-muted)" }}>Fieldwork</Link>
          <span>›</span>
          <span>サンリオピューロランド</span>
        </div>
      </div>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 96px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-labs)", marginBottom: "12px" }}>
          Type A’ — IP活用型 — 東京都多摩市
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", fontWeight: "300", marginBottom: "16px" }}>
          サンリオピューロランド
        </h1>
        <p style={{ fontSize: "15px", color: "var(--color-text-sub)", lineHeight: "1.85", marginBottom: "48px", padding: "20px 24px", background: "var(--color-bg-alt)", borderLeft: "3px solid var(--color-labs)" }}>
          「かわいい」というPre-Meaningが世界観の核。ディズニーが物語を所有するのに対し、サンリオは愛着を増幅させる。IP活用型世界観の典型事例。1990年開園。
        </p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>7層評価</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>①原初物語：○ Hello Kittyというキャラクター神話。②世界観接触：◎ IPの圧倒的な認知度。③境界侵入：○。④没入環境：○ キャラクター世界の徹底。⑤期待増幅：○。⑥感動体験：○。⑦伝播帰属：◎ 熱狂的ファン文化。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>Pre-Meaningとサンリオ</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>「かわいい」は典型的なPre-Meaningだ。Hello Kittyを見た瞬間、人は論理的評価をする前に感情的反応を示す。サンリオはこのPre-Meaningを最大化することに特化した世界観設計を実践している。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>ディズニーとの本質的な違い</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>ディズニーは「物語」を所有するが、サンリオは「愛着」を増幅させる。どちらも優れた世界観設計だが、源泉が異なる。ディズニーが没落しない理由は物語の所有にあり、サンリオが変化に対応できる理由は愛着という感情に依拠しているからだ。</p>
        <div style={{ borderTop: "1px solid var(--color-border)", paddingTop: "32px", marginTop: "48px" }}>
          <Link href="/fieldwork" style={{ fontSize: "13px", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>
            ← フィールドワーク一覧
          </Link>
        </div>
        <FaqSection faqs={faqs} />

        <PracticeBridge />

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
