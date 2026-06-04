import type { Metadata } from 'next'
import Link from 'next/link'
import PracticeBridge from '@/components/PracticeBridge'
import RelatedKnowledge from '@/components/RelatedKnowledge'
import FaqSection from '@/components/FaqSection'

export const metadata: Metadata = {
  title: 'SHOZO CAFE — Fieldwork | kansei.info',
  description: '「僕の趣味はまちづくりなんですよ」——那須黒磯を街ごと変えたカフェ。1998年創業。地域OSの核として機能する世界観の最高峰。',
}

const faqs = [
  { question: "SHOZO CAFEの世界観が強い理由は何ですか？", answer: "「僕の趣味はまちづくりなんですよ」という原初物語が核心です。カフェを経営しているのではなく、まちをつくっている。この明確な原初物語が、空間設計・接客・導線・BGM選択のすべての判断基準になっています。7層モデルの全層が高レベルで一致しているため、「また来たくなる場所」として成立しています。" },
  { question: "SHOZO経済圏とは何ですか？", answer: "SHOZO CAFEのオーナーが認めた方々が周辺に次々と出店し、SHOZO CAFEを核とした共鳴型経済圏が形成されています。土日・祝日はSHOZO経済圏として那須黒磯が一つの世界観を持つ地域になっています。これは共鳴型経済圏の最も成功した実例です。" },
]

export default function Page() {
  return (
    <>
      <div style={{ padding: "48px 24px 0", maxWidth: "720px", margin: "0 auto" }}>
        <div style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: "32px", display: "flex", gap: "8px" }}>
          <Link href="/fieldwork" style={{ color: "var(--color-text-muted)" }}>Fieldwork</Link>
          <span>›</span>
          <span>SHOZO CAFE</span>
        </div>
      </div>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 96px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-mono)", color: "var(--color-fieldwork)", marginBottom: "12px" }}>
          Type B — 無意識共鳴型 — 那須黒磯
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", fontWeight: "300", marginBottom: "16px" }}>
          SHOZO CAFE
        </h1>
        <p style={{ fontSize: "15px", color: "var(--color-text-sub)", lineHeight: "1.85", marginBottom: "48px", padding: "20px 24px", background: "var(--color-bg-alt)", borderLeft: "3px solid var(--color-fieldwork)" }}>
          「僕の趣味はまちづくりなんですよ」——那須黒磯を街ごと変えたカフェ。1998年創業。地域OSの核として機能する世界観の最高峰。
        </p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>7層評価</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>①原初物語：◎ まちづくりという明確な哲学。②世界観接触：◎ SNS・口コミでの空気感の伝達が優秀。③境界侵入：○ 駐車場から始まる静けさへの移行。④没入環境：◎ 静けさ・木・光・余白の完璧な一致。⑤期待増幅：○ 行列も世界観の一部。⑥感動体験：◎ コーヒーより「空気」を記憶する。⑦伝播帰属：◎ 常連・ファン・SHOZO経済圏の形成。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>SHOZO経済圏</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>オーナーが認めた方達が、SHOZO CAFEを中心としてたくさんのお店を出店し、土日や祝日はSHOZO経済圏ができている。これは共鳴型経済圏の実例だ。一店舗が地域OS全体を育てた稀有なケース。</p>
        <h2 style={{ fontSize: "18px", fontWeight: "500", margin: "40px 0 14px", color: "var(--color-text)" }}>感性民族誌ノート</h2>
        <p style={{ fontSize: "15px", lineHeight: "1.95", color: "var(--color-text-sub)", marginBottom: "20px" }}>初めて訪れた日、駐車場に車を止めてドアを開けた瞬間、空気が違った。静けさの種類が、東京のそれとは根本的に異なっていた。これはAtmospheric UXの設計によるものだと後に気づく。</p>
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
